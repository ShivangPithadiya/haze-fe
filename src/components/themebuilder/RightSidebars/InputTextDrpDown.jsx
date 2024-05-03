import React, { useEffect, useRef, useContext } from "react";
import { SketchPicker } from "react-color";
import ThemeContext from "../../../contexts/ThemeContext";

const InputTextDrpDown = () => {
 /* const [customizerData, setCustomizerData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("customizerData"));
    return (
      storedData || {
        InputTextDropDown: {
          InputTxtBgClr: "#ffff",
          InputTxtHeight: "",
          InputTxtRoundings: "#ffff",
          InputTxtBrdClr: "",
          InputTxtFontFmly: "",
          InputTextFontClr: "",
          InputTextFontSize: "",
          InputTextDrpDownMenuBgClr:"",
          InputTextDrpDownHovOpClr:"",
          InputTextDrpDownSelcOpClr:"",
          InputTextDrpDownMenuFtClr:""
        },
      }
    );
  });*/
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
  console.log(customizerData);
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
      <div className="right_wrapper_title">Text Input & Dropdown</div>
      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Background colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
              <span
                    data-element="TextInputAndDropdownBackgroundColor"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "TextInputAndDropdownBackgroundColor"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.TextInputAndDropdown
                          ?.TextInputAndDropdownBackgroundColor,
                    }}
                  ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "TextInputAndDropdownBackgroundColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
              className="c1"
              color={{
                hex: customizerData?.TextInputAndDropdown
                  ?.TextInputAndDropdownBackgroundColor,
              }}
              onChange={(color) =>
                handleColorChange(color, "TextInputAndDropdownBackgroundColor")
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
                                  change:"TextInputAndDropdownBackgroundColor"
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
          <div className="right_property_name">Height</div>
          <div className="right_property_value">
            <input
              type="text"
              className="right_wrapper_input"
              value={customizerData?.TextInputAndDropdown?.TextInputAndDropdownHeight}
              onChange={(e) =>
                handleInputChange({
                  name: "TextInputAndDropdownHeight",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Roundings</div>
          <div className="right_property_value">
          <input
              type="text"
              className="right_wrapper_input"
              value={customizerData?.TextInputAndDropdown?.TextInputAndDropdownRounding}
              onChange={(e) =>
                handleInputChange({
                  name: "TextInputAndDropdownRounding",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Border colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                <span
                    data-element="TextInputAndDropdownBorderColor"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "TextInputAndDropdownBorderColor"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.TextInputAndDropdown
                          ?.TextInputAndDropdownBorderColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "TextInputAndDropdownBorderColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
            className="c1"
              color={{
                hex: customizerData?.TextInputAndDropdown?.TextInputAndDropdownBorderColor || "#ffff",
              }} 
              onChange={(color) =>
                handleColorChange(color, "TextInputAndDropdownBorderColor")
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
                                  change: "TextInputAndDropdownBorderColor"

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
        <div className="right_property_name">Font family</div>
        <div className="custom-select">
         <select
         className="fontSelect"
         name="TextInputAndDropdownFontFamily"
          value={customizerData?.TextInputAndDropdown?.TextInputAndDropdownFontFamily || ""}
          onChange={(e) =>
            handleInputChange({
              name: "TextInputAndDropdownFontFamily",
              value: e.target.value,
            })
          }
        >
          <option value="">Select Font</option>
          {fontList.map((font) => (
            <option key={font} value={font}>
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
                <div className="clr-field" >
                <span
                    data-element="TextInputAndDropdownFontColor"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "TextInputAndDropdownFontColor"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.TextInputAndDropdown
                          ?.TextInputAndDropdownFontColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "TextInputAndDropdownFontColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
            className="c1"
              color={{
                hex: customizerData?.TextInputAndDropdown?.TextInputAndDropdownFontColor || "#ffff",
              }}
              onChange={(color) =>
                handleColorChange(color, "TextInputAndDropdownFontColor")
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

                              onClick={
                                () =>
                                handelchange({ 
                                  hex: "#ffffff",
                                  change: "TextInputAndDropdownFontColor"

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
          <div className="right_property_name">Font size</div>
          <div className="right_property_value">
            <input
              type="text"
              className="right_wrapper_input"
              value={customizerData?.TextInputAndDropdown?.TextInputAndDropdownFontSize}
              onChange={(e) =>
                handleInputChange({
                  name: "TextInputAndDropdownFontSize",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">
            Dropdown menu background colour
          </div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <span
                    data-element="TextInputAndDropdownMenuBackgroundColor"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "TextInputAndDropdownMenuBackgroundColor"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.TextInputAndDropdown
                          ?.TextInputAndDropdownMenuBackgroundColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "TextInputAndDropdownMenuBackgroundColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
            className="c1"
              color={{
                hex: customizerData?.TextInputAndDropdown?.TextInputAndDropdownMenuBackgroundColor || "#ffff",
              }}
              onChange={(color) =>
                handleColorChange(color, "TextInputAndDropdownMenuBackgroundColor")
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
                              onClick={
                                () =>
                                handelchange({ 
                                  hex: "#ffffff",
                                  change: "TextInputAndDropdownMenuBackgroundColor"

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
          <div className="right_property_name">
            Dropdown hovered options colour
          </div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <span
                    data-element="TextInputAndDropdownHovOpClr"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "TextInputAndDropdownHovOpClr"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.TextInputAndDropdown
                          ?.TextInputAndDropdownHovOpClr,
                    }}
                    ></span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "TextInputAndDropdownHovOpClr" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
            className="c1"
              color={{
                hex: customizerData?.TextInputAndDropdown?.TextInputAndDropdownHovOpClr || "#ffff",
              }}
              onChange={(color) =>
                handleColorChange(color, "TextInputAndDropdownHovOpClr")
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
                              onClick={
                                () =>
                                handelchange({ 
                                  hex: "#ffffff",
                                  change: "TextInputAndDropdownHovOpClr"

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
          <div className="right_property_name">
            Dropdown selected option colour
          </div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field" >
                <span
                    data-element="TextInputAndDropdownSelcOpClr"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "TextInputAndDropdownSelcOpClr"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.TextInputAndDropdown
                          ?.TextInputAndDropdownSelcOpClr,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "TextInputAndDropdownSelcOpClr" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
            className="c1"
              color={{
                hex: customizerData?.TextInputAndDropdown?.TextInputAndDropdownSelcOpClr || "#ffff",
              }}
              onChange={(color) =>
                handleColorChange(color, "TextInputAndDropdownSelcOpClr")
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
                              onClick={
                                () =>
                                handelchange({ 
                                  hex: "#ffffff",
                                  change: "TextInputAndDropdownSelcOpClr"

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
          <div className="right_property_name">Dropdown menu font colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field" >
                <span
                    data-element="TextInputAndDropdownMenuFontColor"
                    onClick={(e) =>
                      handleColorPickerClick(
                        e,
                        "TextInputAndDropdownMenuFontColor"
                      )
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor:
                        customizerData?.TextInputAndDropdown
                          ?.TextInputAndDropdownMenuFontColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "TextInputAndDropdownMenuFontColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
            className="c1"
              color={{
                hex: customizerData?.TextInputAndDropdown?.TextInputAndDropdownMenuFontColor || "#ffff",
              }}
              onChange={(color) =>
                handleColorChange(color, "TextInputAndDropdownMenuFontColor")
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
                              onClick={
                                () =>
                                handelchange({ 
                                  hex: "#ffffff",
                                  change: "TextInputAndDropdownMenuFontColor"

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

export default InputTextDrpDown;
