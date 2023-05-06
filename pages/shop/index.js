import React from "react";
import Layout2 from "../../apps/core/Layout2";
import Link from "next/link";

export default function Shop() {
  return (
    <main className="main">
      <section className="banner" id="about">
        <div className="banner__container container">
          <p className="banner__title">
            shop with us and get <br /> the best out of <br /> everything!
          </p>
        </div>
      </section>

      <section className="shop">
        <div className="shop__container container grid">
          <Link href="/shop/1">
            <div className="shop__item">
              <img src="../img/shop-item-1.png" alt="twitter" className="" />
              <p className="shop__item__title">
                Solarclub 100 - 6 hours (night time)
              </p>
              <div className="shop__item__like__container">
                <img src="../img/likes.png" alt="twitter" className="" />
                <p className="shop__item__like__count">(2,318)</p>
              </div>
              <p className="shop__item__price">#180,000</p>
            </div>
          </Link>

          <div className="shop__item">
            <img src="../img/shop-item-2.png" alt="twitter" className="" />
            <p className="shop__item__title">
              Solarclub 100 - 6 hours (night time)
            </p>
            <div className="shop__item__like__container">
              <img src="../img/likes.png" alt="twitter" className="" />
              <p className="shop__item__like__count">(2,318)</p>
            </div>
            <p className="shop__item__price">#180,000</p>
          </div>

          <div className="shop__item">
            <img src="../img/shop-item-3.png" alt="twitter" className="" />
            <p className="shop__item__title">
              Solarclub 100 - 6 hours (night time)
            </p>
            <div className="shop__item__like__container">
              <img src="../img/likes.png" alt="twitter" className="" />
              <p className="shop__item__like__count">(2,318)</p>
            </div>
            <p className="shop__item__price">#180,000</p>
          </div>

          <div className="shop__item">
            <img src="../img/shop-item-4.png" alt="twitter" className="" />
            <p className="shop__item__title">
              Solarclub 100 - 6 hours (night time)
            </p>
            <div className="shop__item__like__container">
              <img src="../img/likes.png" alt="twitter" className="" />
              <p className="shop__item__like__count">(2,318)</p>
            </div>
            <p className="shop__item__price">#180,000</p>
          </div>

          <div className="shop__item">
            <img src="../img/shop-item-5.png" alt="twitter" className="" />
            <p className="shop__item__title">
              Solarclub 100 - 6 hours (night time)
            </p>
            <div className="shop__item__like__container">
              <img src="../img/likes.png" alt="twitter" className="" />
              <p className="shop__item__like__count">(2,318)</p>
            </div>
            <p className="shop__item__price">#180,000</p>
          </div>

          <div className="shop__item">
            <img src="../img/shop-item-6.png" alt="twitter" className="" />
            <p className="shop__item__title">
              Solarclub 100 - 6 hours (night time)
            </p>
            <div className="shop__item__like__container">
              <img src="../img/likes.png" alt="twitter" className="" />
              <p className="shop__item__like__count">(2,318)</p>
            </div>
            <p className="shop__item__price">#180,000</p>
          </div>
        </div>
      </section>
    </main>
  );
}

Shop.Layout = Layout2;
