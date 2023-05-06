import React from "react";
import Layout2 from "../apps/core/Layout2";
import Layout3 from "../apps/core/Layout3";

export default function AddressLog() {
  return (
    <main className="main address__log">
      <div className="address__log__container container">
        <div className="address__log__heading">
          <p className="address__log__title">Edit Address Log</p>
        </div>

        <div className="address__log__form__container">
          <form className="address__log__form">
            <div className="address__log__form__input__container">
              <div className="bg-white mb-2 shadow-none dark:bg-white">
                <p className="address__log__input__label">
                  First Name{" "}
                  <span className="address__log__input__label__required">
                    *
                  </span>
                </p>
                <input
                  type="text"
                  className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800 address__log__input"
                  style={{ border: "1px solid #d3d5d8 !important" }}
                />
              </div>
              <div className="bg-white mb-2 shadow-none dark:bg-white">
                <p className="address__log__input__label">
                  Last Name{" "}
                  <span className="address__log__input__label__required">
                    *
                  </span>
                </p>
                <input
                  type="text"
                  className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800 address__log__input"
                  style={{ border: "1px solid #d3d5d8 !important" }}
                />
              </div>
            </div>

            <div className="address__log__form__input__container">
              <div className="bg-white mb-2 shadow-none dark:bg-white">
                <p className="address__log__input__label">
                  Phone Number{" "}
                  <span className="address__log__input__label__required">
                    *
                  </span>
                </p>
                <input
                  type="text"
                  className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800 address__log__input"
                  style={{ border: "1px solid #d3d5d8 !important" }}
                />
              </div>
              <div className="bg-white mb-2 shadow-none dark:bg-white">
                <p className="address__log__input__label">
                  Additional Phone Number{" "}
                  <span className="address__log__input__label__required">
                    *
                  </span>
                </p>
                <input
                  type="text"
                  className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800 address__log__input"
                  style={{ border: "1px solid #d3d5d8 !important" }}
                />
              </div>
            </div>

            <div className="address__log__form__input__container">
              <div className="bg-white mb-2 shadow-none dark:bg-white">
                <p className="address__log__input__label">
                  Email Address{" "}
                  <span className="address__log__input__label__required">
                    *
                  </span>
                </p>
                <input
                  type="text"
                  className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800 address__log__input"
                  style={{ border: "1px solid #d3d5d8 !important" }}
                />
              </div>
              <div className="bg-white mb-2 shadow-none dark:bg-white">
                <p className="address__log__input__label">
                  Date of Birth (MM/DD/YY){" "}
                  <span className="address__log__input__label__required">
                    *
                  </span>
                </p>
                <input
                  type="date"
                  className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800 address__log__input"
                  style={{ border: "1px solid #d3d5d8 !important" }}
                />
              </div>
            </div>

            <div className="address__log__form__input__container">
              <div className="bg-white mb-2 shadow-none dark:bg-white">
                <p className="address__log__input__label">
                  Date of Birth (MM/DD/YY){" "}
                  <span className="address__log__input__label__required">
                    *
                  </span>
                </p>
                <input
                  type="text"
                  className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800 address__log__input__2"
                  style={{ border: "1px solid #d3d5d8 !important" }}
                />
              </div>
            </div>

            <div className="address__log__form__input__container">
              <div className="bg-white mb-2 shadow-none dark:bg-white">
                <p className="address__log__input__label">
                  State{" "}
                  <span className="address__log__input__label__required">
                    *
                  </span>
                </p>
                <input
                  type="text"
                  className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800 address__log__input"
                  style={{ border: "1px solid #d3d5d8 !important" }}
                />
              </div>
              <div className="bg-white mb-2 shadow-none dark:bg-white">
                <p className="address__log__input__label">
                  City{" "}
                  <span className="address__log__input__label__required">
                    *
                  </span>
                </p>
                <input
                  type="text"
                  className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800 address__log__input"
                  style={{ border: "1px solid #d3d5d8 !important" }}
                />
              </div>
            </div>

            <div className="address__log__footer">
              <button className="address__log__footer__button">
                <p className="address__log__footer__button__text">Save</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

// AddressLog.Layout = Layout3;
