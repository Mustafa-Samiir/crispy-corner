import { Link } from "react-router-dom";
import type { User } from "../types/user";
import Avatar from "./Avatar";

interface UserCardProps {
  user: User;
}

// På kortet visas bara förnamnet – hela namnet syns på profilsidan.
export default function UserCard({ user }: UserCardProps) {
  return (
    <Link to={`/team/${user.id}`} className="card user-card">
      <Avatar name={user.fullName} />
      <div>
        <h3>{user.firstName}</h3>
        <p className="muted">{user.responsibility}</p>
      </div>
    </Link>
  );
}
