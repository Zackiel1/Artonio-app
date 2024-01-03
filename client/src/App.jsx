import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import React, { useRef } from "react";
import Nav from "./components/Nav/Nav";
import Home from "./view/Home/Home";
import Login from "./view/Login/Login";
import CreateUser from "./components/CreateUser/CreateUser";
import Account from "./view/Account/Account";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import style from "./App.module.css";
import VerifyUser from "./components/VerifyUser/VerifyUser";
import AccountNoVerify from "./view/AccountNoVerify/AccountNoVerify";
import Footer from "./components/Footer/Footer";

const App = () => {
  const location = useLocation();

  const dataImgs = useSelector((state) => state.dataImgs);

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

  //const loginUserJSON = window.localStorage.getItem("userInfo");
  //const user = JSON.parse(loginUserJSON);

  // loginUserJSON !== null && dispatch(reLogin(user));

  useEffect(() => {
    if (dataImgs.length === 0) {
      dispatch(getImg());
    }
    //window.scrollTo(0, 0);
  }, []);

  return (
    <main className={style.appContainer}>
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
          <Footer />
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
        <Route path="/verifyUser/:infoUser" element={<VerifyUser />} />
        <Route path="/accountNoVerify" element={<AccountNoVerify />} />
      </Routes>

      {/* <span className={`${style.frameBorder} ${style.frameTop}`}></span>
      <span className={`${style.frameBorder} ${style.frameBottom}`}></span>
      <span className={`${style.frameBorder} ${style.frameRigth}`}></span>
      <span className={`${style.frameBorder} ${style.frameLeft}`}></span> */}
    </main>
  );
};

export default App;
