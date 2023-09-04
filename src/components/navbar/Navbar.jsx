import React, { useState } from "react";
import "./Navbar.scss";
import navbarlogo from "../../assets/img/header__logo.svg";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

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
                <button
                  onClick={() => handleImageClick("Бош сахифа")}
                  style={{
                    background:
                      selectedImage === "Бош сахифа" ? "#5585f745" : "",
                  }}
                >
                  Бош сахифа
                </button>
              </Link>
              <Link to="/partner">
                <button
                  onClick={() => handleImageClick("Ҳамкорлар")}
                  style={{
                    background:
                      selectedImage === "Ҳамкорлар" ? "#5585f745" : " ",
                  }}
                >
                  Ҳамкорлар
                </button>
              </Link>
              <Link to="/about">
                <button
                  onClick={() => handleImageClick("Биз ҳақимизда")}
                  style={{
                    background:
                      selectedImage === "Биз ҳақимизда" ? "#5585f745" : " ",
                  }}
                >
                  Биз ҳақимизда
                </button>
              </Link>
              <Link to="/contact">
                <button
                  onClick={() => handleImageClick("Алоқа")}
                  style={{
                    background:
                      selectedImage === "Алоқа" ? "#5585f745" : " ",
                  }}
                >
                  Алоқа
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
