import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postLogin } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sessionToken = useSelector((state) => state.sessionToken);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handlerChange = (event) => {
    let property = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [property]: value });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    dispatch(postLogin(user));
  };

  useEffect(() => {
    if (sessionToken !== null) {
      navigate("/");
    }
  }, [sessionToken]);

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
            placeholder="Email perraco"
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
    </div>
  );
};

export default Login;
