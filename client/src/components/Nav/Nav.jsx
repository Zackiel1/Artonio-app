import { Link } from "react-router-dom";
import style from "./Nav.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Nav = () => {
  const userInfo = useSelector((state) => state.userInfo);

  return (
    <div className={style.navContainer}>
      <Link to="/">Home</Link>

      {userInfo && <Link to="/account">account</Link>}
      {!userInfo && <Link to="/login">Login</Link>}

      <Link to="/Admin">Admin</Link>
      <Link to="/gallery">Gallery</Link>
    </div>
  );
};

export default Nav;
