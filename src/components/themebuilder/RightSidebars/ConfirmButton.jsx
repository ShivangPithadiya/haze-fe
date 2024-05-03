import React, { useEffect, useRef, useContext } from "react";
import { SketchPicker } from "react-color";
import ThemeContext from "../../../contexts/ThemeContext";

const ConfirmButton = () => {
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
      <div className="right_wrapper_title">Confirm Button (mobile)</div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Font colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <span
                    data-element="ConfirmButtonMobileFontColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "ConfirmButtonMobileFontColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.ConfirmButtonMobile
                          ?.ConfirmButtonMobileFontColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "ConfirmButtonMobileFontColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
            className="c1"
              color={{
                hex: customizerData?.ConfirmButtonMobile
                  ?.ConfirmButtonMobileFontColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "ConfirmButtonMobileFontColor")
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
                                handelchange(
                                  {
                                    hex: "#ffffff",
                                    change: "ConfirmButtonMobileFontColor",
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
          <div className="right_property_name">Background colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <span
                    data-element="ConfirmButtonMobileBackgroundColor"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "ConfirmButtonMobileBackgroundColor"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.ConfirmButtonMobile
                          ?.ConfirmButtonMobileBackgroundColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "ConfirmButtonMobileBackgroundColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
            className="c1"
              color={{
                hex: customizerData?.ConfirmButtonMobile
                  ?.ConfirmButtonMobileBackgroundColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "ConfirmButtonMobileBackgroundColor")
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
                                  handelchange(
                                    {
                                      hex: "#ffffff",
                                      change: "ConfirmButtonMobileBackgroundColor",
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
    </>
  );
};

export default ConfirmButton;
