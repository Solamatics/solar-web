import React from "react";
import Link from "next/link";

function Header2() {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link href="/" className="nav__logo">
          <i className="nav__logo-icon">
            <img
              src="/img/sport-reels-logo-p.png"
              color="black"
              width="70px"
              height="70px"
            />
          </i>
        </Link>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <div className="nav__item__search__container">
              <div className="bg-white shadow-none">
                <input type="text" className="nav__item__input" />
              </div>

              <button className="nav__item__search__btn">
                <p className="nav__item__search__btn__text">GO!</p>
              </button>
            </div>

            <li className="nav__item">
              <Link href="/shop" className="nav__link active-link">
                <img src="../img/home-icon.png" alt="twitter" className="" />
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/account" className="nav__link">
                <img src="../img/user-icon.png" alt="twitter" className="" />
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/cart" className="nav__link">
                <img
                  src="../img/shopping-cart-icon.png"
                  alt="twitter"
                  className=""
                />
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/#contact" className="nav__link">
                <img
                  src="../img/help-circle-icon.png"
                  alt="twitter"
                  className=""
                />
              </Link>
            </li>
          </ul>

          <div className="nav__close" id="nav-close">
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__btns">
          {/* <!-- Theme change button --> */}
          <i className="ri-moon-line change-theme" id="theme-button"></i>

          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-menu-line"></i>
            {/* <i className="ri-menu-line">Menu</i> */}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header2;
