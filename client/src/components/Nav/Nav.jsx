import { Link, NavLink } from "react-router-dom";
import React, { useRef } from "react";
import style from "./Nav.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Nav = ({ onContactClick }) => {
  const userInfo = useSelector((state) => state.userInfo);
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = () => {
    menuOpen === true ? setMenuOpen(false) : setMenuOpen(true);
  };

  return (
    <>
      <Link className={style.icono} to="/"></Link>
      <nav className={style.navContainer}>
        {/* <button onClick={menu} className={style.openMenu}>
          Abrir
        </button> */}

        <button className={style.menu} onClick={menu}>
          <div></div>
          <div></div>
          <div></div>
        </button>

        <ul
          className={`${style.navItems} ${menuOpen ? style.open : style.close}`}
          onClick={menu}
        >
          <li>
            <NavLink to={{ pathname: "/", hash: "#home" }}>Inicio</NavLink>
          </li>

          <li>
            <NavLink to={{ pathname: "/", hash: "#about" }}>Quien soy</NavLink>
          </li>

          <li>
            <NavLink to="/gallery">Galeria</NavLink>
          </li>

          <li>
            <NavLink to={{ pathname: "/", hash: "#contact" }}>Contacto</NavLink>
          </li>

          {/* <li>
            <NavLink to="/admin">Admin</NavLink>
          </li> */}

          {userInfo && (
            <li>
              <Link to="/account">Cuenta</Link>
            </li>
          )}

          {!userInfo && (
            <li>
              <Link to="/login">Iniciar Sesion</Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
