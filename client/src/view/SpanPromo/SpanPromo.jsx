import style from "./SpanPromo.module.css";

const SpanPromo = () => {
  return (
    <section className={style.container}>
      <article>
        <h3>
          LLeva un 20% de descuento registrandote <span>Aqui</span>...
        </h3>
      </article>
    </section>
  );
};

export default SpanPromo;
