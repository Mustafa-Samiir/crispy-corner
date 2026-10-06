import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import EmptyState from "../components/EmptyState";
import SearchBar from "../components/SearchBar";
import UserList from "../components/UserList";

export default function UsersPage() {
  const { data: users, isLoading, isError, error, refetch } = useUsers();
  const [search, setSearch] = useState("");

  // 1. Laddar
  if (isLoading) return <Loading text="Hämtar vårt team…" />;

  // 2. Fel från fetch (t.ex. 401, 429, 500 eller nätverksfel)
  if (isError) return <ErrorMessage message={error.message} onRetry={() => refetch()} />;

  // 3. Tomt dataset från API:et
  if (!users || users.length === 0) {
    return <EmptyState title="Inga anställda hittades" text="Teamet är tomt just nu." />;
  }

  // Sökningen sker i den data vi redan har – inga nya API-anrop.
  const query = search.trim().toLowerCase();
  const filtered = users.filter((user) =>
    [user.firstName, user.responsibility].some((field) => field.toLowerCase().includes(query))
  );

  return (
    <section>
      <div className="page-header">
        <div>
          <h1>Vårt team</h1>
          <p className="muted">{users.length} medarbetare på Crispy Corner</p>
        </div>
        <SearchBar value={search} onChange={setSearch} />
      </div>

      {filtered.length === 0 ? (
        <EmptyState title="Ingen träff" text={`Ingen medarbetare matchar "${search}".`} />
      ) : (
        <UserList users={filtered} />
      )}
    </section>
  );
}
