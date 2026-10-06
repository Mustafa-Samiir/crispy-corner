import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="status">
      <h1>404</h1>
      <p>Sidan du letar efter finns inte.</p>
      <Link to="/" className="button">Till startsidan</Link>
    </div>
  );
}
