import React, { useEffect, useRef, useContext } from "react";
import { SketchPicker } from "react-color";
import ThemeContext from "../../../contexts/ThemeContext";

const Customizer = () => {
  const {
    customizerData,
    showPicker,
    showElement,
    handleColorChange,
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
  return (
    <>
      <div className="right_wrapper_title">Customizer</div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Loading icon colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <span
                    data-element="CustomizerLoadingIconColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "CustomizerLoadingIconColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.Customizer?.CustomizerLoadingIconColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "CustomizerLoadingIconColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
            className="c1"
              color={{
                hex: customizerData?.Customizer?.CustomizerLoadingIconColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "CustomizerLoadingIconColor")
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
                                      change: "CustomizerLoadingIconColor",
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
                    data-element="CustomizerBackgroundColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "CustomizerBackgroundColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.Customizer?.CustomizerBackgroundColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "CustomizerBackgroundColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
            className="c1"
              color={{
                hex: customizerData?.Customizer?.CustomizerBackgroundColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "CustomizerBackgroundColor")
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
                onClick={() =>
                  handelchange(
                    {
                      hex: "#ffffff",
                      change: "CustomizerBackgroundColor",
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

export default Customizer;
