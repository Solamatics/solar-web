import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout2 from "../../apps/core/Layout2";
import {
  asyncWishlistItem,
  asyncAddToCart,
  getCart,
  getWishlist,
} from "../../apps/features/product/productSlice";
import Link from "next/link";

export default function ShopItem() {
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState(1);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    // dispatch(getWishlist())
  }, []);

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    setQuantity(quantity - 1);
  };

  const changeTab = (tabNumber) => {
    setCurrentTab(tabNumber);
  };

  const wishlist_item = (item) => {
    console.log("item: ", item);
    dispatch(asyncWishlistItem(item));
  };

  const addToCart = (item) => {
    if (quantity == 0) {
      alert("Item quantity must be greater than zero");
    } else {
      console.log("item: ", item);
      dispatch(asyncAddToCart({ ...item, quantity: quantity }));
    }
  };

  const cart = useSelector(getCart);
  const wishlist = useSelector(getWishlist);

  console.log("cart__items: ", cart);
  console.log("user__wishlist: ", wishlist);

  return (
    <main className="main">
      <section className="shop__detail">
        <div className="shop__detail__container container">
          <Link href="/shop">
            <button className="shop__detail__go__back">
              <img
                src="../img/left-arrow-white.png"
                alt="twitter"
                className=""
              />
              <p className="shop__detail__go__back__text">Back</p>
            </button>
          </Link>

          <div className="shop__detail__info__container grid">
            <img
              src="../img/shop-item-5.png"
              alt="twitter"
              className="shop__detail__info__img"
            />

            <div className="shop__detail__info__description__container">
              <p className="shop__detail__info__description__title">
                Solarclub 100 - 8 hours (night time)
              </p>
              <div className="shop__detail__info__description__likes__container">
                <img src="../img/likes.png" alt="likes" />
                <p className="shop__detail__info__description__likes__count">
                  (2,156)
                </p>
              </div>

              <p className="shop__detail__info__description__price">#250,000</p>

              <p className="shop__detail__info__description__text">
                Lorem ipsum dolor sit amet consectetur. Nam quis suspendisse
                ullamcorper ornare praesent quis nisl tortor. Congue luctus ut
                adipiscing nisl cursus diam aliquet suspendisse leo. Lorem ipsum
                dolor sit amet consectetur. Nam quis suspendisse ullamcorper
                ornare praesent quis nisl tortor. Congue luctus ut adipiscing
                nisl cursus diam aliquet suspendisse leo.
              </p>

              <div className="shop__detail__info__description__stock__container">
                <p className="shop__detail__info__description__stock__label">
                  Availability:
                </p>
                <p className="shop__detail__info__description__stock__value">
                  In Stock
                </p>
              </div>

              <div className="shop__detail__info__description__quantity__container">
                <p className="shop__detail__info__description__quantity__label">
                  Quantity:
                </p>
                {/* <div className="shop__detail__info__description__stock__quantity">
                  {quantity > 0 ? (
                    <Link onClick={() => decreaseQty()}>
                      <p className="shop__detail__info__description__stock__quantity__pointer">
                        -
                      </p>
                    </Link>
                  ) : (
                    <div></div>
                  )}
                  <p>{quantity}</p>
                  <Link onClick={() => increaseQty()}>
                    <p className="shop__detail__info__description__stock__quantity__pointer">
                      +
                    </p>
                  </Link>
                </div> */}
              </div>

              <div className="shop__detail__info__description__cart__container">
                {cart.filter((i) => i.id == 1).length > 0 ? (
                  <button
                    onClick={() =>
                      addToCart({
                        id: 1,
                        product: "Solarclub 100 - 8 hours (night time)",
                        price: "250000",
                        description:
                          "Lorem ipsum dolor sit amet consectetur. Nam quis suspendisse ullamcorper ornare praesent quis nisl tortor. Congue luctus ut adipiscing nisl cursus diam aliquet suspendisse leo. Lorem ipsum dolor sit amet consectetur. Nam quis suspendisse ullamcorper ornare praesent quis nisl tortor. Congue luctus ut adipiscing nisl cursus diam aliquet suspendisse leo.",
                      })
                    }
                    className="shop__detail__info__description__remove__to__cart"
                  >
                    <p className="shop__detail__info__description__remove__to__cart__text">
                      Remove Item
                    </p>
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      addToCart({
                        id: 1,
                        product: "Solarclub 100 - 8 hours (night time)",
                        price: "250000",
                        description:
                          "Lorem ipsum dolor sit amet consectetur. Nam quis suspendisse ullamcorper ornare praesent quis nisl tortor. Congue luctus ut adipiscing nisl cursus diam aliquet suspendisse leo. Lorem ipsum dolor sit amet consectetur. Nam quis suspendisse ullamcorper ornare praesent quis nisl tortor. Congue luctus ut adipiscing nisl cursus diam aliquet suspendisse leo.",
                      })
                    }
                    className="shop__detail__info__description__add__to__cart"
                  >
                    <p className="shop__detail__info__description__add__to__cart__text">
                      Add To Cart
                    </p>
                    <img src="../img/cart-icon.png" alt="cart-icon" />
                  </button>
                )}

                <button
                  onClick={() =>
                    wishlist_item({
                      id: 1,
                      product: "Solarclub 100 - 8 hours (night time)",
                      price: "250000",
                      description:
                        "Lorem ipsum dolor sit amet consectetur. Nam quis suspendisse ullamcorper ornare praesent quis nisl tortor. Congue luctus ut adipiscing nisl cursus diam aliquet suspendisse leo. Lorem ipsum dolor sit amet consectetur. Nam quis suspendisse ullamcorper ornare praesent quis nisl tortor. Congue luctus ut adipiscing nisl cursus diam aliquet suspendisse leo.",
                    })
                  }
                  className="shop__detail__info__description__add__to__wishlist"
                >
                  {wishlist.filter((i) => i.id == 1).length > 0 ? (
                    <img src="../img/trash-icon.png" alt="icon-heart" />
                  ) : (
                    <img src="../img/icon-heart.png" alt="icon-heart" />
                  )}
                </button>
              </div>

              <div className="shop__detail__info__description__share__container">
                <p className="shop__detail__info__description__share__label">
                  Share:
                </p>
                <div className="shop__detail__info__description__share__icons__container">
                  <img
                    src="../img/icon-facebook.png"
                    alt="icon-facebook"
                    style={{ height: "15px" }}
                  />
                  <img
                    src="../img/icon-instagram.png"
                    alt="icon-instagram"
                    style={{ height: "15px", marginLeft: "10px" }}
                  />
                  <img
                    src="../img/icon-linkedin.png"
                    alt="icon-linkedin"
                    style={{ height: "15px", marginLeft: "10px" }}
                  />
                  <img
                    src="../img/icon-twitter.png"
                    alt="icon-twitter"
                    style={{ height: "15px", marginLeft: "10px" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="shop__detail__review__container container">
            <div className="shop__detail__review__tab__container container">
              <div
                className={
                  currentTab == 1
                    ? "shop__detail__review__tab__active"
                    : "shop__detail__review__tab"
                }
                onClick={() => changeTab(1)}
              >
                <p className="shop__detail__review__tab__item">Description</p>
              </div>
              <div
                className={
                  currentTab == 2
                    ? "shop__detail__review__tab__active"
                    : "shop__detail__review__tab"
                }
                onClick={() => changeTab(2)}
              >
                <p className="shop__detail__review__tab__item">
                  Additional Information
                </p>
              </div>
              <div
                className={
                  currentTab == 3
                    ? "shop__detail__review__tab__active"
                    : "shop__detail__review__tab"
                }
                onClick={() => changeTab(3)}
              >
                <p className="shop__detail__review__tab__item">Review</p>
              </div>
            </div>

            <div className="shop__detail__review__text__container container">
              {currentTab == 1
                ? `Description Lorem ipsum dolor sit amet consectetur. Blandit suspendisse
              ultrices gravida amet ipsum. Arcu dictum integer lacinia integer.
              Arcu nunc sit molestie sed senectus. Egestas tellus malesuada diam
              nulla pulvinar risus. Iaculis habitasse arcu non quis pellentesque
              purus. Quam turpis eleifend facilisi vel pellentesque. Pulvinar
              facilisi sit magna arcu venenatis odio amet tristique vel. Felis
              etiam et nisi venenatis praesent phasellus. Suspendisse nullam
              nunc non sed scelerisque velit egestas aenean morbi.`
                : currentTab == 2
                ? `Additional Information Lorem ipsum dolor sit amet consectetur. Blandit suspendisse
              ultrices gravida amet ipsum. Arcu dictum integer lacinia integer.
              Arcu nunc sit molestie sed senectus. Egestas tellus malesuada diam
              nulla pulvinar risus. Iaculis habitasse arcu non quis pellentesque
              purus. Quam turpis eleifend facilisi vel pellentesque. Pulvinar
              facilisi sit magna arcu venenatis odio amet tristique vel. Felis
              etiam et nisi venenatis praesent phasellus. Suspendisse nullam
              nunc non sed scelerisque velit egestas aenean morbi.`
                : currentTab == 3
                ? `Review Lorem ipsum dolor sit amet consectetur. Blandit suspendisse
              ultrices gravida amet ipsum. Arcu dictum integer lacinia integer.
              Arcu nunc sit molestie sed senectus. Egestas tellus malesuada diam
              nulla pulvinar risus. Iaculis habitasse arcu non quis pellentesque
              purus. Quam turpis eleifend facilisi vel pellentesque. Pulvinar
              facilisi sit magna arcu venenatis odio amet tristique vel. Felis
              etiam et nisi venenatis praesent phasellus. Suspendisse nullam
              nunc non sed scelerisque velit egestas aenean morbi.`
                : ""}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

ShopItem.Layout = Layout2;
