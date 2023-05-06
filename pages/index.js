import { useEffect } from "react";
import Head from "next/head";
import Masonry from "react-masonry-component";
// import { testimonial } from "../app/common/data/AppCreative";
import ScrollBtn from "../components/ScrollBtn";

const masonryOptions = {
  originTop: true,
};

export default function Home() {
  const testimonial = {
    title: "What our clients say about us",
    slogan: "Some inspirational feedback from our customers on twitter",
    reviews: [
      {
        id: 1,
        description:
          "I can't Believe I got Seen and Scholarshipped after 4years in Africa to play Second Division in the United States all by Uploading my videos to the SportsReels Platform",
        userType: "Athlete",
        name: "Ibrahim Taylor Aderogbega",
        sport: "Basketball",
        twitterProfile: "https://twitter.com/redqinc",
      },
      {
        id: 2,
        name: "Gavina Mamlee Nana",
        userType: "Athlete",
        sport: "Rugby",
        twitterProfile: "https://twitter.com/redqinc",
        description:
          "It came as a beautiful surprise when I was reached out to and offered a Full time sports contract After consciously building my Athletic Brand Story for just a few months",
      },
      {
        id: 3,
        name: "Lethabo Abebe",
        userType: "Scout",
        sport: "Lawn Tennis",
        twitterProfile: "https://twitter.com/redqinc",
        description:
          "The diverse Nature of SportsReels amongst all gender,Culture and personality and sportsReels stands out as the premier sports tech brand to see and connect with .Elite Athletes who are working Hard to become professional Athletes, I picked my best 5 Athletes doing well in Europe from here.",
      },
      {
        id: 3,
        name: "Chukwueze Micheal Okirikir",
        userType: "Athlete",
        sport: "Soccer",
        twitterProfile: "https://twitter.com/redqinc",
        description:
          "SportsReels Positioned and Prepared me to be a better player Through Scout Analysis and Educational sports Content,Through this platform I have been able to connect with Scouts I will never have met from Around the world",
      },
      {
        id: 3,
        name: "Faye Diallo Diouf",
        userType: "Scout",
        sport: "Cricket",
        twitterProfile: "https://twitter.com/redqinc",
        description:
          "Promotions showed me Serious Top Talents who were ready to take thier career to the next level with proper Contents and Feed to entice the Clubs and myself the Agent without having to start knowing them or searching for them.",
      },
    ],
  };
  const { slogan, title, reviews } = testimonial;

  return (
    <div>
      <Head>
        <title>SportsReels</title>
        <meta name="description" content="All rights reserved @sportsreels" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        {/* <!-- ========================== HOME ======================== --> */}
        <section className="home" id="home">
          <div className="home__container container grid">
            <div className="home__data">
              <div className="home__title__container">
                <h1 className="home__title" style={{ width: "100%" }}>
                  Export solar panel and system supplier
                </h1>
              </div>

              <p className="normal-text-font">
                Lorem ipsum dolor sit amet consectetur. Pellentesque vulputate
                iaculis dictum quis tellus gravida. Risus lacus et massa tempor
                gravida dignissim fusce molestie. Amet dapibus tempor aliquet
                turpis mi phasellus integer vitae. In augue odio ultrices
                interdum arcu nunc sagittis.
              </p>

              <div className="home__button__container">
                <a
                  href="https://sports-reels-app.vercel.app/discover"
                  target="_blank"
                  className="button button--flex"
                >
                  Get Started{" "}
                </a>
                <a
                  href="https://sports-reels-app.vercel.app/discover"
                  target="_blank"
                  className="button2 button--flex"
                >
                  Download app from Playstore{" "}
                  <i className="ri-arrow-right-down-line button__icon"></i>
                </a>
              </div>
            </div>

            <div className="home__img2">
              <img src="../img/image1.png" alt="" className="" />
            </div>
          </div>
        </section>

        <section className="application__process">
          <div className="application__process__container container">
            {/* <div className="application__process__intro__container" style={{ width: "70%" }}> */}
            <div className="application__process__intro__container">
              <p className="section__heading">APPLICATION PROCESS</p>
              <p className="section__title">
                A leading supplier of Solar panels and system for residents,
                <br />
                commercial and industrial use.
              </p>
            </div>

            <div className="application__process__steps__container grid">
              <div className="application__process__step">
                <button className="button">Step 1</button>

                <p className="application__process__step__description">
                  Fill application form with appropriate and correct details.
                </p>
              </div>
              <div className="application__process__step">
                <button className="button">Step 2</button>

                <p className="application__process__step__description">
                  Fill application form with appropriate and correct details.
                </p>
              </div>
              <div className="application__process__step">
                <button className="button">Step 3</button>

                <p className="application__process__step__description">
                  Fill application form with appropriate and correct details.
                </p>
              </div>
            </div>

            <div className="application__process__apply__btn">
              <button className="button">Apply Now</button>
            </div>
          </div>
        </section>

        <section className="sponsors">
          <div className="sponsors__list__container container grid">
            <img src="../img/amazon.png" alt="amazon" className="" />
            <img src="../img/asana.png" alt="asana" className="" />
            <img src="../img/codecademy.png" alt="codecademy" className="" />
            <img src="../img/fifa.png" alt="fifa" className="" />
            <img src="../img/google.png" alt="google" className="" />
            <img src="../img/twitter.png" alt="twitter" className="" />
          </div>
        </section>

        <section className="products">
          <div className="products__container container">
            <div className="products__intro__container">
              <p className="section__heading">
                energizing society with sustainable energy
              </p>
              <p className="section__title">
                A leading supplier of Solar panels and system for residents,
                <br />
                commercial and industrial use.
              </p>
            </div>

            <div className="products__list__container grid">
              <div className="products__item">
                <img
                  src="../img/product-image.png"
                  alt="twitter"
                  className=""
                />

                <div className="product__info__container">
                  <p className="product__title">Product Title</p>

                  <p className="product__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    purus tellus arcu sit nibh consectetur.
                  </p>

                  <p className="product__price">Price: N 35,000</p>
                </div>
              </div>
              <div className="products__item">
                <img
                  src="../img/product-image.png"
                  alt="twitter"
                  className=""
                />

                <div className="product__info__container">
                  <p className="product__title">Product Title</p>

                  <p className="product__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    purus tellus arcu sit nibh consectetur.
                  </p>

                  <p className="product__price">Price: N 35,000</p>
                </div>
              </div>
              <div className="products__item">
                <img
                  src="../img/product-image.png"
                  alt="twitter"
                  className=""
                />

                <div className="product__info__container">
                  <p className="product__title">Product Title</p>

                  <p className="product__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    purus tellus arcu sit nibh consectetur.
                  </p>

                  <p className="product__price">Price: N 35,000</p>
                </div>
              </div>
            </div>

            <div className="products__shop__btn">
              <button className="button">Start Shopping</button>
            </div>
          </div>
        </section>

        <section className="our__values">
          <div className="our__values__container container">
            <div className="our__values__intro__container">
              <p className="section__heading">
                Sustainable, Reliable and Affordable services
              </p>
              <p className="section__title__2">
                Lorem ipsum dolor sit amet consectetur. Enim augue faucibus sit
                ac.
              </p>
            </div>

            <div className="our__values__list__container grid">
              <div className="our__value__item">
                <img src="../img/savings-pig.png" alt="twitter" className="" />

                <p className="our__value__item_title">Save your Money</p>
                <p className="our__value__item_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  purus tellus arcu sit nibh consectetur. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. At purus tellus arcu sit
                  nibh consectetur.
                </p>
              </div>
              <div className="our__value__item">
                <img src="../img/consultation.png" alt="twitter" className="" />

                <p className="our__value__item_title">Save your Money</p>
                <p className="our__value__item_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  purus tellus arcu sit nibh consectetur. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. At purus tellus arcu sit
                  nibh consectetur.
                </p>
              </div>
              <div className="our__value__item">
                <img src="../img/solar-panel.png" alt="twitter" className="" />

                <p className="our__value__item_title">Save your Money</p>
                <p className="our__value__item_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  purus tellus arcu sit nibh consectetur. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. At purus tellus arcu sit
                  nibh consectetur.
                </p>
              </div>
              <div className="our__value__item">
                <img src="../img/solar-panel.png" alt="twitter" className="" />

                <p className="our__value__item_title">Save your Money</p>
                <p className="our__value__item_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  purus tellus arcu sit nibh consectetur. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. At purus tellus arcu sit
                  nibh consectetur.
                </p>
              </div>
              <div className="our__value__item">
                <img src="../img/consultation.png" alt="twitter" className="" />

                <p className="our__value__item_title">Save your Money</p>
                <p className="our__value__item_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  purus tellus arcu sit nibh consectetur. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. At purus tellus arcu sit
                  nibh consectetur.
                </p>
              </div>
              <div className="our__value__item">
                <img src="../img/savings-pig.png" alt="twitter" className="" />

                <p className="our__value__item_title">Save your Money</p>
                <p className="our__value__item_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  purus tellus arcu sit nibh consectetur. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. At purus tellus arcu sit
                  nibh consectetur.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="testimonials__container container">
            <div className="testimonials__intro__container">
              <p className="section__heading">What our customers are saying</p>
              <p className="section__title__2">
                Lorem ipsum dolor sit amet consectetur. Malesuada amet ac
                habitasse
              </p>
            </div>

            <div className="testimonial__container">
              <div className="testimonial__client_info">
                <img src="../img/client-1.png" alt="twitter" className="" />
                <p className="testimonial__client_name">Kenji Keston</p>
                <p className="testimonial__client_role">UI/UX Designer</p>
              </div>

              <div className="testimonial__client__text_container container">
                <p className="testimonial__client_text">
                  Lorem ipsum dolor sit amet consectetur. A elementum
                  pellentesque erat lacinia leo vulputate. Felis velit elementum
                  facilisis nulla turpis dui morbi. Tellus blandit ornare in
                  nisl et. Donec viverra amet faucibus commodo purus hac odio.
                  Lorem ipsum dolor sit amet consectetur. A elementum
                  pellentesque erat lacinia leo vulputate. Felis velit elementum
                  facilisis nulla turpis dui morbi. Tellus blandit ornare in
                  nisl et. Donec viverra amet faucibus commodo purus hac odio.
                </p>
              </div>
            </div>

            <div className="testimonial__client__list__container container grid">
              <img src="../img/client-2.png" alt="twitter" className="" />
              <img src="../img/client-3.png" alt="twitter" className="" />
              <img src="../img/client-1.png" alt="twitter" className="" />
              <img src="../img/client-4.png" alt="twitter" className="" />
              <img src="../img/client-5.png" alt="twitter" className="" />
            </div>
          </div>
        </section>

        <ScrollBtn />
      </main>
    </div>
  );
}
