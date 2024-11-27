import style from "./About.module.css";

const About = () => {
  return (
    <section className={style.container}>
      <h2>
        ¿Quien es <br/> Antonio Fernández?
      </h2>
      
      <section>
        <article className={style.articlePhoto}>
          {/* <img src="/images/img-about.jpeg"></img> */}
        </article>
        <article className={style.articleText}>
          <p className={style.text1}>
            Hola, soy Antonio Fernández, un loco apasionado del arte del Tattoo
            y la pintura, amante de la vida, curioso y creativo, enérgico y full
            creyente de la buena vibra. Tatuar se ha convertido para mí, a parte
            de una pasión por inyectar tinta, en una forma de conocer y conectar
            con las personas, ayudándoles a diseñar y darle vida a sus ideas
            para el tatuaje ideal, ese que llevarán por el resto de sus vidas.
            <br />
            <br />
            Entregar valor a cada persona que viene a mi estudio es prioridad,
            hacer que se sienta cómodo y disfrute del proceso para que se vaya
            más que satisfecho con mi trabajo.
          </p>
        </article>
      </section>

      <p className={style.text2}>
      &quot;NADA NI NADIE TIENE EL PODER PARA HACERTE CREER QUE ES MUY TARDE PARA
        LUCHAR POR TUS SUEÑOS. ES UNA SOLA VIDA, HAS QUE VALGA LA PENA!&quot;
      </p>
    </section>
  );
};

export default About;
