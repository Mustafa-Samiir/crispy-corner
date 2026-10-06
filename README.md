# Crispy Corner – Vårt team

En SPA byggd i React + TypeScript som visar personalen på den påhittade restaurangen **Crispy Corner**.
Datan hämtas från ett externt API (`/api/users/getUsers`).

## Kom igång

```bash
npm install
npm run dev
```

Öppna sedan adressen som visas i terminalen (oftast http://localhost:5173).

## Vyer (react-router-dom)

| Route        | Sida             | Innehåll                                  |
|--------------|------------------|-------------------------------------------|
| `/`          | `UsersPage`      | Alla anställda som kort + sökfält          |
| `/team/:id`  | `UserDetailPage` | Profilsida för en anställd                 |
| `/om-oss`    | `AboutPage`      | Info om restaurangen och appen             |
| `*`          | `NotFoundPage`   | 404 för okända adresser                    |

## Datahämtning med useQuery

- `src/api/users.ts` innehåller `fetchUsers()` som skickar `x-api-key` i headern.
- `fetch` kastar inte fel vid t.ex. 401/500, därför kontrolleras `response.ok` och ett fel kastas manuellt.
- `src/hooks/useUsers.ts` anropar `useQuery({ queryKey: ["users"], queryFn: fetchUsers })`.
- Både listan och profilsidan använder samma hook och samma `queryKey`, så profilsidan läser från cachen och gör **inga extra anrop**.

## Hantering av anropsgränsen (100 anrop/dag)

I `src/main.tsx` är `QueryClient` inställd med:
- `staleTime: 1 timme` – datan hämtas inte om när man byter sida
- `refetchOnWindowFocus: false` – ingen ny hämtning när man byter flik
- `retry: 1` – bara ett nytt försök vid fel (standard är 3)

## Laddning, fel och tomt resultat

- **Laddar:** `Loading`-komponent med spinner
- **Fel:** `ErrorMessage` med tydligt meddelande och knapp "Försök igen"
- **Tomt:** `EmptyState` – "Inga anställda hittades" (och "Ingen träff" vid sökning)

## Struktur

```
src/
├── api/         fetch-funktioner mot API:et
├── types/       TypeScript-interfaces (User, ApiUser)
├── hooks/       useUsers (useQuery)
├── components/  Navbar, UserCard, UserList, Avatar, SearchBar, Loading, ErrorMessage, EmptyState
├── pages/       UsersPage, UserDetailPage, AboutPage, NotFoundPage
├── App.tsx      routes
└── main.tsx     QueryClient + BrowserRouter
```
