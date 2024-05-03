import React, { useEffect, useRef, useContext } from "react";
import { SketchPicker } from "react-color";
import ThemeContext from "../../../contexts/ThemeContext";


const AddToCart = () => {
  const {
    customizerData,
    fontList,
    showPicker,
    showElement,
    handleColorChange,
    handleInputChange,
    handleColorPickerClick,
    handlePickerClose,
  } = useContext(ThemeContext);

  const colorPickerRef = useRef();
    const handelchange = (
    { hex,change }) => {
     handleColorChange(
       { hex },
       change
       );
       handlePickerClose();

  }

  useEffect(() => {
    document.addEventListener("click", handlePickerClose);
    return () => {
      document.removeEventListener("click", handlePickerClose);
    };
  }, []);
  return (
    <>
      <div className="right_wrapper_title">Add To Cart & Buttons</div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Border colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <span
                    data-element="AddToCartBorderColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "AddToCartBorderColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor: customizerData?.AddToCart?.AddToCartBorderColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "AddToCartBorderColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
            className="c1"
              color={{
                hex: customizerData?.AddToCart?.AddToCartBorderColor || "#ffff",
              }} 
              onChange={(color) =>
                handleColorChange(color, "AddToCartBorderColor")
              }
            />
              <div className="buttonContainer me-3">
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={handlePickerClose}
                            >
                              OK
                            </button>
                            <button
                              type="button"
                             //set white color

                              onClick={() =>
                                handelchange({ 
                                  hex: "#ffffff",
                                  change: "AddToCartBorderColor"

                                }
                              )
                            }
                            
                              className="btn btn-outline-dark"
                            >
                              Cancle
                            </button>
                          </div>
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Border thickness</div>
          <div className="right_property_value">
            <input
              type="text"
              className="right_wrapper_input"
              value={customizerData?.AddToCart?.AddToCartBorderThickness}
              onChange={(e) =>
                handleInputChange({
                  name: "AddToCartBorderThickness",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Rounding</div>
          <div className="right_property_value">
            <input
              type="text"
              className="right_wrapper_input"
              value={customizerData?.AddToCart?.AddToCartBorderRounding}
              onChange={(e) =>
                handleInputChange({
                  name: "AddToCartBorderRounding",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_property_name">Font family</div>
        <div className="custom-select">
          <select
            className="fontSelect"
            name="AddToCartFontFamily"
            value={customizerData?.AddToCart?.AddToCartFontFamily || ""}
            onChange={(e) =>
              handleInputChange({
                name: "AddToCartFontFamily",
                value: e.target.value,
              })
            }
          >
            <option value="">Select a Font</option>
            {fontList.map((font, index) => (
              <option key={index} value={font}>
                {font}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Font colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <span
                    data-element="AddToCartFontColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "AddToCartFontColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor: customizerData?.AddToCart?.AddToCartFontColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "AddToCartFontColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
            className="c1"
              color={{
                hex: customizerData?.AddToCart?.AddToCartFontColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "AddToCartFontColor")
              }
            />
            <div className="buttonContainer me-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handlePickerClose}
              >
                OK
              </button>
              <button
                type="button"
                //set white color
                onClick={() =>
                  handelchange({
                    hex: "#ffffff",
                    change: "AddToCartFontColor",
                  })
                }
                className="btn btn-outline-dark"
              >
                Cancle
              </button>
              </div>
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Background colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <span
                    data-element="AddToCartBackgroundColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "AddToCartBackgroundColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.AddToCart?.AddToCartBackgroundColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "AddToCartBackgroundColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
            className="c1"
              color={{
                hex: customizerData?.AddToCart?.AddToCartBackgroundColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "AddToCartBackgroundColor")
              }
            />
            <div className="buttonContainer me-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handlePickerClose}
              >
                OK
              </button>
              <button
                type="button"
                //set white color
                onClick={() =>
                  handelchange({
                    hex: "#ffffff",
                    change: "AddToCartBackgroundColor",
                  })
                }
                className="btn btn-outline-dark"
              >
                Cancle
              </button>
              </div>
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Hover Background colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <span
                    data-element="AddToCartHoverBackgroundColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "AddToCartHoverBackgroundColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.AddToCart?.AddToCartHoverBackgroundColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "AddToCartHoverBackgroundColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
              color={{
                hex: customizerData?.AddToCart?.AddToCartHoverBackgroundColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "AddToCartHoverBackgroundColor")
              }
            />
            <div className="buttonContainer me-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handlePickerClose}
              >
                OK
              </button>
              <button
                type="button"
                //set white color
                onClick={() =>
                  handelchange({
                    hex: "#ffffff",
                    change: "AddToCartHoverBackgroundColor",
                  })
                }
                className="btn btn-outline-dark"
              >
                Cancle
              </button>
              </div>
          </div>
        )}
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Font size</div>
          <div className="right_property_value">
            <input
              type="text"
              className="right_wrapper_input"
              value={customizerData?.AddToCart?.AddToCartFontSize}
              onChange={(e) =>
                handleInputChange({
                  name: "AddToCartFontSize",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
