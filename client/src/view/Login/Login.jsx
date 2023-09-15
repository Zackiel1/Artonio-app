import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postLogin } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((state) => state.userInfo);

  const [message, setMessage] = useState("");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handlerChange = (event) => {
    let property = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [property]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();

    try {
      await dispatch(postLogin(user));
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  useEffect(() => {
    if (userInfo !== null) {
      navigate("/");
    }
  }, [userInfo]);

  return (
    <div>
      <h4>Soy Login</h4>

      <form onSubmit={handlerSubmit}>
        <div>
          <label>Email: </label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handlerChange}
            placeholder="Email"
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handlerChange}
            placeholder="Password"
          />
        </div>

        <Link to="/createUser">Crear Usuario</Link>

        <button type="submit">Login</button>
      </form>

      {message && <p>{message}</p>}

      <FontAwesomeIcon icon={faCoffee} />
    </div>
  );
};

export default Login;
