const IntroSection = ({t}) => (
  <section>
    <div className="container">
      <div className="inner-wrapper">
        <h1 className="intro-title">
          {t('introSection.mainTitle')}
        </h1>
        <p className="intro-description main">
          {t('introSection.mainDescription')}
        </p>
        <h2 className="intro-subtitle">
          {t('introSection.subtitle1')}
        </h2>
        <p className="intro-description">
          {t('introSection.subtext1')}
        </p>
        <h2 className="intro-subtitle">
          {t('introSection.subtitle2')}
        </h2>
        <p className="intro-description">
          {t('introSection.subtext2')}
        </p>
        <h2 className="intro-subtitle">
          {t('introSection.subtitle3')}
        </h2>
        <p className="intro-description">
          {t('introSection.subtext3')}
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
        font-size: 18px;
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