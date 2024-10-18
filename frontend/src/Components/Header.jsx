import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div>
        <header>
          <div>
            <h1 className="header-text">
              <Link to="/">make</Link>
            </h1>
            <nav className="nav-links">
              <Link to="/meetmake">Meet Make</Link>
              <Link to="/work">Work</Link>
              <Link to="/sustainability">Sustainability</Link>
              <Link to="/media">Media</Link>
              <Link to="/perspective">Perspective</Link>
              <Link to="/studios">Studios</Link>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
