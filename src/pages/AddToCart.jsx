import React, { useState, useEffect, useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddToCart = () => {
  const { customizerData } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);
  const [customizerAddToCartBtn, setCustomizerAddToCartBtn] = useState({});

  const navigate = useNavigate();

   const handleAddToCart = async () => {
    // get domain and varian id from local storage

   
   const variantId = localStorage.getItem("productVariantid");
    const shopDomain = localStorage.getItem("shopifyStoredomain");
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/shopify/cart`, 
      {
        Details: {
          variant_id: variantId,
          shopDomain: shopDomain
         }
      });
        window.location.href = response.data;
        window.open(`${response.data}`, "_blank");

      console.log("response", response);

  

      
    } catch (error) {
      console.error('Error adding to cart', error);
    }
  };
  useEffect(() => {
    setCustomizerAddToCartBtn({
      border:
        customizerData?.AddToCart?.AddToCartBorderThickness +
        " solid " +
        customizerData?.AddToCart?.AddToCartBorderColor,
      borderRadius: customizerData?.AddToCart?.AddToCartBorderRounding,
      fontFamily: customizerData?.AddToCart?.AddToCartFontFamily,
      color: customizerData?.AddToCart?.AddToCartFontColor,
      backgroundColor: isHovered
        ? customizerData?.AddToCart?.AddToCartHoverBackgroundColor
        : customizerData?.AddToCart?.AddToCartBackgroundColor,
      fontSize: customizerData?.AddToCart?.AddToCartFontSize,
    });
  }, [customizerData]);
  return (
    <>
      <div
        class="products_add_button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button class="add_button" style={customizerAddToCartBtn} onClick={
        handleAddToCart
        }>
          Add to cart
        </button>
      </div>
    </>
  );
};

export default AddToCart;
