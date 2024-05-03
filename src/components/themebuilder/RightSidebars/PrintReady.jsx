import React, { useState, useEffect, useRef, useContext } from "react";
import { SketchPicker } from "react-color";
import ThemeContext from "../../../contexts/ThemeContext";

const PrintReady = () => {
  /*  const [customizerData, setCustomizerData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("customizerData"));
    return (
      storedData || {
        PrintReady: {
          PrintReadyEditionColor: "#ffff",
          PrintReadyEditionIconColor: "#ffff",
          PrintReadyEditionDPIIndicatorTextColor: "#ffff",
          DPILowQualityTextColor: "#ffff",
          LowQualityMessageBackgroundColor: "#ffff",
          LowQualityMessageTextColor:"#ffff",
          DPIHighQualityColor:"#ffff"
        },
      }
    );
  }); */
  const {
    customizerData,
    showPicker,
    showElement,
    handleColorChange,
    handleColorPickerClick,
    handlePickerClose,
  } = useContext(ThemeContext);

  const colorPickerRef = useRef();

  const handelchange = ({ hex, change }) => {
    handleColorChange({ hex }, change);
    handlePickerClose();
  };

  return (
    <>
      <div className="right_wrapper_title">Print Ready</div>

      {/* Edition colour */}
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Edition colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div
                  className="clr-field"
                 
                >
                  <span
                    data-element="PrintReadyEditionColor"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "PrintReadyEditionColor"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.PrintReady
                          ?.PrintReadyEditionColor,
                    }}
                  ></span>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "PrintReadyEditionColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
              className="c1"
              color={{
                hex: customizerData?.PrintReady?.PrintReadyEditionColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "PrintReadyEditionColor")
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
                                  change:"PrintReadyEditionColor"
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

      {/* Edition icon colour */}
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Edition icon colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div
                  className="clr-field"
                 
                >
                  <span
                    data-element="PrintReadyEditionIconColor"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "PrintReadyEditionIconColor"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.PrintReady?.PrintReadyEditionIconColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
 <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "PrintReadyEditionIconColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
              className="c1"
              color={{
                hex: customizerData?.PrintReady?.PrintReadyEditionIconColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "PrintReadyEditionIconColor")
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
                                  change:"PrintReadyEditionIconColor"
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
      {/* DPI indicator text colour */}
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">DPI indicator text colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div
                  className="clr-field"
                 
                >
                  <span
                    data-element="PrintReadyEditionDPIIndicatorTextColor"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "PrintReadyEditionDPIIndicatorTextColor"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.PrintReady
                          ?.PrintReadyEditionDPIIndicatorTextColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "PrintReadyEditionDPIIndicatorTextColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
              className="c1"
              color={{
                hex: customizerData?.PrintReady
                  ?.PrintReadyEditionDPIIndicatorTextColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "PrintReadyEditionDPIIndicatorTextColor")
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
                                  change:"PrintReadyEditionDPIIndicatorTextColor"
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

      {/* Repeat similar blocks for other properties */}
      {/* DPI low quality colour */}
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">DPI low quality colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div
                  className="clr-field"
                 
                >
                  <span
                    data-element="DPILowQualityTextColor"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "DPILowQualityTextColor"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.PrintReady?.DPILowQualityTextColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "DPILowQualityTextColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
              className="c1"
              color={{
                hex: customizerData?.PrintReady
                  ?.DPILowQualityTextColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "DPILowQualityTextColor")
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
                                  change:"DPILowQualityTextColor"
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

      {/* Low quality message background colour */}
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Low quality message background colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div
                  className="clr-field"
                 
                >
                  <span
                    data-element="LowQualityMessageBackgroundColor"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "LowQualityMessageBackgroundColor"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.PrintReady
                          ?.LowQualityMessageBackgroundColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "LowQualityMessageBackgroundColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
              className="c1"
              color={{
                hex: customizerData?.PrintReady
                  ?.LowQualityMessageBackgroundColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "LowQualityMessageBackgroundColor")
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
                                  change:"LowQualityMessageBackgroundColor"
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
      {/* Low quality message text colour */}
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Low quality message text colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div
                  className="clr-field"
                 
                >
                  <span
                    data-element="LowQualityMessageTextColor"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "LowQualityMessageTextColor"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.PrintReady
                          ?.LowQualityMessageTextColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "LowQualityMessageTextColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
              className="c1"
              color={{
                hex: customizerData?.PrintReady
                  ?.LowQualityMessageTextColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "LowQualityMessageTextColor")
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
                                  change:"LowQualityMessageTextColor"
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
      {/* DPI high quality colour */}
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">DPI high quality colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div
                  className="clr-field"
                 
                >
                  <span
                    data-element="DPIHighQualityColor"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "DPIHighQualityColor"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.PrintReady?.DPIHighQualityColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "DPIHighQualityColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
              className="c1"
              color={{
                hex: customizerData?.PrintReady?.DPIHighQualityColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "DPIHighQualityColor")
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
                                  change:"DPIHighQualityColor"
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

export default PrintReady;
