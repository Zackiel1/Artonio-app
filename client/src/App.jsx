import { Route, Routes } from "react-router-dom";
//import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./view/Home/Home";
import Login from "./view/Login/Login";
import CreateUser from "./components/CreateUser/CreateUser";
import Account from "./view/Account/Account";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearMessage, reLogin, getImg } from "./redux/actions";
import Admin from "./view/Admin/Admin";
import Gallery from "./view/gallery/Gallery";

const App = () => {
  const dispatch = useDispatch();

  const loginUserJSON = window.localStorage.getItem("userInfo");
  const user = JSON.parse(loginUserJSON);

  loginUserJSON !== null && dispatch(reLogin(user));

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/account" element={<Account />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
};

export default App;
