import React from "react";
import Layout2 from "../apps/core/Layout2";
import Layout3 from "../apps/core/Layout3";

export default function Account() {
  return (
    <main className="main">
      <div className="account__container container grid">
        <div className="account__detail__container__heading">
          <p className="account__detail__container__title">My Account</p>
        </div>

        <div className="account__detail__container">
          <div className="account__detail__container__heading">
            <p className="account__detail__container__title">DETAILS</p>
          </div>

          <p className="account__detail__container__text">Keston Timson</p>
          <p className="account__detail__container__text">
            kestontimson23@yahoomail.com
          </p>
        </div>

        <div className="account__address__container">
          <div className="account__detail__container__heading">
            <p className="account__detail__container__title">ADDRESS LOG</p>
            <img
              src="../img/edit-icon.png"
              alt="icon-instagram"
              style={{ height: "15px", cursor: "pointer" }}
            />
          </div>

          <p className="account__detail__container__text">
            Your delivery address:
          </p>
          <p className="account__detail__container__text">Keston Timson</p>
          <p className="account__detail__container__text">
            Trademore Estate ABUJA AIRPORT ROAD- TRADEMORE, Federal Capital
            Territory
          </p>
          <p className="account__detail__container__text">+2349176342190</p>
        </div>
      </div>
    </main>
  );
}

// export default Account
