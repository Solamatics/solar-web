import React from "react";
import Layout2 from "../apps/core/Layout2";
import Layout3 from "../apps/core/Layout3";

export default function Orders() {
  return (
    <main className="main">
      <div className="orders__container container grid">
        <div className="orders__heading__container">
          <p className="orders__heading__title">Orders</p>
        </div>

        <div className="orders__item__container grid">
          <div className="orders__item">
            <img src="../img/cart-item-1.png" alt="twitter" className="" />
            <div className="orders__item__info">
              <p className="orders__item__title">
                Solarclub 100 - 8 hours (night time)
              </p>
              <p className="orders__item__price">#215,000</p>

              <div className="orders__item__footer">
                <div></div>
                <div className="orders__return__item__container grid">
                  <button className="orders__return__item__btn orders__return__btn">
                    <p className="orders__return__item__btn__text">
                      Return Item
                    </p>
                  </button>
                  <button className="orders__return__item__btn orders__cancel__btn">
                    <p className="orders__return__item__btn__text">
                      Cancel Order
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="orders__item">
            <img src="../img/cart-item-1.png" alt="twitter" className="" />
            <div className="orders__item__info">
              <p className="orders__item__title">
                Solarclub 100 - 8 hours (night time)
              </p>
              <p className="orders__item__price">#215,000</p>

              <div className="orders__item__footer">
                <div></div>
                <div className="orders__return__item__container grid">
                  <button className="orders__return__item__btn orders__return__btn">
                    <p className="orders__return__item__btn__text">
                      Return Item
                    </p>
                  </button>
                  <button className="orders__return__item__btn orders__cancel__btn">
                    <p className="orders__return__item__btn__text">
                      Cancel Order
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="orders__item">
            <img src="../img/cart-item-1.png" alt="twitter" className="" />
            <div className="orders__item__info">
              <p className="orders__item__title">
                Solarclub 100 - 8 hours (night time)
              </p>
              <p className="orders__item__price">#215,000</p>

              <div className="orders__item__footer">
                <div></div>
                <div className="orders__return__item__container grid">
                  <button className="orders__return__item__btn orders__return__btn">
                    <p className="orders__return__item__btn__text">
                      Return Item
                    </p>
                  </button>
                  <button className="orders__return__item__btn orders__cancel__btn">
                    <p className="orders__return__item__btn__text">
                      Cancel Order
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Orders.Layout = Layout3;
