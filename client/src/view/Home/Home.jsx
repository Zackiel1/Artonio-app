import { useEffect, useState } from "react";
import style from "./Home.module.css";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <main className={style.main}>
      <div className={style.homeContainer}>
        <article className={style.articleText}>
          <p>
            " Te ayudo a reflejar en tu piel
            <br />
            vivencias, recuerdos, o simplemente Arte! "
          </p>

          <NavLink to={{ pathname: "/", hash: "#contact" }}>
            <button>Cuentame tu Idea</button>
          </NavLink>
        </article>
        {/* <article className={style.articlePhoto}></article> */}
      </div>
    </main>
  );
};

export default Home;
