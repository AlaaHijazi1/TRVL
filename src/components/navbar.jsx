import "../style/blocks/navbar.css";
import Button from "./button";
import { useState } from "react";
function Navbar() {
  const [menuIsOpen, setStateOfMenu] = useState(false);
  const toggleMenu = () => setStateOfMenu(!menuIsOpen);

  const closeMenu = () => setStateOfMenu(false);
  return (
    <>
      <header className="header">
        <h1 className="header__logo" onClick={closeMenu}>
          TRVL <i className="fa-brands fa-typo3"></i>
        </h1>
        <div className="header__icons">
          <i
            className={`bi ${
              menuIsOpen ? "bi-x-lg" : "bi-list"
            } header__burger`}
            onClick={toggleMenu}
          ></i>
        </div>
        <ul className={`header__list ${menuIsOpen ? "active" : ""}`}>
          <li className="header__list-link" onClick={closeMenu}>
            <a className="header__link" href="#">
              Home
            </a>
          </li>
          <li className="header__list-link" onClick={closeMenu}>
            <a className="header__link" href="#">
              Services
            </a>
          </li>
          <li className="header__list-link" onClick={closeMenu}>
            <a className="header__link" href="#">
              Products
            </a>
          </li>
          <li onClick={closeMenu}>
            <Button className="header__button" text="SIGN UP" />
          </li>
        </ul>
      </header>
    </>
  );
}
export default Navbar;
