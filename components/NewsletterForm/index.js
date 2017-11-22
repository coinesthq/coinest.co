const NewsletterForm = ({ t }) => (
  <section>
    <div className="container">
      <div className="inner-wrapper">
        <h1 className="form_title">{t('newsletterSection.title')}</h1>
        <form action="">
          <div className="input-wrapper">
            <input type="email" placeholder={t('newsletterSection.emailField')} />
            <select name="" id="">
              <option value="">{t('newsletterSection.selectField1')}</option>
              <option value="">{t('newsletterSection.selectField2')}</option>
              <option value="">{t('newsletterSection.selectField3')}</option>
              <option value="">{t('newsletterSection.selectField4')}</option>
            </select>
            <button>{t('newsletterSection.button')}</button>
          </div>
        </form>
      </div>
    </div>
    <style jsx>{`
      section {
        padding-bottom: 70px;
      }

      .inner-wrapper {
        position: relative;
        max-width: 100%;
        padding-top: 60px;
        padding-bottom: 80px;
      }

      @media (min-width: 992px) {
        .inner-wrapper {
          max-width: 896px;
        }
      }

      .inner-wrapper:after {
        content: '';
        position: absolute;
        top: 33%;
        right: -2%;
        width: 100%;
        height: 10.5vw;
        background-color: rgba(24,46,140,0.06);
        z-index: -1;
      }

      .form_title {
        margin: 0 0 34px;
        font-size: 28px;
        font-weight: 500;
        letter-spacing: -0.4px;
        color: #182E8C;
      }

      .input-wrapper {
        display: flex;
        flex-direction: column;
        margin-left: -15px;
        margin-right: -15px;
      }

      @media (min-width: 992px) {
        .input-wrapper {
          flex-direction: row;
          max-width: 896px;
        }
      }

      .input-wrapper > * {
        flex: 1;
        margin: 0 15px 30px;
      }

      @media (min-width: 992px) {
        .input-wrapper > * {
          margin: 0 15px;
        }
      }

      input {
        padding: 10px;
        margin: 0;
        border: 0;
        border-bottom: 1px solid #1B318A;
        background-color: transparent;
        font-weight: 500;
        font-size: 16px;
        letter-spacing: -0.36px;
        color: #182E8C;
      }

      ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: #182E8C;
      }
      ::-moz-placeholder { /* Firefox 19+ */
        color: #182E8C;
      }
      :-ms-input-placeholder { /* IE 10+ */
        color: #182E8C;
      }
      :-moz-placeholder { /* Firefox 18- */
        color: #182E8C;
      }

      select {
        padding: 10px;
        margin: 0;
        border: 0;
        border-bottom: 1px solid #1B318A;
        border-radius: 0;
        background-color: transparent;
        -webkit-appearance: none;
        font-weight: 500;
        font-size: 16px;
        letter-spacing: -0.36px;
        color: #182E8C;
      }

      @media (min-width: 992px) {
        .input-wrapper button {
          flex: 0 0 163px
        }
      }
    `}</style>
  </section>
)

export default NewsletterForm