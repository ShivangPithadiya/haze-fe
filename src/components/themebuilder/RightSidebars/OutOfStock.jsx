import React, { useEffect, useRef, useContext } from "react";
import { SketchPicker } from "react-color";
import ThemeContext from "../../../contexts/ThemeContext";

const OutOfStock = () => {
  const {
    customizerData,
    showPicker,
    showElement,
    handleColorChange,
    handleInputChange,
    handleColorPickerClick,
    handlePickerClose,
  } = useContext(ThemeContext);

  const colorPickerRef = useRef();
  useEffect(() => {
    document.addEventListener("click", handlePickerClose);
    return () => {
      document.removeEventListener("click", handlePickerClose);
    };
  }, []);
    const handelchange = (
    { hex,change }) => {
     handleColorChange(
       { hex },
       change
       );
       handlePickerClose();

  }
  return (
    <>
      <div className="right_wrapper_title">Out of Stock</div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Badge icon colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <span
                    data-element="OutOfStockBadgeIconColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "OutOfStockBadgeIconColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.OutOfStock?.OutOfStockBadgeIconColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "OutOfStockBadgeIconColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
              className="c1"
              color={{
                hex: customizerData?.OutOfStock?.OutOfStockBadgeIconColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "OutOfStockBadgeIconColor")
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
                    hex: "#000000",
                    change: "OutOfStockBadgeIconColor",
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
          <div className="right_property_name">Badge background colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <span
                    data-element="OutOfStockBadgeBackgroundColor"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "OutOfStockBadgeBackgroundColor"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.OutOfStock
                          ?.OutOfStockBadgeBackgroundColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "OutOfStockBadgeBackgroundColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
              className="c1"
              color={{
                hex: customizerData?.OutOfStock?.OutOfStockBadgeBackgroundColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "OutOfStockBadgeBackgroundColor")
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
                    hex: "#000000",
                    change: "OutOfStockBadgeBackgroundColor",
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
          <div className="right_property_name">Badge border width</div>
          <div className="right_property_value">
            <input
              type="text"
              className="right_wrapper_input"
              value={customizerData?.OutOfStock?.OutOfStockBadgeBorderWidth}
              onChange={(e) =>
                handleInputChange({
                  name: "OutOfStockBadgeBorderWidth",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Badge border colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <span
                    data-element="OutOfStockBadgeBorderColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "OutOfStockBadgeBorderColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.OutOfStock?.OutOfStockBadgeBorderColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "OutOfStockBadgeBorderColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
              className="c1"
              color={{
                hex: customizerData.OutOfStock.OutOfStockBadgeBorderColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "OutOfStockBadgeBorderColor")
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
                    hex: "#000000",
                    change: "OutOfStockBadgeBorderColor",
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
          <div className="right_property_name">Banner text colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <span
                    data-element="OutOfStockBannerTextColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "OutOfStockBannerTextColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.OutOfStock?.OutOfStockBannerTextColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "OutOfStockBannerTextColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
              className="c1"
              color={{
                hex: customizerData?.OutOfStock?.OutOfStockBannerTextColor,
              }}

              onChange={(color) =>
                handleColorChange(color, "OutOfStockBannerTextColor")
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
                    hex: "#000000",
                    change: "OutOfStockBannerTextColor",
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
          <div className="right_property_name">Banner background colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <span
                    data-element="OutOfStockBannerBackgroundColor"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "OutOfStockBannerBackgroundColor"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.OutOfStock
                          ?.OutOfStockBannerBackgroundColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "OutOfStockBannerBackgroundColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
              className="c1"
              color={{
                hex: customizerData?.OutOfStock
                  ?.OutOfStockBannerBackgroundColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "OutOfStockBannerBackgroundColor")
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
                    hex: "#000000",
                    change: "OutOfStockBannerBackgroundColor",
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
    </>
  );
};

export default OutOfStock;
