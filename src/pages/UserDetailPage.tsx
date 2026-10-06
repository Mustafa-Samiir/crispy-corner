import { Link, useParams } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import EmptyState from "../components/EmptyState";
import Avatar from "../components/Avatar";

// Översätter API:ets roller till svenska titlar.
function roleTitle(roles: string[]): string {
  return roles.includes("admin") ? "Chef" : "Medarbetare";
}

export default function UserDetailPage() {
  const { id } = useParams<{ id: string }>();

  // Samma hook som listan → datan kommer från cachen, inget nytt API-anrop.
  const { data: users, isLoading, isError, error, refetch } = useUsers();

  if (isLoading) return <Loading text="Hämtar medarbetare…" />;
  if (isError) return <ErrorMessage message={error.message} onRetry={() => refetch()} />;

  const user = users?.find((u) => u.id === id);

  if (!user) {
    return (
      <>
        <EmptyState title="Medarbetaren hittades inte" text={`Det finns ingen anställd med id ${id}.`} />
        <p className="center"><Link to="/" className="button">Tillbaka till teamet</Link></p>
      </>
    );
  }

  return (
    <section>
      <Link to="/" className="back-link">← Tillbaka till teamet</Link>

      <div className="card profile">
        <Avatar name={user.fullName} size="large" />
        <div>
          <h1>{user.fullName}</h1>
          <p className="role-badge">{roleTitle(user.roles)}</p>

          <dl className="info-list">
            <div className="info-row">
              <dt>Ansvarsområde</dt>
              <dd>{user.responsibility}</dd>
            </div>
            <div className="info-row">
              <dt>E-post</dt>
              <dd><a href={`mailto:${user.email}`}>{user.email}</a></dd>
            </div>
            {user.address && (
              <div className="info-row">
                <dt>Adress</dt>
                <dd>{user.address}</dd>
              </div>
            )}
            <div className="info-row">
              <dt>Anställnings-id</dt>
              <dd>{user.id}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
