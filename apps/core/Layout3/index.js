import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header2 from "../../components/Header2";
import { useRouter } from "next/router";

function Layout3({ children }) {
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    console.log("this is the current path =>", router.pathname);
    console.log(router.pathname);
    setCurrentUrl(router.pathname);
  });
  useEffect(() => {
    console.log(router.pathname);
    setCurrentUrl(router.pathname);
  }, [router]);

  const onLogout = () => {
    localStorage.clear();
    window.location.replace('sign-in')
  };

  return (
    <div>
      {/* <!-- ============================ HEADER ========================= --> */}
      <Header2 />
      <main className="main">
        <div className="layout3__container container grid">
          <aside className="aside__nav">
            <a href="/account">
              <div
                className={
                  currentUrl.includes("/account")
                    ? "aside__nav__item__active"
                    : "aside__nav__item"
                }
              >
                <img src="../img/user-icon.png" alt="user-icon" className="" />
                <p
                  className={
                    currentUrl.includes("/account")
                      ? "aside__nav__item__text__active"
                      : "aside__nav__item__text"
                  }
                >
                  My Account Settings
                </p>
              </div>
            </a>

            <a href="/orders">
              <div
                className={
                  currentUrl.includes("/orders")
                    ? "aside__nav__item__active"
                    : "aside__nav__item"
                }
              >
                <img
                  src="../img/order-icon.png"
                  color="#85c872"
                  alt="order-icon"
                  style={{ color: "#85c872" }}
                  className=""
                />
                <p
                  className={
                    currentUrl.includes("/orders")
                      ? "aside__nav__item__text__active"
                      : "aside__nav__item__text"
                  }
                >
                  Orders
                </p>
              </div>
            </a>

            <a href="/notifications">
              <div
                className={
                  currentUrl.includes("/notifications")
                    ? "aside__nav__item__active"
                    : "aside__nav__item"
                }
              >
                <img
                  src="../img/notification-icon.png"
                  alt="notification-icon"
                  className=""
                />
                <p
                  className={
                    currentUrl.includes("/notifications")
                      ? "aside__nav__item__text__active"
                      : "aside__nav__item__text"
                  }
                >
                  Notification
                </p>
              </div>
            </a>

            <a href="/wishlist">
              <div
                className={
                  currentUrl.includes("/wishlist")
                    ? "aside__nav__item__active"
                    : "aside__nav__item"
                }
              >
                <img
                  src="../img/wishlist-icon.png"
                  alt="wishlist-icon"
                  className=""
                />
                <p
                  className={
                    currentUrl.includes("/wishlist")
                      ? "aside__nav__item__text__active"
                      : "aside__nav__item__text"
                  }
                >
                  Wish List
                </p>
              </div>
            </a>

            <a href="/address-log">
              <div
                className={
                  currentUrl.includes("/address-log")
                    ? "aside__nav__item__active"
                    : "aside__nav__item"
                }
              >
                <img
                  src="../img/address-icon.png"
                  alt="address-icon"
                  className=""
                />
                <p
                  className={
                    currentUrl.includes("/address-log")
                      ? "aside__nav__item__text__active"
                      : "aside__nav__item__text"
                  }
                >
                  Address Log
                </p>
              </div>
            </a>

            <a href="/delete-account">
            <div
                className={
                  currentUrl.includes("/delete-account")
                    ? "aside__nav__item__active"
                    : "aside__nav__item"
                }
              >
                <img
                  src="../img/delete-account-icon.png"
                  alt="delete-account-icon"
                  className=""
                />
                <p
                  className={
                    currentUrl.includes("/delete-account")
                      ? "aside__nav__item__text__active"
                      : "aside__nav__item__text"
                  }
                >Delete Account</p>
              </div>
            </a>

            <div className="aside__nav__item" style={{ cursor: "pointer" }} onClick={() => onLogout()}>
              <img src="../img/user-icon.png" alt="twitter" className="" />
              <p className="aside__nav__item__text">Sign Out</p>
            </div>
          </aside>

          <div className="content">{children}</div>
        </div>
      </main>
      {/* <!-- ========================== FOOTER ======================== --> */}
      <Footer />
    </div>
  );
}

export default Layout3;
