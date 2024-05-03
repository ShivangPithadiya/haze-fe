import React, { useEffect, useRef, useContext } from "react";
import { SketchPicker } from "react-color";
import ThemeContext from "../../../contexts/ThemeContext";

const SwitchViewArrows = () => {
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
                    data-element="SwitchViewArrowsColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "SwitchViewArrowsColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.SwitchViewArrows?.SwitchViewArrowsColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "SwitchViewArrowsColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
            className="c1"
              color={{ hex: customizerData.SwitchViewArrows.SwitchViewArrowsColor }}
              onChange={(color) => handleColorChange(color, "SwitchViewArrowsColor")}
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
                                  change: "SwitchViewArrowsColor"
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

export default SwitchViewArrows;