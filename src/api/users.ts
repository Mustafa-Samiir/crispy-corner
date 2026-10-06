import type { ApiUser, User } from "../types/user";
import { nameOverrides, responsibilities } from "../data/staffInfo";

const API_URL = "https://api-userapi.onrender.com/api/users/getUsers";
const API_KEY = "elev-hemlighet-2026";

// Gör om namn till e-postformat: "Erik Ström" → "erik.strom@mail.com"
function createEmail(firstName: string, lastName: string): string {
  const clean = (text: string) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "") // tar bort å/ä/ö-prickar → a/a/o
      .replace(/[^a-z]/g, "");
  return `${clean(firstName)}.${clean(lastName)}@mail.com`;
}

// Översätter en API-användare till appens egen User-typ.
function toUser(raw: ApiUser): User {
  const profile = raw.profile ?? {};
  const apiName =
    profile.name ?? [profile.firstName, profile.lastName].filter(Boolean).join(" ");
  const fullName = nameOverrides[raw.username] ?? (apiName || raw.username);

  const [firstName, ...rest] = fullName.split(" ");
  const lastName = rest.join(" ");

  const address = profile.address
    ? Object.values(profile.address).filter(Boolean).join(", ")
    : undefined;

  return {
    id: String(raw.id),
    username: raw.username,
    firstName,
    lastName,
    fullName,
    email: createEmail(firstName, lastName),
    address,
    roles: raw.roles ?? [],
    responsibility: responsibilities[raw.username] ?? "Allmän tjänst",
  };
}

// Hämtar alla användare. Anropas ENDAST via useQuery (se hooks/useUsers.ts).
export async function fetchUsers(): Promise<User[]> {
  const response = await fetch(API_URL, {
    headers: { "x-api-key": API_KEY },
  });

  // fetch kastar INTE fel vid 401/404/500, så vi måste själva kontrollera status.
  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      throw new Error("Åtkomst nekad – kontrollera API-nyckeln.");
    }
    if (response.status === 429) {
      throw new Error("För många anrop – dagens gräns (100 st) är nådd.");
    }
    throw new Error(`Servern svarade med fel (${response.status}).`);
  }

  const data: unknown = await response.json();

  // API:et kan skicka en lista direkt eller t.ex. { users: [...] }.
  const list = Array.isArray(data) ? data : (data as { users?: unknown })?.users;

  if (!Array.isArray(list)) {
    throw new Error("Oväntat svar från servern.");
  }

  return (list as ApiUser[]).map(toUser);
}
