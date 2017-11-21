import Link from 'next/link'
import BgLogo from './coinest.brand.svg';

const Header = () => (
  <header>
    <div className="bg-logo">
      <BgLogo />
    </div>
    <Link href="/">
      <h1 className="logo">Coinest.co</h1>
    </Link>
    <nav>
      <ul>
        <li>Blog</li>
        <li>Contacto@coinest.co</li>
      </ul>
    </nav>
    <style jsx>{`
      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
      }

      .logo {
        padding: 60px 0;
        margin: 0;
        font-size: 18px;
        color: #FD1C40;
        letter-spacing: -0.04px;
        font-weight: 400;
        background-color: transparent;
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

      ul {
        list-style: none;
      }

      ul li {
        display: inline-block;
        padding: 0 16px;
        font-family: .AppleSystemUIFont;
        font-size: 13px;
        color: #182E8C;
        letter-spacing: -0.32px;
      }
    `}</style>
  </header>
)

export default Header