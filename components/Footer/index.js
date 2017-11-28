import Link from 'next/link'
import FbLogo from './icon-social-fb.svg';
import TwLogo from './icon-social-tw.svg';

const Footer = ({ t }) => (
  <footer>
    <div className="inner-wrapper">
      <p className="legal-disclaimer">Copyright © 2017 Coinest. All rights reserved.</p>
      <nav>
        <ul>
          <li>
            <a href="https://twitter.com/CoinestHQ" target="_blank"><TwLogo/></a>
          </li>
          <li>
            <a href="https://www.facebook.com/Coinest.co/" target="_blank"><FbLogo/></a>
          </li>
        </ul>
      </nav>
    </div>
    <style jsx>{`
      footer {
        position: relative;
        padding: 60px 0 30px;
        background-color: rgba(207, 217, 223, 0.3);
      }

      .inner-wrapper {
        display: flex;
        max-width: 897px;
        margin: 0 auto;
        border-top: 1px solid #ccc;
        justify-content: space-between;
        align-items: center;
      }

      .legal-disclaimer {
        padding: 0 15px;
        font-size: 14px;
        font-weight: 100;
        color: #182E8C;
        margin: 0;
        line-height: 1;
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
        padding: 0 10px;
        font-family: .AppleSystemUIFont;
        font-size: 13px;
        color: #182E8C;
        letter-spacing: -0.32px;
      }
    `}</style>
  </footer>
)

export default Footer
