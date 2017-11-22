const IntroSection = () => (
  <section>
    <div className="container">
      <div className="inner-wrapper">
        <h1 className="intro-title">
          Explora. Aprende. Invierte.
        </h1>
        <p className="intro-description main">
        Somos la primera plataforma de Latinoamérica en acercar los proyectos más disruptivos de tecnología Blockchain a inversores de la región.
        </p>
        <h2 className="intro-subtitle">
          El primer canal de distribución de tokens para inversores
        </h2>
        <p className="intro-description">
          Queremos acercar de una manera simple un nuevo tipo de activo como son las criptomonedas. Sabemos lo difícil que es participar en un ICO hoy en día. Mejoramos la experiencia de usuario durante el proceso de selección de proyectos disruptivos y en la adquisición de sus tokens.
        </p>
        <h2 className="intro-subtitle">
          Una plataforma para la difusión de proyectos Blockchain
        </h2>
        <p className="intro-description">
          Ofrecemos un servicio de advertising para dar visibilidad a nuevos proyectos del ecosistema blockchain y conectarlos con potenciales inversores en Latinoamérica.
        </p>
        <h2 className="intro-subtitle">
          Sobre nuestro equipo
        </h2>
        <p className="intro-description">
          Somos un grupo de analistas financieros y programadores blockchain que queremos eliminar barreras informativas, técnicas y operativas para acercar a la sociedad los beneficios del mundo de las criptomonedas.
        </p>

      </div>
    </div>
    <style jsx>{`
      .inner-wrapper {
        max-width: 620px;
      }

      h1 {
        margin: 30px 0 10px;
        font-size: 54px;
        line-height: 69px;
        font-weight: 200;
        color: #182E8C;
      }

      h2 {
        margin: 0 0 8px;
        font-size: 20px;
        font-weight: 500;
        color: #182E8C;
      }

      .intro-description {
        margin: 0 0 28px;
        font-size: 20px;
        line-height: 27px;
        font-weight: 200;
        color: #182E8C;
      }

      .intro-description.main {
        margin: 0 0 40px;
      }
    `}</style>
  </section>
)

export default IntroSection