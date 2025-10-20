import { Link } from "react-router-dom";
import "../css/NavBar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/Movie_App_React/">Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/Movie_App_React/" className="nav-link">
          Home
        </Link>
        <Link to="/Movie_App_React/favorites" className="nav-link">
          Favorites
        </Link>
      </div>
    </nav>
  );
}
