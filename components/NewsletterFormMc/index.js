const NewsletterFormMc = ({t}) => (
  <section>
    <div className="container">
      <div className="inner-wrapper">
        <h1 className="form_title">{t('newsletterSection.title')}</h1>
        <div id="mc_embed_signup">
          <form action="https://coinest.us17.list-manage.com/subscribe/post?u=df8116ee9a35d8a3cc426957d&id=4f78f95f44" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll" className="input-wrapper">
              <div className="mc-field-group">
                <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder={t('newsletterSection.emailField')} />
              </div>
              <div className="mc-field-group">
                <select name="MMERGE3" id="mce-MMERGE3">
                  <option value="" disabled selected hidden>¿Conoces de criptomonedas?</option>
                  <option value={t('newsletterSection.selectField2')}>{t('newsletterSection.selectField2')}</option>
                  <option value={t('newsletterSection.selectField3')}>{t('newsletterSection.selectField3')}</option>
                  <option value={t('newsletterSection.selectField4')}>{t('newsletterSection.selectField4')}</option>

                </select>
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{ display: 'none' }} />
                <div className="response" id="mce-success-response" style={{ display: 'none' }} />
              </div>    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_df8116ee9a35d8a3cc426957d_4f78f95f44" tabIndex={-1} defaultValue /></div>
              <div className="clear"><input type="submit" defaultValue={t('newsletterSection.button')} name="subscribe" id="mc-embedded-subscribe" className="submit-button" /></div>
            </div>
          </form>
        </div>
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
      #mce-responses {
        flex: 0 0 0;
      }

      input {
        width: 100%;
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
        width: 100%;
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

      input[type="submit"] {
        width: 100%;
      }

      @media (min-width: 992px) {
        .input-wrapper .clear {
          flex: 0 0 163px
        }
      }
    `}</style>
  </section>
)

export default NewsletterFormMc