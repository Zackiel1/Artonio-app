import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h4>Soy Login</h4>

      <form action="">
        <div>
          <label>Email: </label>
          <input type="text" name="email" placeholder="Email perraco" />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" name="password" placeholder="Password" />
        </div>

        <Link to="/createUser">Crear Usuario</Link>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
