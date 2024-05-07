import React, { useState, useEffect, useContext } from "react";
const CustomizerTitle = ({ layerData }) => {
  const  customizerDatas  = JSON.parse(localStorage.getItem("SelectedCustomizerData"));
  const customizerData = customizerDatas;
  const [isMobile, setIsMobile] = useState(false);
  const [customizerTitleStyle, setCustomizerTitleStyle] = useState({});
  useEffect(() => {
    setCustomizerTitleStyle({
      backgroundColor:
        customizerData?.CustomizerTitle?.CustomizerTitleBackgroundColor,
      fontFamily:
        customizerData?.CustomizerTitle?.CustomizerTitleFontFamily || "Arial",
      fontSize: isMobile
        ? customizerData?.CustomizerTitle?.CustomizerTitleFontSizeMobile
        : customizerData?.CustomizerTitle?.CustomizerTitleFontSize,
      color: isMobile
        ? customizerData?.CustomizerTitle?.CustomizerTitleFontColorMobile
        : customizerData?.CustomizerTitle?.CustomizerTitleFontColor,
      borderBottom:
        customizerData?.CustomizerTitle?.CustomizerTitleDividerThickness +
        " solid " +
        customizerData?.CustomizerTitle?.CustomizerTitleDividerColor,
    });
  }, [customizerData, isMobile]);
  return (
    <>
      <div
        className="products_wrapper_tile caption-top  col_padding"
        style={customizerTitleStyle}
      >
        {layerData?.productName}
      </div>
    </>
  );
};

export default CustomizerTitle;
