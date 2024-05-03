import React, { useEffect, useRef, useContext } from "react";
import { SketchPicker } from "react-color";
import ThemeContext from "../../../contexts/ThemeContext";

const LayerPanelList = () => {
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
      <div className="right_wrapper_title">Layers Panel</div>

      <div className="right_wrapper_row">
        <div className="right_property_name">Panel Position</div>
        <div className="custom-select">
          <select
            className="fontSelect"
            name="LayerPanelPosition"
            value={customizerData?.LayersPanel?.LayersPanelPosition}
            onChange={(e) =>
              handleInputChange({
                name: "LayersPanelPosition",
                value: e.target.value,
              })
            }
          >
            <option value="">Select Layer Position</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Background colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">                  
                  <span
                    data-element="LayersPanelBackgroundColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "LayersPanelBackgroundColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.LayersPanel?.LayersPanelBackgroundColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "LayersPanelBackgroundColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
            className="c1"
              color={{
                hex: customizerData?.LayersPanel?.LayersPanelBackgroundColor,
              }}
              onChange={(color) => handleColorChange(color, "LayersPanelBackgroundColor")}
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
                                  change:"LayersPanelBackgroundColor"
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
          <div className="right_property_name">Border colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">                  
                  <span
                    data-element="LayersPanelBorderColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "LayersPanelBorderColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.LayersPanel?.LayersPanelBorderColor,
                    }}
                    value={customizerData?.LayersPanel?.LayersPanelBorderColor}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "LayersPanelBorderColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
            className="c1"
              color={{ hex: customizerData.LayersPanel.LayersPanelBorderColor }}
              onChange={(color) => handleColorChange(color, "LayersPanelBorderColor")}
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
                                  change:"LayersPanelBorderColor"
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
          <div className="right_property_name">Border thickness</div>
          <div className="right_property_value">
            <input
              type="text"
              className="right_wrapper_input"
              value={customizerData?.LayersPanel?.LayersPanelBorderThickness}
              onChange={(e) =>
                handleInputChange({
                  name: "LayersPanelBorderThickness",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Error colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <span
                    data-element="LayersPanelErrorColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "LayersPanelErrorColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.LayersPanel?.LayersPanelErrorColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "LayersPanelErrorColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
            className="c1"
              color={{ hex: customizerData.LayersPanel.LayersPanelErrorColor }}
              onChange={(color) =>
                handleColorChange(color, "LayersPanelErrorColor")
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
                                  change:"LayersPanelErrorColor"
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

export default LayerPanelList;