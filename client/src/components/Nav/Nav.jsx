import { Link, NavLink } from "react-router-dom";
import React, { useRef } from "react";
import style from "./Nav.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Nav = ({ onContactClick }) => {
  const userInfo = useSelector((state) => state.userInfo);
  let userOnline = localStorage.userInfo;

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentUserInfo, setCurrentUserInfo] = useState(false);

  //setCurrentUserInfo(userInfo);

  useEffect(() => {
    setCurrentUserInfo(userInfo);
  }, [userInfo]);

  // console.log(userInfo);
  // console.log(current);

  let current = 0;

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 180;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    
  }, []);

  const menu = () => {
    menuOpen === true ? setMenuOpen(false) : setMenuOpen(true);
  };

  return (
    <nav className={style.mainNav}>
      <Link className={`${style.icono}`} to="/"></Link>
      
      <section className={`${style.navContainer}`}>

        <Link className={`${style.icono}`} to="/"></Link>

        <ul
          className={`${style.navItems} ${menuOpen ? style.open : style.close}`}
          onClick={menu}
        >
          <li className={style.firstLi}>
            <NavLink to={"/"}>Inicio</NavLink>
          </li>

          <li>
            <NavLink to={"/about"}>Quien soy</NavLink>
          </li>

          <li>
            <NavLink to="/gallery">Galeria</NavLink>
          </li>

          <li>
            <NavLink to={"/contact"}>Contacto</NavLink>
          </li>

          {/* <li>
            <NavLink to="/admin">Admin</NavLink>
          </li> */}

          {userOnline && (
            <li>
              <Link to="/account">Perfil</Link>
            </li>
          )}

          {!userOnline && (
            <li>
              <Link to="/login">Iniciar Sesion</Link>
            </li>
          )}
        </ul>

        <button className={style.buttonCotizacion} type="submit">

          <Link to="/">Obtener Cotizacion</Link>
        </button>

        <button className={style.menu} onClick={menu}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </section>
    </nav>
  );
};

export default Nav;
