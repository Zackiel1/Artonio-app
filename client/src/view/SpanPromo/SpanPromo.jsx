import { Link } from "react-router-dom";
import style from "./SpanPromo.module.css";

const SpanPromo = () => {
  return (
    <section className={style.container}>
      <article>
        <p>
          Obten un 20% de descuento resgistrandote{" "}
          <Link to="/createUser">Aqui...</Link>
        </p>
      </article>
    </section>
  );
};

export default SpanPromo;
