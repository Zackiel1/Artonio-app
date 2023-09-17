import style from "./home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className={style.homeContainer}>
      <article className={style.articleText}>
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorem
          temporibus, quam aspernatur quibusdam tempora atque perferendis
          aliquam accusantium?""
        </p>

        <Link to={"/contact"}>
          <button>Cuentame tu Idea</button>
        </Link>
      </article>
      {/* <article className={style.articlePhoto}></article> */}
    </main>
  );
};

export default Home;
