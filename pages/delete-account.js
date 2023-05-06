import React from "react";
import Layout2 from "../apps/core/Layout2";
import Layout3 from "../apps/core/Layout3";

export default function DeleteAccount() {
  return (
    <main className="main">
      <div className="delete__account__container container">
        <div className="delete__account__heading">
          <p className="delete__account__title">Delete Account</p>
        </div>

        <div className="delete__account__text__container">
          <p className="delete__account__text__bold">Please read carefully</p>
          <p className="delete__account__text">
            You are about to ask us to permanently close your account and delete
            your data.
          </p>
          <p className="delete__account__text">
            Once your account is closed, all products and services that you
            access through your account will no longer be available.
          </p>
          <p className="delete__account__text">
            Please take into consideration that your account will still be
            active while our customer relations teams are processing your
            request. This may take up to 30 days from the date of submission of
            your request.
          </p>
          <p className="delete__account__text">
            If you comply with this request, you will not be able to access the
            products and services associated with your closed account.
          </p>
          <p className="delete__account__text">
            Please select the main reason that is leading you to close your
            Ecocity account (non-mandatory)
          </p>

          <select
            name="cars"
            id="cars"
            className="delete__account__reason__option"
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>

          <div className="delete__account__confirm__option">
            <input type="checkbox" className="delete__account__checkbox" />
            <p className="delete__account__confirm__option__text">
              Yes, I wish to definitely close my Ecocity account and delete all
              my personal data
            </p>
          </div>

          <div className="delete__account__btn__container">
            <button className="delete__account__btn">
              <p className="delete__account__btn__text">Delete Account</p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

// DeleteAccount.Layout = Layout3;
