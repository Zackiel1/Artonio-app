import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.container}>
      <h2>¿Quien Soy?</h2>
      <section>
        <article className={style.articlePhoto}></article>
        <article className={style.articleText}>
          <h3>Tony Fernández</h3>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            laudantium nam magnam pariatur sed, excepturi accusantium molestiae
            neque, aut, quibusdam nulla perferendis inventore? Recusandae aut
            perferendis in incidunt libero nihil facere, est illo. Aliquid optio
            vitae pariatur obcaecati sed laborum voluptates in quisquam id?
            Debitis, voluptates enim? Quidem quam quod ullam aperiam molestias,
            eveniet commodi ipsam quae? Repellat, quia.
            <br />
            <br />
            Id aperiam dignissimos pariatur aut vero sed omnis hic repudiandae
            aliquam sequi eligendi, incidunt quos dolorem unde aliquid minus
            repellendus doloremque, commodi natus accusantium voluptas dolor
            cumque nesciunt! Eaque eum voluptates mollitia? Distinctio
            perferendis sed non nulla esse numquam alias optio obcaecati nam
            dignissimos? Debitis, recusandae magnam? Quisquam eveniet omnis quis
            dolore
            <br />
            <br />
            molestiae dicta delectus quam quaerat saepe! Laboriosam est corporis
            totam nulla, aliquid sapiente temporibus id quaerat nobis obcaecati
            repellendus? Vitae non delectus est consectetur, quasi doloremque
            reiciendis. Quibusdam, repellendus soluta? Soluta deleniti autem
            odio, voluptas enim laudantium minima cupiditate!
          </p>
        </article>
      </section>
    </div>
  );
};

export default About;
