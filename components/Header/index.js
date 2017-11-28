import Link from 'next/link'
import BgLogo from './coinest-brand.svg';
import CoinestLogo from './coinest-logo.svg';

const Header = () => (
  <header>
    <span className="red-line"></span>
    <div className="bg-logo">
      <BgLogo />
    </div>
    <Link href="/">
      <h1 className="logo"><CoinestLogo /></h1>
    </Link>
    <nav>
      <ul>
        <li>
          <a href="https://blog.coinest.co/" target="_blank">
            Blog
          </a>
        </li>
        <li>
          <a href="mailto:Contacto@coinest.co">
            Contacto@coinest.co
          </a>
        </li>
      </ul>
    </nav>
    <style jsx>{`
      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1200px;
        padding: 0 30px;
        margin: 0 auto;
      }

      .logo {
        padding: 42px 0;
        margin: 0;
        font-size: 18px;
        color: #FD1C40;
        letter-spacing: -0.04px;
        font-weight: 400;
        background-color: transparent;
      }

      .red-line {
        position: absolute;
        top: 0;
        right: 0;
        width: 140px;
        height: 6px;
        border: none;
        background-color: #FD1C40;
        text-align: left;
      }

      .red-line:after{
        content: '';
        position: absolute;
        top: 0;
        left: -20px;
        width: 20px;
        height: 100%;
        background-color: rgba(253, 28, 64, 0.12);
      }

      @media (min-width: 992px) {
        .logo {
          padding: 60px 0;
        }
      }
      .bg-logo {
        position: absolute;
        top: 0;
        left: 0;
        width: 98vw;
        height: 26.5vw;
        background-color: rgba(207, 217, 223, 0.3);
        z-index: -1;
      }

      .bg-logo:after{
        content: '';
        bottom: -4.5vw;
        left: 0;
        width: 64vw;
        height: 8vw;
        background-color: rgba(0, 242, 254, 0.06);
        position: absolute;
      }

      .bg-logo {
        max-width: 100%;
        overflow: hidden;
      }

      ul {
        list-style: none;
      }

      ul li {
        display: inline-block;
        padding: 0 16px;
        font-size: 13px;
        color: #182E8C;
        letter-spacing: -0.32px;
      }

      ul li a {
        color: #182E8C;
        text-decoration: none;
      }

    `}</style>
  </header>
)

export default Header