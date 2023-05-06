import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Layout2 from "../apps/core/AuthLayout";
import { useRouter } from "next/router";
import { asyncLogin } from "../apps/features/product/productSlice";

export default function Signin() {
  const dispatch = useDispatch();
  const router = useRouter();
  const onLogin = (e) => {
    localStorage.setItem("cart", JSON.stringify([]));
    localStorage.setItem("orders", JSON.stringify([]));
    localStorage.setItem("wishlist", JSON.stringify([]));
    router.push("/shop");
    // dispatch(asyncLogin());
  };
  return (
    <div className="auth__container">
      <img src="../img/auth-logo.png" alt="logo" className="" />
      <p className="auth__text">
        Don’t have an account yet?{" "}
        <span style={{ color: "#85c872" }}>Sign up</span>
      </p>

      <div className="auth__form__container">
        {/* <form> */}
        <div className="bg-white mb-2 shadow-none dark:bg-white">
          <p className="auth__text auth__input__label">Email</p>
          <input
            type="text"
            className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800 form__input"
            style={{ border: "1px solid #d3d5d8 !important" }}
          />
        </div>
        <div className="bg-white mb-2 shadow-none dark:bg-white">
          <p className="auth__text auth__input__label">Password</p>
          <input
            type="password"
            className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800 form__input"
            style={{ border: "1px solid #d3d5d8 !important" }}
          />
        </div>
        <div className="flex justify-between my-4">
          <p className="auth__text auth__text__align__right">
            <Link href="/forgot-password">Forgot Password?</Link>
          </p>
        </div>

        <a className="auth__button">
          <p className="auth__button__text" onClick={() => onLogin()}>
            Login
          </p>
        </a>

        <div className="auth__social__loign">
          <p className="auth__text">or use other accounts</p>

          <div className="auth__social__loign__container grid">
            <img
              src="../img/social_login_google.png"
              alt="twitter"
              className=""
            />
            <img
              src="../img/social_login_linkedin.png"
              alt="twitter"
              className=""
            />
            <img
              src="../img/social_login_apple.png"
              alt="twitter"
              className=""
            />
          </div>
        </div>

        <div className="auth__description__container">
          <p className="auth__description__text auth__text">
            By clicking Sign in or Continue with Google, Facebook, or Apple, you
            agree to Ecocity&apos;s Terms of Use and Privacy Policy. Ecocity may
            send you communications; you may change your preferences in your
            account settings. We&apos;ll never post without your permission.
          </p>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
}

// Signin.Layout = Layout2;
