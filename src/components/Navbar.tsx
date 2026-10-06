import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo">
          <span className="logo-badge">CC</span>
          Crispy Corner
        </Link>
        <nav className="nav-links">
          <NavLink to="/" end>Vårt team</NavLink>
          <NavLink to="/om-oss">Om oss</NavLink>
        </nav>
      </div>
    </header>
  );
}
