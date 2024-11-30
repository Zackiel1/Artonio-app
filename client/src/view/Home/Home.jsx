import style from "./Home.module.css";
import { NavLink } from "react-router-dom";
import videoT from "./videoT.mp4"

const Home = () => {

  return (
    <main className={style.main}>
      <div className={style.backgroundVideo}>
            <video className={style.video} src={videoT} autoPlay muted loop></video>
      </div>
     
      <section className={style.homeContainer}>

        <article className={style.articleText}>
          
          <p>
          &quot; Te ayudo a reflejar en tu piel
            <br />
            vivencias, recuerdos o simplemente Arte! &quot;
          </p>

          <NavLink to={{ pathname: "/", hash: "#contact" }}>
            <button>Cuentame tu Idea</button>
          </NavLink>
        </article>
      </section>
    </main>
  );
};

export default Home;
