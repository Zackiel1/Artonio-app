import { Link, NavLink } from "react-router-dom";
import style from "./Nav.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Nav = () => {
  const userInfo = useSelector((state) => state.userInfo);
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Link className={style.icono} to="/"></Link>
      <nav className={style.navContainer}>
        {/* <button onClick={menu} className={style.openMenu}>
          Abrir
        </button> */}

        <button onClick={menu}>
          <div></div>
          <div></div>
          <div></div>
        </button>

        <ul
          className={`${style.navItems} ${menuOpen ? style.open : style.close}`}
          onClick={menu}
        >
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>

          <li>
            <NavLink to="/gallery">Galeria</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contacto</NavLink>
          </li>

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
