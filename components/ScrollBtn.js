import React, { useState, useEffect } from "react";
import { VscArrowSmallUp } from "react-icons/vsc";
import styled from "styled-components";

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 80%;
  bottom: 40px;
  height: 20px;
  z-index: 1;
  cursor: pointer;
`;

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(function onFirstMount() {
    function onScroll() {
      console.log("scroll!");
    }

    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <div className="btn-container">
      <VscArrowSmallUp
        color="white"
        size={"10px"}
        onClick={scrollToTop}
        style={{
          display: visible ? "inline" : "none",
          // backgroundColor: "#476b7d",
          width: "40px",
          height: "40px",
          borderRadius: "5px",
        }}
      />
    </div>
  );
};

export default ScrollButton;
