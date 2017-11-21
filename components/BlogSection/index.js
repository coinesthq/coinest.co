const BlogSection = () => (
  <section>
    <div className="container">
      <h1>Te invitamos a explorar nuestras noticias y tutoriales</h1>
      <p>Contenido simple y claro para descubrir las nuevas oportunidades</p>
      <div className="red-divider"></div>
      <ul className="blog-list">
        <li className="blog-list_item">¿Por qué es importante entender qué es Bitcoin, Blockchain?</li>
        <li className="blog-list_item">Beneficios de las criptomonedas como nueva clase de activos</li>
        <li className="blog-list_item">¿Qué son las criptomonedas?</li>
      </ul>
    </div>
    <style jsx>{`
      section {
        padding: 60px 0;
        background-image: linear-gradient(-135deg, #29323C 0%, #485563 100%);
      }

      h1 {
        max-width: 420px;
        margin: 0 0 10px;
        font-weight: 400;
        font-size: 28px;
        color: #FFFFFF;
        letter-spacing: 0.2px;
      }

      p {
        margin: 0 0 15px;
        font-weight: 100;
        font-size: 12px;
        color: #FFFFFF;
      }

      .red-divider {
        position: relative;
        width: 16px;
        height: 3px;
        margin: 0 0 20px;
        border: none;
        background-color: #FD1C40;
        text-align: left;
      }

      .red-divider:after{
        content: '';
        position: absolute;
        top: 0;
        right: -5px;
        width: 5px;
        height: 100%;
        background-color: rgba(253, 28, 64, 0.12);
      }

      .blog-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 850px;
        padding: 66px 0 0;
        list-style: none;
        margin: 0;
      }

      .blog-list_item {
        position: relative;
        flex: 0 0 48%;
        padding-left: 50px;
        font-weight: 500;
        font-size: 20px;
        color: #FFFFFF;
        line-height: 28px;
        margin-bottom: 30px;
      }

      .blog-list_item:before{
        content: '';
        position: absolute;
        top: 9px;
        left: 9px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #FD1C40;
      }

    `}</style>
  </section>
)

export default BlogSection