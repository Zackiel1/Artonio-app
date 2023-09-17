import { Route, Routes, useLocation } from "react-router-dom";
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
import Contact from "./view/Contact/Contact";
import SpanPromo from "./view/SpanPromo/SpanPromo";

const App = () => {
  const location = useLocation();
  const showScrollableContent = location.pathname === "/";

  const dispatch = useDispatch();

  const loginUserJSON = window.localStorage.getItem("userInfo");
  const user = JSON.parse(loginUserJSON);

  loginUserJSON !== null && dispatch(reLogin(user));

  return (
    <>
      <Nav />
      {showScrollableContent && (
        <>
          <Home />
          <SpanPromo />
          <Gallery />
        </>
      )}
      <Routes>
        <Route path="/" />
        <Route path="/login" element={<Login />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/account" element={<Account />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
