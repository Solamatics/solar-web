import React from "react";
import Link from "next/link";
import Layout2 from "../apps/core/AuthLayout";
// import LoginComponent from "../app/components/Login/index";

export default function ResetPasswordOtp() {
  return (
    <div className="reset__password__container">
      <div className="reset__password__header grid">
        <img src="../img/arrow-left.png" alt="logo" className="" />

        <div className="reset__password__logo">
          <img src="../img/logo.png" alt="logo" className="" />
          <p className="auth__title">Password Reset</p>
        </div>

        <p className="auth__steps">Steps 2 of 3</p>
      </div>

      <div className="reset__password__description__container">
        <p className="auth__text">A 4-digit code has been sent to you at</p>
        <p className="auth__text" style={{ color: "#85c872" }}>
          enni*******@yahoo.com
        </p>

        <div className="auth__form__container">
          <form>
            <p className="auth__text auth__input__label">OTP</p>
            <input
              type="password"
              className="bg-gray-200 shadow-none dark:bg-gray-800 reset__password__form__input"
              style={{ border: "1px solid #d3d5d8 !important" }}
            />
            <button type="submit" className="reset__password__button">
              <p className="auth__button__text">Submit</p>
            </button>

            <p className="auth__text reset__password__resend__otp">
              Didn’t recieve any mail? Resend code
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

// ResetPasswordOtp.Layout = Layout2;
