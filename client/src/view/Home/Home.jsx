import style from "./Home.module.css";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <main className={style.homeContainer}>
      <article className={style.articleText}>
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorem
          temporibus, quam aspernatur quibusdam tempora atque perferendis
          aliquam accusantium?"
        </p>

        <NavLink to={{ pathname: "/", hash: "#contact" }}>
          <button>Cuentame tu Idea</button>
        </NavLink>
      </article>
      {/* <article className={style.articlePhoto}></article> */}
    </main>
  );
};

export default Home;
