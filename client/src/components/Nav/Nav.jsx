import { Link } from "react-router-dom";
import style from "./Nav.module.css";
import { useSelector } from "react-redux";

const Nav = () => {
  const sessionToken = useSelector((state) => state.sessionToken);

  return (
    <div className={style.navContainer}>
      <Link to="/">Home</Link>

      {sessionToken && <Link to="/account">account</Link>}
      {!sessionToken && <Link to="/login">Login</Link>}
    </div>
  );
};

export default Nav;
