import React, { useState, useEffect, useContext } from "react";
import ThemeContext from "../../../../contexts/ThemeContext";

const PreviousArrow = (props) => {
  const { className, style, onClick } = props;
  const { customizerData } = useContext(ThemeContext);
  const [customizerSwitchViewArrows, setCustomizerSwitchViewArrows] =
    useState();
  useEffect(() => {
    setCustomizerSwitchViewArrows(
      customizerData?.SwitchViewArrows?.SwitchViewArrowsColor
    );
  }, [customizerData]);
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <svg
        width="42"
        height="24"
        viewBox="0 0 42 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M41.0607 13.0607C41.6464 12.4749 41.6464 11.5251 41.0607 10.9393L31.5147 1.3934C30.9289 0.807611 29.9792 0.807611 29.3934 1.3934C28.8076 1.97919 28.8076 2.92893 29.3934 3.51472L37.8787 12L29.3934 20.4853C28.8076 21.0711 28.8076 22.0208 29.3934 22.6066C29.9792 23.1924 30.9289 23.1924 31.5147 22.6066L41.0607 13.0607ZM0 13.5H40V10.5H0V13.5Z"
          fill={customizerSwitchViewArrows}
        />
      </svg>
    </div>
  );
};

export default PreviousArrow;
