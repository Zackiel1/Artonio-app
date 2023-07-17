import { Link } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={style.navContainer}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Nav;
