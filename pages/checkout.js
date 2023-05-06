import React from "react";
import Layout2 from "../apps/core/Layout2";

export default function Checkout() {
  return (
    <main className="main">
      <section className="checkout">
        <div className="checkout__container container">
          <div className="checkout__top__header">
            <p className="checkout__counter">Checkout</p>
          </div>

          <div className="checkout__body__container container grid">
            <div className="checkout__detail__container grid">
              <div className="checkout__detail__address">
                <p className="checkout__detail__address__title">
                  1. Address Details
                </p>

                <form className="checkout__detail__address__form">
                  <div className="checkout__detail__address__customer__name__container">
                    <div className="bg-white mb-2 shadow-none dark:bg-white">
                      <p className="checkout__detail__input__label">
                        First Name{" "}
                        <span className="checkout__detail__input__label__required">
                          *
                        </span>
                      </p>
                      <input
                        type="text"
                        className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800 checkout__detail__input"
                        style={{ border: "1px solid #d3d5d8 !important" }}
                      />
                    </div>
                    <div className="bg-white mb-2 shadow-none dark:bg-white">
                      <p className="checkout__detail__input__label">
                        Last Name{" "}
                        <span className="checkout__detail__input__label__required">
                          *
                        </span>
                      </p>
                      <input
                        type="text"
                        className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800 checkout__detail__input"
                        style={{ border: "1px solid #d3d5d8 !important" }}
                      />
                    </div>
                  </div>

                  <div className="bg-white mb-2 shadow-none dark:bg-white">
                    <p className="checkout__detail__input__label">
                      Phone Number{" "}
                      <span className="checkout__detail__input__label__required">
                        *
                      </span>
                    </p>
                    <input
                      type="text"
                      className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800 checkout__detail__input__2"
                      style={{ border: "1px solid #d3d5d8 !important" }}
                    />
                  </div>

                  <div className="bg-white mb-2 shadow-none dark:bg-white">
                    <p className="checkout__detail__input__label">
                      Street Address{" "}
                      <span className="checkout__detail__input__label__required">
                        *
                      </span>
                    </p>
                    <input
                      type="text"
                      className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800 checkout__detail__input__2"
                      style={{ border: "1px solid #d3d5d8 !important" }}
                    />
                  </div>

                  <div className="bg-white mb-2 shadow-none dark:bg-white">
                    <p className="checkout__detail__input__label">
                      Apt/Suite/Other
                    </p>
                    <input
                      type="text"
                      className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800 checkout__detail__input__2"
                      style={{ border: "1px solid #d3d5d8 !important" }}
                    />
                  </div>

                  <div className="checkout__detail__address__customer__name__container">
                    <div className="bg-white mb-2 shadow-none dark:bg-white">
                      <p className="checkout__detail__input__label">
                        City{" "}
                        <span className="checkout__detail__input__label__required">
                          *
                        </span>
                      </p>
                      <input
                        type="text"
                        className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800 checkout__detail__input"
                        style={{ border: "1px solid #d3d5d8 !important" }}
                      />
                    </div>
                    <div className="bg-white mb-2 shadow-none dark:bg-white">
                      <p className="checkout__detail__input__label">
                        State{" "}
                        <span className="checkout__detail__input__label__required">
                          *
                        </span>
                      </p>
                      <input
                        type="text"
                        className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800 checkout__detail__input"
                        style={{ border: "1px solid #d3d5d8 !important" }}
                      />
                    </div>
                  </div>

                  <button type="submit" className="checkout__detail__button">
                    <p className="checkout__detail__button__text">
                      Save and Continue
                    </p>
                  </button>
                </form>

                <div className="checkout__detail__address__confirmed">
                  <p className="checkout__detail__address__confirmed__name">
                    Keston Timson
                  </p>
                  <p className="checkout__detail__address__confirmed__contact">
                    Trademore Estate, ABUJA AIRPORT ROAD- TRADEMORE, Federal
                    Capital Territory
                  </p>
                  <p className="checkout__detail__address__confirmed__contact">
                    +2349176342190
                  </p>
                </div>
              </div>

              <div className="checkout__detail__delivery__method">
                <p className="checkout__detail__delivery__title">
                  2. Delivery Methods
                </p>

                <div className="checkout__detail__delivery__option__container">
                  <p className="checkout__detail__delivery__option__title">
                    How would you like your order to be delivered?
                  </p>

                  <div className="checkout__detail__delivery__option__list">
                    <label className="checkout__detail__delivery__option__item">
                      <input
                        type="radio"
                        name="delivery_method"
                        className="checkout__detail__delivery__option__radio"
                      />
                      <div className="checkout__detail__delivery__option__description">
                        <p className="checkout__detail__delivery__option__title">
                          Pickup at our station (cheaper fees than door
                          delivery)
                        </p>
                        <p className="checkout__detail__delivery__option__text">
                          Send a whatsapp message to 09023981763
                        </p>
                      </div>
                    </label>

                    <label className="checkout__detail__delivery__option__item">
                      <input
                        type="radio"
                        name="delivery_method"
                        className="checkout__detail__delivery__option__radio"
                      />
                      <div className="checkout__detail__delivery__option__description">
                        <p className="checkout__detail__delivery__option__title">
                          Door Delivery
                        </p>
                        <p className="checkout__detail__delivery__option__text">
                          Would be delivered between 10am - 6pm for #1000
                        </p>
                      </div>
                    </label>
                  </div>

                  <button type="submit" className="checkout__detail__button">
                    <p className="checkout__detail__button__text">
                      Proceed to Payment
                    </p>
                  </button>
                </div>

                <div className="checkout__detail__delivery__method__confirmed">
                  <p className="checkout__detail__delivery__option__title">
                    Pickup Station (Cheaper Shipping Fees than Door Delivery)
                  </p>

                  <div className="checkout__detail__delivery__method__confirmed__contact__detail">
                    <p className="checkout__detail__delivery__option__text">
                      Trademore Estate, ABUJA AIRPORT ROAD- TRADEMORE, Federal
                      Capital Territory
                    </p>
                    <p className="checkout__detail__delivery__option__text">
                      +2349176342190
                    </p>
                    <p className="checkout__detail__delivery__option__text">
                      Pickup Fee #0
                    </p>
                  </div>
                </div>
              </div>

              <div className="checkout__detail__payment__method">
                <p className="checkout__detail__payment__title">
                  3. Payment Methods
                </p>

                <div className="checkout__detail__payment__option__container">
                  <p className="checkout__detail__payment__option__title">
                    How would you want to pay for your order?
                  </p>

                  <div className="checkout__detail__payment__option__list">
                    <div>
                      <label className="checkout__detail__payment__option__item">
                        <input
                          type="radio"
                          name="delivery_method"
                          className="checkout__detail__payment__option__radio"
                        />
                        <p className="checkout__detail__payment__option__title">
                          Pay with cards, Bank transfer or USSD
                        </p>
                        <img
                          src="../img/payment-icons.png"
                          alt="payment-icons"
                          className="checkout__detail__payment__icons"
                        />
                      </label>

                      <div className="checkout__detail__payment__option__item__description__container">
                        <ul className="checkout__detail__payment__option__item__description__list grid">
                          <li className="checkout__detail__payment__option__text">
                            Ensure your payment information is up to date and
                            that you have sufficient funds.
                          </li>
                          <li className="checkout__detail__payment__option__text">
                            For bank transfer, kindly ensure you transfer exact
                            amount displayed.
                          </li>
                          <li className="checkout__detail__payment__option__text">
                            Payment confirmation takes up to 30 minutes.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <hr />

                    <div>
                      <label className="checkout__detail__payment__option__item">
                        <input
                          type="radio"
                          name="delivery_method"
                          className="checkout__detail__payment__option__radio"
                        />
                        <p className="checkout__detail__payment__option__title">
                          Pay on Delivery - With Cash, Bank transfers or Crads.
                        </p>
                      </label>

                      <div className="checkout__detail__payment__option__item__description__container">
                        <ul className="checkout__detail__payment__option__item__description__list grid">
                          <li className="checkout__detail__payment__option__text">
                            Kindly note that you would have to make payment
                            before opening your package.
                          </li>
                          <li className="checkout__detail__payment__option__text">
                            Once the seal is broken, the item can only be
                            returned if it is damaged, defective, or has missing
                            parts.
                          </li>
                          <li className="checkout__detail__payment__option__text">
                            Ecocity will never ask you for your password, PIN,
                            CVV or full card details over the phone or via
                            email.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div className="checkout__detail__payment__sub__total__container">
                    <div className="checkout__detail__payment__amount__container">
                      <p className="checkout__detail__payment__amount__title">
                        Subtotal:
                      </p>
                      <p className="checkout__detail__payment__amount__value">
                        #430,000
                      </p>
                    </div>

                    <div className="checkout__detail__payment__amount__container">
                      <p className="checkout__detail__payment__amount__title">
                        Delivery Fee:
                      </p>
                      <p className="checkout__detail__payment__amount__value">
                        #1,000
                      </p>
                    </div>
                  </div>

                  <hr />

                  <div className="checkout__detail__payment__total__container">
                    <div className="checkout__detail__payment__amount__container">
                      <p className="checkout__detail__payment__amount__title__2">
                        Total:
                      </p>
                      <p className="checkout__detail__payment__amount__value__2">
                        #430,000
                      </p>
                    </div>
                  </div>

                  <button type="submit" className="checkout__detail__button">
                    <p className="checkout__detail__button__text">
                      Confirm order
                    </p>
                  </button>
                </div>
              </div>
            </div>

            <div className="checkout__cart__total__card">
              <p className="checkout__cart__total__card__title">Cart Total</p>

              <div className="checkout__cart__total__card__sub__items__container">
                <p className="checkout__cart__total__card__sub__item__text">
                  Subtotal:
                </p>
                <p className="checkout__cart__total__card__sub__item__text">
                  #430,000
                </p>
              </div>

              <div className="checkout__cart__total__card__sub__items__container">
                <p className="checkout__cart__total__card__sub__item__text">
                  Delivery Fee:
                </p>
                <p className="checkout__cart__total__card__sub__item__text">
                  #1,000
                </p>
              </div>

              <div className="checkout__cart__total__card__total__container">
                <p className="checkout__cart__total__card__total__text">
                  Total:
                </p>
                <p className="checkout__cart__total__card__total__text">
                  #431,000
                </p>
              </div>

              <a href="cart">
                <div className="checkout__cart__total__card__checkout__button">
                  <p className="checkout__cart__total__card__checkout__button__text">
                    Edit Cart
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Checkout.Layout = Layout2;
