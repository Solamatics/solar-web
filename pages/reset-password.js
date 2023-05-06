import React from "react";
import Link from "next/link";
import Layout2 from "../apps/core/AuthLayout";
// import LoginComponent from "../app/components/Login/index";

export default function ResetPassword() {
  return (
    <div className="reset__password__container">
      <div className="reset__password__header grid">
        <img src="../img/arrow-left.png" alt="logo" className="" />

        <div className="reset__password__logo">
          <img src="../img/logo.png" alt="logo" className="" />
          <p className="auth__title">Password Reset</p>
        </div>

        <p className="auth__steps">Steps 1 of 3</p>
      </div>

      <div className="reset__password__description__container">
        <p className="auth__text">
          Can’t remember your password? It happens, worry less. Please enter the
          email address or phone number associated with your account, you will
          be sent an OTP.
        </p>

        <div className="auth__form__container">
          <form>
            {/* <div className="bg-white shadow-none dark:bg-white"> */}
            <p className="auth__text auth__input__label">Phone Number</p>
            <input
              type="password"
              className="bg-gray-200 shadow-none dark:bg-gray-800 reset__password__form__input"
              style={{ border: "1px solid #d3d5d8 !important" }}
            />

            {/* </div> */}
            <button type="submit" className="reset__password__button">
              <p className="auth__button__text">Submit</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// ResetPassword.Layout = Layout2;
