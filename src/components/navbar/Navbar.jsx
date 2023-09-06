import { useState, useEffect } from "react";
import "./Navbar.scss";
import navbarlogo from "../../assets/img/header__logo.svg";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [inputSearch, setInputSearch] = useState("");
  console.log(inputSearch);
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav__block">
            <div className="nav__wrap">
              <Link to="/">
                <img width="180" height="73" src={navbarlogo} alt="Logo" />
              </Link>
              <input
              value={inputSearch}
              onClick={e => setInputSearch(e.target.value)}
                className="nav__input"
                type="text"
                placeholder="Қидириш..."
              />
              <button className="nav__btn" type="submit">
                <FiSearch className="search" />
              </button>
            </div>
            <div className="nav__pages">
              <Link to="/">
                <button>Бош сахифа</button>
              </Link>
              <Link to="/partner">
                <button>Ҳамкорлар</button>
              </Link>
              <Link to="/about">
                <button>Биз ҳақимизда</button>
              </Link>
              <Link to="/contact">
                <button>Алоқа</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
