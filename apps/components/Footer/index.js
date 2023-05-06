import React from "react";

function Footer() {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        <div className="footer__content">
          <a href="#" className="footer__logo">
            <img src="../img/ecocity-logo.png" alt="twitter" className="" />
          </a>

          <p className="footer__description">
            Lorem ipsum dolor sit amet consectetur. Senectus vitae vitae id
            posuere sodales venenatis ultricies nulla. Non massa eget quam sit
            sollicitudin pulvinar pellentesque vitae. Lorem ipsum dolor sit amet
            consectetur. Senectus vitae vitae id posuere sodales venenatis
            ultricies nulla. Non massa eget quam sit sollicitudin pulvinar
            pellentesque vitae.
          </p>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Explore</h3>

          <ul className="footer__list">
            <li className="footer__item">Shop</li>
            <li className="footer__item">Support</li>
            <li className="footer__item">About Us</li>
            <li className="footer__item">Contact Us</li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Quick Links</h3>

          <ul className="footer__list">
            <li className="footer__item">FAQs</li>
            <li className="footer__item">Privacy & Policy</li>
            <li className="footer__item">Terms & conditions</li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Get in Touch</h3>

          <ul className="footer__list">
            <li className="footer__item">
              27 Division St, New York, NY 10002, USA
            </li>
            <li className="footer__item">ecocitysolarclub@gmail.com</li>
            <li className="footer__item">+234 (0) 9023456789</li>
          </ul>
        </div>
      </div>

      <p className="footer__copy">&#196; Sports Reels. All rigths reserved</p>
    </footer>
  );
}

export default Footer;
