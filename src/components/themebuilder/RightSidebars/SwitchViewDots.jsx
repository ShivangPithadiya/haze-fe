import React, { useEffect, useRef, useContext } from "react";
import { SketchPicker } from "react-color";
import ThemeContext from "../../../contexts/ThemeContext";

const SwitchViewDots = () => {
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
      <div className="right_wrapper_title">Switch View Arrows</div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                <span
                    data-element="SwitchViewDotsColour"
                    onClick={(e) =>
                      handleColorPickerClick(e, "SwitchViewDotsColour")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.SwitchViewDots?.SwitchViewDotsColour,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "SwitchViewDotsColour" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
            className="c1"
              color={{ hex: customizerData.SwitchViewDots.SwitchViewDotsColour }}
              onChange={(color) => handleColorChange(color, "SwitchViewDotsColour")}
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
                                  change: "SwitchViewDotsColour"
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
          <div className="right_property_name">Select colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                <span
                    data-element="SwitchViewDotsSelectColour"
                    onClick={(e) =>
                      handleColorPickerClick(e, "SwitchViewDotsSelectColour")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.SwitchViewDots?.SwitchViewDotsSelectColour,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "SwitchViewDotsSelectColour" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
            className="c1"
              color={{
                hex: customizerData?.SwitchViewDots?.SwitchViewDotsSelectColour,
              }}
              onChange={(color) =>
                handleColorChange(color, "SwitchViewDotsSelectColour")
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
                                    change: "SwitchViewDotsSelectColour"
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

export default SwitchViewDots;