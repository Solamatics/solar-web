import React from "react";
import Layout2 from "../apps/core/Layout2";
import Layout3 from "../apps/core/Layout3";

export default function WishList() {
  return (
    <main className="main">
      <div className="wishlist__container container grid">
        <div className="wishlist__heading__container">
          <p className="wishlist__heading__title">Wish List</p>
        </div>

        <div className="wishlist__item__container grid">
          <div className="wishlist__item">
            <img src="../img/cart-item-1.png" alt="twitter" className="" />
            <div className="wishlist__item__info">
              <p className="wishlist__item__title">
                Solarclub 100 - 8 hours (night time)
              </p>
              <p className="wishlist__item__price">#215,000</p>

              <div className="wishlist__item__footer">
                <div></div>
                <img
                  src="../img/trash-icon.png"
                  alt="twitter"
                  className="wishlist__trash__icon"
                />
              </div>
            </div>
          </div>
          <div className="wishlist__item">
            <img src="../img/cart-item-1.png" alt="twitter" className="" />
            <div className="wishlist__item__info">
              <p className="wishlist__item__title">
                Solarclub 100 - 8 hours (night time)
              </p>
              <p className="wishlist__item__price">#215,000</p>

              <div className="wishlist__item__footer">
                <div></div>
                <img
                  src="../img/trash-icon.png"
                  alt="twitter"
                  className="wishlist__trash__icon"
                />
              </div>
            </div>
          </div>
          <div className="wishlist__item">
            <img src="../img/cart-item-1.png" alt="twitter" className="" />
            <div className="wishlist__item__info">
              <p className="wishlist__item__title">
                Solarclub 100 - 8 hours (night time)
              </p>
              <p className="wishlist__item__price">#215,000</p>

              <div className="wishlist__item__footer">
                <div></div>
                <img
                  src="../img/trash-icon.png"
                  alt="twitter"
                  className="wishlist__trash__icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// WishList.Layout = Layout3;
