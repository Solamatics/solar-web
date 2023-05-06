import React from "react";
import Layout2 from "../apps/core/Layout2";
import Link from "next/link";

export default function Cart() {
  return (
    <main className="main">
      <section className="cart">
        <div className="cart__container container">
          <div className="cart__top__header">
            <Link href="/shop">
              <button className="cart__go__back">
                <img
                  src="../img/left-arrow-white.png"
                  alt="twitter"
                  className=""
                />
                <p className="cart__go__back__text">Continue Shopping</p>
              </button>
            </Link>

            <p className="cart__counter">2 items in your cart</p>
          </div>

          <div className="cart__body__container container grid">
            <div className="cart__item__list grid">
              <div className="cart__item">
                <img src="../img/cart-item-1.png" alt="twitter" className="" />
                <div className="cart__item__info">
                  <p className="cart__item__title">
                    Solarclub 100 - 8 hours (night time)
                  </p>
                  <p className="cart__item__price">#215,000</p>

                  <div className="cart__item__footer">
                    <div className="cart__item__stock__quantity">
                      <p className="cart__item__stock__quantity__pointer">-</p>
                      <p>2</p>
                      <p className="cart__item__stock__quantity__pointer">+</p>
                    </div>

                    <img
                      src="../img/trash-icon.png"
                      alt="twitter"
                      className=""
                    />
                  </div>
                </div>
              </div>

              <div className="cart__item">
                <img src="../img/cart-item-1.png" alt="twitter" className="" />
                <div className="cart__item__info">
                  <p className="cart__item__title">
                    Solarclub 100 - 8 hours (night time)
                  </p>
                  <p className="cart__item__price">#215,000</p>

                  <div className="cart__item__footer">
                    <div className="cart__item__stock__quantity">
                      <p className="cart__item__stock__quantity__pointer">-</p>
                      <p>2</p>
                      <p className="cart__item__stock__quantity__pointer">+</p>
                    </div>

                    <img
                      src="../img/trash-icon.png"
                      alt="twitter"
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="cart__total__card">
              <p className="cart__total__card__title">Cart Total</p>

              <div className="cart__total__card__sub__items__container">
                <p className="cart__total__card__sub__item__text">Subtotal:</p>
                <p className="cart__total__card__sub__item__text">#430,000</p>
              </div>

              <div className="cart__total__card__sub__items__container">
                <p className="cart__total__card__sub__item__text">
                  Delivery Fee:
                </p>
                <p className="cart__total__card__sub__item__text">#1,000</p>
              </div>

              <div className="cart__total__card__total__container">
                <p className="cart__total__card__total__text">Total:</p>
                <p className="cart__total__card__total__text">#431,000</p>
              </div>

              <Link href="checkout">
                <div className="cart__total__card__checkout__button">
                  <p className="cart__total__card__checkout__button__text">
                    Proceed To Checkout
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Cart.Layout = Layout2;
