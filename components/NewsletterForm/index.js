const NewsletterForm = () => (
  <section>
    <div className="container">
      <div className="inner-wrapper">
        <h1 className="form_title">Suscripción al Newsletter</h1>
        <form action="">
          <div className="input-wrapper">
            <input type="email" placeholder="Email" />
            <select name="" id="">
              <option value="">¿Conoces de criptomonedas?</option>
              <option value="">Nada</option>
              <option value="">Un poco</option>
              <option value="">Bastante</option>
            </select>
            <button>Suscribite</button>
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
        max-width: 896px;
        padding-top: 60px;
        padding-bottom: 80px;
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
        margin-left: -15px;
        margin-right: -15px;
      }

      .input-wrapper > * {
        flex: 1;
        margin: 0 15px;
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

      .input-wrapper button {
        flex: 0 0 163px
      }
    `}</style>
  </section>
)

export default NewsletterForm