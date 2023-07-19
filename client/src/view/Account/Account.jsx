import { useDispatch, useSelector } from "react-redux";
import { clearMessage } from "../../redux/actions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sessionToken = useSelector((state) => state.sessionToken);

  useEffect(() => {
    if (sessionToken === null) {
      navigate("/");
    }
  }, [sessionToken]);

  return (
    <div>
      <h1>Hola</h1>
      <button onClick={() => dispatch(clearMessage("sessionToken"))}>
        logout
      </button>
    </div>
  );
};

export default Account;
