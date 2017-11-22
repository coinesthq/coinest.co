import Head from '/components/Head';
import Header from '/components/Header';

const Layout = ({ title, description, children }) =>
  <div>
    <Head title={title} description={description} />
    <Header />
    {children}
    <style jsx global>{`
      body {
        margin: 0;
        font-family: SFProDisplay, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      }
      * {
        font-family: SFProDisplay, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        box-sizing: border-box;
      }

      .container {
        max-width: 916px;
        padding: 0 15px;
        margin: 0 auto;
      }

      button {
        padding: 12px 30px;
        background: #FD1C40;
        border-radius: 110px;
        font-weight: 500;
        font-size: 16px;
        color: #FFFFFF;
        box-shadow: 0;
        border: 0;
      }
    `}</style>
  </div>

export default Layout