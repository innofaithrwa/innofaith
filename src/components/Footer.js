import {
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div>
      <footer
        className="footer"
        style={{ backgroundImage: "url(images/footer/bg.png)" }}
      >
        <div className="footer__wrapper padding-top padding-bottom">
          <div className="container">
            <div className="footer__content text-center">
              <Link className="mb-4 d-inline-block" href="/">
                <Image
                  src="/images/logo/logo.png"
                  width={150}
                  height={55}
                  alt="Logo"
                />
              </Link>

              <p className="footer__slogan mb-4">
                <span className="gradient-text">
                  We make mining accessible for everyone.
                </span>
              </p>

              <ul className="social justify-content-center">
                <li className="social__item">
                  <Link
                    href="https://twitter.com/innofaithrwa"
                    className="social__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </li>
                <li className="social__item">
                  <Link
                    href="https://www.instagram.com/innofaithrwa"
                    className="social__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__copyright">
          <div className="container">
            <div className="text-center py-4">
              <p className="mb-0">Innofaith © 2025 | All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
