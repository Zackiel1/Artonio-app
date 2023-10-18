import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import React, { useRef } from "react";
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
import About from "./view/About/About";
import SpanRedes from "./view/SpanRedes/SpanRedes";
import SampleGallery from "./view/SampleGallery/SampleGallery";
import RecoverPass from "./view/RecoverPass/RecoverPass";
import ForgetPass from "./view/ForgetPass/ForgetPass";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = location.hash;
    if (scrollToSection) {
      scroller.scrollTo(scrollToSection.slice(1), {
        duration: 500,
        smooth: true,
      });
    }
  }, [location]);

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
          <Element name="home">
            <Home />
          </Element>
          <Element name="about">
            <About />
          </Element>
          <SpanPromo />
          <SampleGallery />
          <SpanRedes />
          <Element name="contact">
            <Contact />
          </Element>
        </>
      )}
      <Routes>
        <Route path="/" />
        <Route path="/login" element={<Login />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/account" element={<Account />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/recoverPass" element={<RecoverPass />} />
        <Route path="/forgetPass" element={<ForgetPass />} />
      </Routes>
    </>
  );
};

export default App;
