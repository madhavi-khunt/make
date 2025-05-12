import { useEffect, useState } from "react";
import "./Header.css";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2600) {
        setIsScrolled(true); // Change background on scroll
      } else {
        setIsScrolled(false); // Transparent at top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div>
        <header className={`header ${isScrolled ? "scrolled" : ""}`}>
          <div>
            <h1
              className={`header-text ${
                isScrolled ? "text-visible" : "text-hidden"
              }`}
            >
              <Link to="/" className="kanit-bold">
                <img src={logo} alt="Logo" className="header-logo" />
              </Link>
            </h1>
            <nav className="nav-links">
              <Link to="/meetmake">Meet Make</Link>
              <Link to="/work">Work</Link>
              <Link to="/sustainability">Sustainability</Link>
              <Link to="/media">Media</Link>
              <Link to="/perspective">Perspective</Link>
              <Link to="/studios">Studios</Link>
              <Link to="/studios">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Link>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
