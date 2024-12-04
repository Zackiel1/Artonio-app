import style from "./Home.module.css";
import { NavLink } from "react-router-dom";
import videoBg from "../../images/videoBg.mp4"
import logo from "../../images/logo-artonio-borde4.png"

const Home = () => {

  return (
    <main className={style.main}>
      <div className={style.backgroundVideo}>
            <video className={style.video} src={videoBg} autoPlay muted loop></video>
      </div>
     
      <section className={style.homeContainer}>

      <img src={logo} className={style.logoLanding} alt="logo" />

        <article className={style.articleText}>
          
          <p>
          &quot; Te ayudo a reflejar en tu piel
            <br />
            vivencias, recuerdos o simplemente Arte! &quot;
          </p>

          <div className={style.articleButton}>

            <NavLink to={{ pathname: "/", hash: "#contact" }}>
              <button>Cuentame tu Idea</button>
            </NavLink>

            <NavLink to={{ pathname: "/", hash: "#contact" }}>
              <button>Concurso de diciembre</button>
            </NavLink>

          </div>

        </article>
      </section>
    </main>
  );
};

export default Home;
