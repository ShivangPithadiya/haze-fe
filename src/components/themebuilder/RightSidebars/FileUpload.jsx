import React, { useEffect, useRef, useContext } from "react";
import { SketchPicker } from "react-color";

import ThemeContext from "../../../contexts/ThemeContext";
const FileUpload = () => {
  /*const [customizerData, setCustomizerData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("customizerData"));
    return (
      storedData || {
        FileUpload: {
          FileUploadBackgroundColor: "#ffff",
          FileUploadBorderColor: "#ffff",
          FileUploadBorderRounding: "",
          FileUploadFontColor: "#ffff",
          FileUploadLinkColor: "#ffff",
          FileUploadFontSize: "",
          FileUploadImgRound: "",
          FileUploadRemoveoptionbgColor:"#ffff",
          FileUploadRemoveophoverbgColor:"#ffff",
          FileUploadRemoveIconColor:"#ffff"
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
    <div className="right_wrapper_title">File Upload</div>
            <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Background colour</div>
          <div className="right_property_value">
            <div className="deom_color">
              <div className="example full">
                <div className="clr-field">
                  <span
                    data-element="FileUploadBackgroundColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "FileUploadBackgroundColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor: customizerData?.FileUpload?.FileUploadBackgroundColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "FileUploadBackgroundColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
              className="c1"
              color={{
                hex: customizerData?.FileUpload?.FileUploadBackgroundColor || "#ffff",
              }}
              onChange={(color) =>
                handleColorChange(color, "FileUploadBackgroundColor")
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
                  handelchange({
                    hex: "#ffffff",
                    change: "FileUploadBackgroundColor",
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
                    data-element="FileUploadBorderColor"
                    onClick={(e) =>
                      handleColorPickerClick(e, "FileUploadBorderColor")
                    }
                    style={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      border: "2px solid #000",
                      backgroundColor: customizerData?.FileUpload?.FileUploadBorderColor,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "FileUploadBorderColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
              className="c1"
              color={{
                hex: customizerData?.FileUpload?.FileUploadBorderColor || "#ffff",
              }}
              onChange={(color) =>
                handleColorChange(color, "FileUploadBorderColor")
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
                  handelchange({
                    hex: "#ffffff",
                    change: "FileUploadBorderColor",
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
          <div className="right_property_name">Roundings</div>
          <div className="right_property_value">
            <input
              type="text"
              className="right_wrapper_input"
              value={customizerData?.FileUpload?.FileUploadBorderRounding || ""}
              onChange={(e) =>
                handleInputChange({
                  name: "FileUploadBorderRounding",
                  value: e.target.value,
                })
              }
            />
          </div>
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
                          data-element="FileUploadFontColor"
                          onClick={(e) =>
                            handleColorPickerClick(e, "FileUploadFontColor")
                          }
                          style={{
                            display: "inline-block",
                            width: "30px",
                            height: "30px",
                            border: "2px solid #000",
                            backgroundColor: customizerData?.FileUpload?.FileUploadFontColor,
                          }}
                        ></span>
                       
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "FileUploadFontColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
              className="c1"
              color={{
                hex: customizerData?.FileUpload?.FileUploadFontColor || "#ffff",
              }}
              onChange={(color) =>
                handleColorChange(color, "FileUploadFontColor")
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
                  handelchange({
                    hex: "#ffffff",
                    change: "FileUploadFontColor",
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
                <div className="right_property_name">Link colour</div>
                <div className="right_property_value">
                  <div className="deom_color">
                    <div className="example full">
                      <div className="clr-field">
                        <span
                          data-element="FileUploadLinkColor"
                          onClick={(e) =>
                            handleColorPickerClick(e, "FileUploadLinkColor")
                          }
                          style={{
                            display: "inline-block",
                            width: "30px",
                            height: "30px",
                            border: "2px solid #000",
                            backgroundColor: customizerData?.FileUpload?.FileUploadLinkColor,
                          }}
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
 <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "FileUploadLinkColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
              className="c1"
              color={{
                hex: customizerData?.FileUpload?.FileUploadLinkColor || "#ffff",
              }}
              onChange={(color) =>
                handleColorChange(color, "FileUploadLinkColor")
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
                  handelchange({
                    hex: "#ffffff",
                    change: "FileUploadLinkColor",
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
              value={customizerData?.FileUpload?.FileUploadFontSize || ""}
              onChange={(e) =>
                handleInputChange({
                  name: "FileUploadFontSize",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
            <div className="right_wrapper_row">
        <div className="right_wrapper_col">
          <div className="right_property_name">Image rounding</div>
          <div className="right_property_value">
            <input
              type="text"
              className="right_wrapper_input"
              value={customizerData?.FileUpload?.FileUploadImgRoundings|| ""}
              onChange={(e) =>
                handleInputChange({
                  name: "FileUploadImgRoundings",
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
                  Remove options background colour
                </div>
                <div className="right_property_value">
                  <div className="deom_color">
                    <div className="example full">
                      <div className="clr-field" >
                        <span
                          data-element="FileUploadRemoveoptionbgColor"
                          onClick={(e) =>
                            handleColorPickerClick(e, "FileUploadRemoveoptionbgColor")
                          }
                          style={{
                            display: "inline-block",
                            width: "30px",
                            height: "30px",
                            border: "2px solid #000",
                            backgroundColor: customizerData?.FileUpload?.FileUploadRemoveoptionbgColor,
                          }}
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "FileUploadRemoveoptionbgColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
              className="c1"
              color={{
                hex: customizerData?.FileUpload?.FileUploadRemoveoptionbgColor || "#ffff",
              }}
              onChange={(color) =>
                handleColorChange(color, "FileUploadRemoveoptionbgColor")
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
                  handelchange({
                    hex: "#ffffff",
                    change: "FileUploadRemoveoptionbgColor",
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
                <div className="right_property_name">
                  Remove options hover background colour
                </div>
                <div className="right_property_value">
                  <div className="deom_color">
                    <div className="example full">
                      <div className="clr-field" >
                        <span
                          data-element="FileUploadRemoveophoverbgColor"
                          onClick={(e) =>
                            handleColorPickerClick(e, "FileUploadRemoveophoverbgColor")
                          }
                          style={{
                            display: "inline-block",
                            width: "30px",
                            height: "30px",
                            border: "2px solid #000",
                            backgroundColor: customizerData?.FileUpload?.FileUploadRemoveophoverbgColor,
                          }}
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "FileUploadRemoveophoverbgColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
              className="c1"
              color={{
                hex: customizerData?.FileUpload?.FileUploadRemoveophoverbgColor || "#ffff",
              }}
              onChange={(color) =>
                handleColorChange(color, "FileUploadRemoveophoverbgColor")
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
                  handelchange({
                    hex: "#ffffff",
                    change: "FileUploadRemoveophoverbgColor",
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
                <div className="right_property_name">
                  Remove options icon colour
                </div>
                <div className="right_property_value">
                  <div className="deom_color">
                    <div className="example full">
                      <div className="clr-field" >
                        <span
                          data-element="FileUploadRemoveIconColor"
                          onClick={(e) =>
                            handleColorPickerClick(e, "FileUploadRemoveIconColor")
                          }
                          style={{
                            display: "inline-block",
                            width: "30px",
                            height: "30px",
                            border: "2px solid #000",
                            backgroundColor: customizerData?.FileUpload?.FileUploadRemoveIconColor,
                          }}
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="right_wrapper_row rowClrPicker">
        {showPicker && showElement === "FileUploadRemoveIconColor" && (
          <div
            ref={colorPickerRef}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", zIndex: 2 }}
            className="colorPickerContainer"
          >
            <SketchPicker
              className="c1"
              color={{
                hex: customizerData?.FileUpload?.FileUploadRemoveIconColor || "#ffff",
              }}
              onChange={(color) =>
                handleColorChange(color, "FileUploadRemoveIconColor")
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
                  handelchange({
                    hex: "#ffffff",
                    change: "FileUploadRemoveIconColor",
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
  )
}

export default FileUpload
