import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  Stage,
  Layer,
  Group,
  Text,
  Rect,
  Image as KonvaImage,
} from "react-konva";
import { ToastContainer, toast } from "react-toastify";
import Konva from "konva";
import { useLocation } from "react-router-dom";
import "./AddImage.css";
import { useDispatch } from "react-redux";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { set } from "lodash";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import CustomizerTitle from "../LayerTitle";

const AddImage = () => {
  const [downloadedImageLink, setDownloadedImageLink] = useState("");
  const selectedData = JSON.parse(localStorage.getItem("selectedData")) || {};
  const [textPosition, setTextPosition] = useState({ x: 50, y: 50 });
  const [image, setImage] = useState([]);
  const [copied, setCopied] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedTextColor, setSelectedTextColor] = useState(null);
  const [showImage, setShowImage] = useState([]);
  const [imageToApplyColor, setImageToApplyColor] = useState();
  const [showText, setShowText] = useState([]);
  const [color, setColor] = useState("");
  const stageRef = useRef(null);
  const [productImage, setProductImage] = useState(null);
  const imageRef = useRef(null);
  const [currentindexs, setCurrentIndexs] = useState(0);
  const [firstColorImage, setFirstColorImage] = useState(null);
  const title = useSelector((state) => state?.title);
  const customizeProduct = useSelector(
    (state) => state?.customizeProduct?.layerData
  );
  const[SelectedCustomizerData, setSelectedCustomizerData] = useState([]);

 const toggleAccordion = (index) => {
    setOpenAccordions((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };
    const [openAccordions, setOpenAccordions] = useState([]);
  
  const preview = useSelector((state) => state?.customizeProduct?.preview?.images);
// const SelectedCustomizerData = JSON.parse(localStorage.getItem("SelectedCustomizerData"));

  const [tempImage, setTempImage] = useState(null);
  const ImageToColor = useSelector(
    (state) => state?.customizeProduct?.imageToColorData
  );
  const product_name = useSelector(
    (state) => state.customizeProduct.product_name
  );

  // console.log("ImageToColor", ImageToColor);
const maximumtraverse = preview?.length;
  const [selectedlayerarray, setSelectedLayerarray] = useState("");
  const [selectedColorLayer, setSelectedColorLayer] = useState("");
  const location = useLocation(); // Get the location object
  const query = new URLSearchParams(location.search);
  const productType = query.get("productType");
  const [customizerLayerPanel, setCustomizerLayerPanel] = useState({});
  const [customizerLayerList, setCustomizerLayerList] = useState({});
    const [customizerPrice, setCustomizerPrice] = useState({});
  const [customizerZoom, setCustomizerZoom] = useState({});
  const [customizerOutOfStock, setCustomizerOutOfStock] = useState({});

  const dispatch = useDispatch();
  const handleDownloadClick = () => {
    //   const stage = stageRef.current.getStage();
    //   const dataURL = stage.toDataURL({
    //     pixelRatio: 2,
    //   });
    //   setDownloadedImageLink(dataURL)
    // ;
    //   dispatch(setSaveImage(dataURL))
  };
  const ActiveLayerData = useSelector(
    (state) => state?.customizeProduct?.activeLayerData
  );

  useEffect(() => {
    const imagesToLoad = showImage.map((imageObj) => {
      return new Promise((resolve) => {
        const img = new window.Image();
        img.onload = () => resolve(img);
        img.src = imageObj.url;
      });
    });

    Promise.all(imagesToLoad)
      .then((loadedImages) => {
        setImage(loadedImages);
      })
      .catch((error) => {
        // console.error("Error loading images:", error);
      });
  }, [showImage]);
  const [editedImage, setEditedImage] = useState(null);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };
  useEffect(() => {
  const SelectedCustomizerData1 = JSON.parse(localStorage.getItem("SelectedCustomizerData"));
 
  setSelectedCustomizerData(SelectedCustomizerData1);
}, [SelectedCustomizerData]);

const ProductDetails = SelectedCustomizerData?.ProductDetails;
  const customizerData = SelectedCustomizerData;
   const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    setCustomizerLayerPanel({
      backgroundColor: customizerData?.LayersPanel?.LayersPanelBackgroundColor,
      border:
        customizerData?.LayersPanel?.LayersPanelBorderThickness +
        " solid " +
        customizerData?.LayersPanel?.LayersPanelBorderColor,
      PanelPosition: customizerData?.LayersPanel?.LayersPanelPosition,
    });
    setCustomizerLayerList({
      color: customizerData?.LayersList?.LayersListFontColor,
    });
    setCustomizerPrice({});
    setCustomizerZoom({
      fillColor: customizerData?.Zoom?.ZoomColor,
    });
    setCustomizerOutOfStock({
      fillColor: customizerData?.OutOfStock?.OutOfStockBadgeIconColor,
      iconBackgroundColor:
        customizerData?.OutOfStock?.OutOfStockBadgeBackgroundColor,
    });
  }, [customizerData, isMobile]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  //  const handleColorClick = (color) => {
  //    setSelectedColor(color.color);
  //    applyColorToImage(productImage, color.color);
  //  };


  const fetchImageAndApplyColor = async (imageUrl, selectedColor) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const reader = new FileReader();
      const base64Promise = new Promise((resolve, reject) => {
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
      });
      reader.readAsDataURL(blob);
      const base64Image = await base64Promise;

      const img = new Image();
      img.src = base64Image;

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = img.width;
      tempCanvas.height = img.height;
      const tempCtx = tempCanvas.getContext('2d');

      tempCtx.drawImage(img, 0, 0, tempCanvas.width, tempCanvas.height);
      const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
      const data = imageData.data;

      const targetColor = [255, 255, 255, 255];
      const tolerance = 10;

      for (let i = 0; i < data.length; i += 4) {
        const redDiff = Math.abs(data[i] - targetColor[0]);
        const greenDiff = Math.abs(data[i + 1] - targetColor[1]);
        const blueDiff = Math.abs(data[i + 2] - targetColor[2]);
        const alphaDiff = Math.abs(data[i + 3] - targetColor[3]);
        const totalDiff = redDiff + greenDiff + blueDiff + alphaDiff;

        if (totalDiff <= tolerance) {
          data[i + 3] = 0;
        }
      }

      tempCtx.putImageData(imageData, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'source-atop';
      ctx.fillStyle = `rgba(${hexToRgb(selectedColor)},1)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'multiply';
      ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
      const newBase64Image = canvas.toDataURL('image/png');

      return newBase64Image;
    } catch (error) {
      console.error('Error fetching and processing image:', error);
      return null;
    }
  };

  const applyColorToImage = async (colorId, selectedColor) => {
    if (colorId && selectedColor) {
      const newImages = await Promise.all(image.map(async (img) => {
        if (showImage.some((image) => image.layerId === colorId && image.url === img.src)) {
          const newBase64Image = await fetchImageAndApplyColor(img.src, selectedColor);
          if (newBase64Image) {
            const newImage = new Image();
            newImage.src = newBase64Image;
            return newImage;
          }
        }
        return img;
      }));
      setImage(newImages);
    }
  };

  const handleColorClick = (e, color) => {
    let colorId = null;
    setSelectedColor(color.color);
    customizeProduct.forEach((item) => {
      if (item.layerId === color.id) {
        colorId = item.layerId;
      }
    });
    applyColorToImage(colorId, color.color);
  };
 const hexToRgb = (hex) => {
    hex = hex?.replace(/^#/, "");
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `${r}, ${g}, ${b}`;
  };

  const handleDragEnd = (e, id) => {
    setTextPosition({
      x: e.target.x(),
      y: e.target.y(),
    });
  };

 
  useEffect(() => {}, [title?.uploadedImage]);

  const handleLayerImage = (e, id) => {
    if (id == "DropDown") {
      id = e.target.value;
    }
    let foundLayerId = null;
    customizeProduct.forEach((item) => {
      const foundImage = item?.images?.find((image) => image.id === id);

      if (foundImage) {
        foundLayerId = item.layerId;
      }
    });

    if (foundLayerId) {
      const existingImageIndex = showImage?.findIndex(
        (existingImage) => existingImage.layerId === foundLayerId
      );

      const imageToUpdate = customizeProduct
        .map((item) =>
          item?.images?.find(
            (image) => image.id === id && item.layerId === foundLayerId
          )
        )
        .filter(Boolean)[0];

      if (imageToUpdate) {
        const updatedShowImage = [...showImage];

        if (existingImageIndex !== -1) {
          updatedShowImage[existingImageIndex] = imageToUpdate;
        } else {
          updatedShowImage.push(imageToUpdate);
        }
        setShowImage(updatedShowImage);
        console.log("updateShowcv", updatedShowImage);
      }
    }
  };

  useEffect(() => {
    if (!ActiveLayerData) {
      setShowImage([]);
    }
  }, [ActiveLayerData]);

  const zoomimage = (e) => {
    const stage = stageRef.current.getStage();
    const scaleBy = 1.1; // You can adjust this value for different zoom levels
    const oldScale = stage.scaleX();

    const mousePointTo = {
      x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
      y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale,
    };

    const newScale = e.target.value
      ? oldScale * scaleBy // Zooming in: multiplying by scaleBy
      : oldScale / scaleBy; // Zooming out: dividing by scaleBy

    stage.scale({ x: newScale, y: newScale });

    const newPos = {
      x: -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
      y: -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale,
    };
    stage.position(newPos);
    stage.batchDraw();
  };

  const zoomoutimage = (e) => {
    const stage = stageRef.current.getStage();
    const scaleBy = 1.1; // You can adjust this value for different zoom levels
    const oldScale = stage.scaleX();

    const mousePointTo = {
      x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
      y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale,
    };

    const newScale = e.target.value
      ? oldScale / scaleBy // Zooming in: dividing by scaleBy
      : oldScale * scaleBy; // Zooming out: multiplying by scaleBy

    stage.scale({ x: newScale, y: newScale });

    const newPos = {
      x: -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
      y: -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale,
    };
    stage.position(newPos);
    stage.batchDraw();
  };

  const handleLayerText = (e, id) => {
    let foundLayerId = null;
    customizeProduct.forEach((item) => {
      const foundText = item?.text?.find((el) => el.id === id);
      console.log("foundText", foundText);
      setShowText((prevShowText) =>
        [...prevShowText, foundText].filter(Boolean)
      );
    });
  };
  useEffect(() => {
    const selectedColorExists = customizeProduct.some((layer) =>
      layer?.colours?.some((color) => color.color === selectedColor)
    );

    if (!selectedColorExists) {
      setSelectedColor("");
    }
  }, [customizeProduct, selectedColor]);
  const handleTextColorClick = (color) => {
    setSelectedTextColor(color);
    applyTextColorToImage(color);
  };
  const applyTextColorToImage = (newTextColor) => {
    const textElement = stageRef.current.findOne("Text");
    if (textElement) {
      textElement.fill(newTextColor);
      stageRef.current.batchDraw();
    }
  };
  const isProductPreviewURL = () => {
    return location.pathname.endsWith("/product-preview");
  };
const handelprevious = () => {
  const currentIndex = currentindexs-1; // Decrease index by 1
 
  if (currentindexs >= 0) {
    // Check if index is not less than 0
    setCurrentIndexs(currentindexs); // Update index
    const selectedImage = preview[currentindexs]?.url;
    // Load the selected image
   if (selectedImage !== undefined && selectedImage !== "") {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        // Clear existing images
        setImage([]);

        // Set the new image
        setImage([img]);

        // Optionally, you can set other state variables as well if needed
      };
      img.src = selectedImage;
      if (currentIndex < 0) {
        setCurrentIndexs(0);
      } else {
        setCurrentIndexs(currentIndex);
      }
    } else {
      console.log("No image found");
      if (currentIndex < 0) {
        setCurrentIndexs(0);
      } else {
        setCurrentIndexs(currentIndex);
      }
    }
    console.log("currentIndex", currentindexs);
  }
};

const handleNext = () => {
  const currentIndex = currentindexs + 1; // Increase index by 1

  if (currentindexs <= maximumtraverse) {
    // Check if preview[currentIndex] exists and index is less than or equal to maximumtraverse
    setCurrentIndexs(currentindexs); 
    const selectedImage = preview[currentindexs]?.url;
    

    if (selectedImage!== undefined && selectedImage !== "") {
      // If selectedImage is not empty
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        // Clear existing images
        setImage([]);

        // Set the new image
        setImage([img]);

        // Optionally, you can set other state variables as well if needed
      };
      img.src = selectedImage;
      if (currentindexs === maximumtraverse) {
        setCurrentIndexs(maximumtraverse);
      } else {
        setCurrentIndexs(currentIndex);
      }
    } else {
      console.log("No image found");
       if (currentindexs === maximumtraverse) {
         setCurrentIndexs(maximumtraverse);
       } else {
         setCurrentIndexs(currentIndex);
       }
    }
    console.log("currentIndex", currentindexs);

   
  }
};


  // console.log("productType", isProductPreviewURL());
  const classChange = isProductPreviewURL() ? "" : "center_wrapper";
  const class2 = isProductPreviewURL()
    ? "products_wrapper2"
    : "products_wrapper";
  const sizeclass = isProductPreviewURL() ? 600 : 400;
  return (
    <div className={classChange}>
      <div className={class2}>
        {productType === "Complex" ? (
          <>
          <div className="products_col" style={{ backgroundColor: "white" }}>
              <div
                className="mt-2"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* add if statmentti render thingd */}

                <Stage width={sizeclass} height={sizeclass} ref={stageRef}>
                  <Layer>
                    {image.map((imageObj, index) => {
                      // Calculate the scaling factor for the image
                      const scale = Math.min(
                        sizeclass / imageObj.width,
                        sizeclass / imageObj.height
                      );

                      // Check if a color is selected
                      const imageComponent = selectedColor ? (
                        <KonvaImage
                          key={index}
                          image={imageObj}
                          width={imageObj.width}
                          height={imageObj.height}
                          scaleX={scale}
                          scaleY={scale}
                          draggable={true}
                        />
                      ) : (
                        // Render the image without color overlay
                        <KonvaImage
                          key={index}
                          image={imageObj}
                          width={imageObj.width}
                          height={imageObj.height}
                          scaleX={scale}
                          scaleY={scale}
                          draggable={true}
                        />
                      );

                      return imageComponent;
                    })}

                    {showText.map((text) => (
                      <Text
                        key={text.id}
                        text={text?.imageText}
                        x={textPosition.x}
                        y={textPosition.y}
                        draggable
                        onDragEnd={handleDragEnd}
                        zIndex={999}
                        fontSize={30}
                      />
                    ))}
                  </Layer>
                </Stage>
                <div className="d-flex gap-1 mb-3">
                  {ActiveLayerData?.images?.length > 1 && (
                    <div className="previous">
                      <div className="d-flex gap-5">
                        <HiChevronDoubleLeft
                          size="25px"
                          onClick={(e) => handelprevious(e)}
                        />
                      </div>
                    </div>
                  )}
                  {ActiveLayerData?.images?.length > 1 && (
                    <div className="next">
                      <div className="d-flex gap-5">
                        <HiChevronDoubleRight
                          size="25px"
                          onClick={(e) => handleNext(e)}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="d-flex gap-1 mb-3">
               {ActiveLayerData?.dispalyType === "Image" &&
  ActiveLayerData?.images?.length > 1 && (
    ActiveLayerData?.images?.map((layer) => {
      return (
        <div key={layer.index} className="cir mx-1 mb-2"></div>
      );
    })
  )
}

                </div>
                <div className="d-flex gap-5" style={{ margin: "-15px 0 0 0" }}>
                  {/* <input type="button" className="px-2"  onClick={(e) => zoomimage(e)} id="plus" value="+"/>  */}
                  <div
                    id="thing"
                    class="plus-plus d-flex justify-center"
                    onClick={(e) => zoomoutimage(e)}
                  >
                    <p className="plus">+</p>
                  </div>

                  <FaMagnifyingGlass size="25px" />
                  <div
                    id="thing"
                    class="plus-cancel d-flex justify-center "
                    onClick={(e) => zoomimage(e)}
                  >
                    <p className="cancel">-</p>
                  </div>
                  {/* <input type="button" id="minus" onClick={(e)=>zoomoutimage(e)} value="-"/> */}
                </div>

                <p>Your product will appear here</p>
              </div>
            </div>
            <div className="products_col prod_col" style={customizerLayerPanel}>
               
                 {ProductDetails ? <CustomizerTitle layerData={ProductDetails} /> :<>{product_name && product_name.length > 0
                    ?  <p className="products_wrapper_tile caption-top  col_padding">{product_name}</p>
                    : <p className="products_wrapper_tile caption-top  col_padding">Product Name</p>}</>}
               

              {customizeProduct.map((layer, index) => (
               
                <div key={layer.layerId}>

                  <p className="m-4 mb-5">{layer.displayName}</p>
                  <div className="untitle_title">
                    <div key={layer.layerId} className="row mb-3 mx-1">
                     
                          <div className="products_wrapper_tag__main">
                    <div className="products__cont__three">
                        {layer.dispalyType === "Colour" &&
                           <div className="br__bttotom" style={customizerLayerList}>
                         <div
                onClick={() => toggleAccordion(index)}
                className={`accordion-title ${openAccordions.includes(index) ? "open" : ""}`}
              >
                <h2 className="products_wrapper_tag "> {layer.imageTitle}</h2>
              </div> <div
                className={`accordion-content ${openAccordions.includes(index) ? "open" : ""}`}
              >
                <div className="colors__box">
                   <div className="products_colour_section">
                 {
                  layer.colours && (
                    <>
                      {layer?.colours.map((color, index) => (
                <div
                              
                                style={{
                                  backgroundColor: color.color,
                                  margin: "5px",
                                }}
                                className={
                                  layer.thumbnailType
                                    ? "upload_image_large me-3"
                                    : "upload_image me-3"
                                }
                                onClick={(e) => handleColorClick(e, color)}
                              ><div className="abb"> {layer.labeType && (
                                <p className="uplaod_p"> {color?.colorName} </p>
                              )}</div></div>
                              
                          
              ))}
             
                    </>
                  )
                 }
                              {/* {layer?.colours.map((color, index) => (
                <span
                  key={index}
                  className="products-active"
                  style={{ backgroundColor: color.color }}
                  onClick={(e) => handleColorClick(e, color)}
                ></span>
                
              ))} */}
              
                            </div>
                </div>
              </div>
              {/* <div className="colors__box">
                   <div className="products_colour_section">
                <div
                              
                                style={{
                                  backgroundColor: color.color,
                                  margin: "5px",
                                }}
                                className={
                                  layer.thumbnailType
                                    ? "upload_image_large me-3"
                                    : "upload_image me-3"
                                }
                                onClick={(e) => handleColorClick(e, color)}
                              ></div>
                              
                              {layer.labeType && (
                                <p className="uplaod_p"> {color?.colorName} </p>
                              )}
                            </div>
                </div> */}
                          </div>
                         
                          
                          }

                          
                    </div></div>
                     
                      <div
                        style={{
                          marginTop: "20px",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                       
                        {/* {layer.InputType == "Thumbnail" && */}
                          {layer.dispalyType == "Colour" &&
                          layer?.colours?.map((color, index) => (
                            <div className="br__bttotom" key={index}>
                              
              <div
                className={`accordion-content ${openAccordions.includes(index) ? "open" : ""}`}
              >
                
              </div>
                             
                            </div>
                          ))}

                          
                        {layer.InputType === "Dropdown" &&
                          layer.dispalyType == "Colour" && (
                            <select
                              onChange={(e) => handleColorClick(e, "Dropdown")}
                              defaultValue=""
                            >
                              <option disabled value=""></option>
                              {layer?.colours?.map((color) => (
                                <option key={color.id} value={color.color}>
                                  {color?.colorName}
                                </option>
                              ))}
                            </select>
                          )}
                        {layer.InputType === "Radio" &&
                          layer.dispalyType == "Colour" && (
                            <div>
                              {layer?.colours?.map((color) => (
                                <div key={color.id}>
                                  <input
                                    type="radio"
                                    id={color.id}
                                    name="dropdownOptions"
                                    value={color.color}
                                    onChange={(e) =>
                                      handleLayerImage(e, color.id)
                                    }
                                  />
                                  <label>{color.colorName}</label>
                                </div>
                              ))}
                            </div>
                          )}
                        {/* Render images */}
                        {/* {layer.InputType === "Thumbnail" && */}
                         <div className="products_wrapper_tag__main">
                    <div className="products__cont__three">
                          {layer.dispalyType === "Image" &&(
                            <div className="br__bttotom" key={index}>
 <div
                onClick={() => toggleAccordion(index)}
                className={`accordion-title ${openAccordions.includes(index) ? "open" : ""}`}
              >
                <h2 className="products_wrapper_tag "> {layer.imageTitle}</h2>
              </div>
                         <div
                className={`accordion-content ${openAccordions.includes(index) ? "open" : ""}`}
              >      
                         { layer?.images?.map((image, index) => (
                            <div
                              key={index}
                              className={
                                layer.thumbnailType == true
                                  ? "upload_image_large me-3"
                                  : "upload_image me-3"
                              }
                            >
                            
                              {image?.url === "" ? (
<p></p>
                             
                              ) : (
                                <img
                                className="dummyImage"
                                src={image.url}
                                alt={image.imageName}
                                height="100px"
                                width="100px"
                                onClick={(e) => handleLayerImage(e, image.id)}
                              /> 
                              )
                              

                              }
                              {layer.labeType && <p>  <div className="products_wrapper_tag" style={customizerLayerList}>
                        {layer.imageTitle}
                          </div> </p>}
                            </div>
                          ))}
                            </div>
                              </div>
                            
                          )}{" "}
                          </div></div>
                        {layer.InputType === "Dropdown" &&
                          layer.dispalyType == "Image" && (
                            <select
                              onChange={(e) => handleLayerImage(e, "DropDown")}
                              defaultValue=""
                            >
                              <option disabled value=""></option>
                              {layer?.images?.map((image) => (
                                <option key={image.id} value={image.id}>
                                  {image.imageName}
                                </option>
                              ))}
                            </select>
                          )}
                        {layer.InputType === "Radio" &&
                          layer.dispalyType == "Image" && (
                            <div>
                              {layer?.images?.map((image) => (
                                <div key={image.id}>
                                  <input
                                    type="radio"
                                    id={image.id}
                                    name="dropdownOptions"
                                    value={image.id}
                                    onChange={(e) =>
                                      handleLayerImage(e, image.id)
                                    }
                                  />
                                  <label>{image.imageName}</label>
                                </div>
                              ))}
                            </div>
                          )}
                        {layer.InputType === "Checkbox" &&
                          layer.dispalyType == "Image" && (
                            <div>
                              {layer?.images?.map((image) => (
                                <div key={image.id}>
                                  <input
                                    type="checkbox"
                                    id={image.id}
                                    name="dropdownOptions"
                                    value={image.id}
                                    onChange={(e) =>
                                      handleLayerImage(e, image.id)
                                    }
                                  />
                                  <label>{image.imageName}</label>
                                </div>
                              ))}
                            </div>
                          )}
                        {layer.InputType == "Label" &&
                          layer.dispalyType == "Image" &&
                          layer?.images?.map((image) => (
                            <>
                              <div
                                key={image.id}
                                className="py-2 mx-3 my-2"
                                style={{
                                  border: "2px solid black",
                                  width: "40%",
                                }}
                                onClick={(e) => handleLayerImage(e, image.id)}
                              >
                                {image.imageName}
                              </div>
                            </>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
           <div className="products_col prod_col" style={customizerLayerPanel}>
               
                 {ProductDetails ? <CustomizerTitle layerData={ProductDetails} /> :<>{product_name && product_name.length > 0
                    ?  <p className="products_wrapper_tile caption-top  col_padding">{product_name}</p>
                    : <p className="products_wrapper_tile caption-top  col_padding">Product Name</p>}</>}
               

              {customizeProduct.map((layer) => (
               
                <div key={layer.layerId}>
                  <p className="m-4 mb-5">{layer.displayName}</p>
                  <div className="untitle_title">
                    <div key={layer.layerId} className="row mb-3 mx-1">
                      <p className="p-head">
                        
                        {layer.dispalyType === "Colour" &&
                           <div className="products_wrapper_tag" style={customizerLayerList}>
                        { (layer.imageTitle || "Untitled ")}
                          </div>
                         
                          
                          }
                      </p>
                      <div
                        style={{
                          marginTop: "20px",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {/* {layer.InputType == "Thumbnail" && */}
                          {layer.dispalyType == "Colour" &&
                          layer?.colours?.map((color, index) => (
                            <div>
                              <div
                                key={index}
                                style={{
                                  backgroundColor: color.color,
                                  margin: "5px",
                                }}
                                className={
                                  layer.thumbnailType
                                    ? "upload_image_large me-3"
                                    : "upload_image me-3"
                                }
                                onClick={(e) => handleColorClick(e, color)}
                              ></div>
                              {layer.labeType && (
                                <p className="uplaod_p"> {color?.colorName} </p>
                              )}
                            </div>
                          ))}
                        {layer.InputType === "Dropdown" &&
                          layer.dispalyType == "Colour" && (
                            <select
                              onChange={(e) => handleColorClick(e, "Dropdown")}
                              defaultValue=""
                            >
                              <option disabled value=""></option>
                              {layer?.colours?.map((color) => (
                                <option key={color.id} value={color.color}>
                                  {color?.colorName}
                                </option>
                              ))}
                            </select>
                          )}
                        {layer.InputType === "Radio" &&
                          layer.dispalyType == "Colour" && (
                            <div>
                              {layer?.colours?.map((color) => (
                                <div key={color.id}>
                                  <input
                                    type="radio"
                                    id={color.id}
                                    name="dropdownOptions"
                                    value={color.color}
                                    onChange={(e) =>
                                      handleLayerImage(e, color.id)
                                    }
                                  />
                                  <label>{color.colorName}</label>
                                </div>
                              ))}
                            </div>
                          )}
                        {/* Render images */}
                        {/* {layer.InputType === "Thumbnail" && */}
                          {layer.dispalyType === "Image" &&
                          layer?.images?.map((image, index) => (
                            <div
                              key={index}
                              className={
                                layer.thumbnailType == true
                                  ? "upload_image_large me-3"
                                  : "upload_image me-3"
                              }
                            >
                            
                              {image?.url === "" ? (
<p></p>
                             
                              ) : (
                                <img
                                className="dummyImage"
                                src={image.url}
                                alt={image.imageName}
                                height="100px"
                                width="100px"
                                onClick={(e) => handleLayerImage(e, image.id)}
                              /> 
                              )
                              

                              }
                              {layer.labeType && <p>  <div className="products_wrapper_tag" style={customizerLayerList}>
                        {layer.imageTitle}
                          </div> </p>}
                            </div>
                          ))}{" "}
                        {layer.InputType === "Dropdown" &&
                          layer.dispalyType == "Image" && (
                            <select
                              onChange={(e) => handleLayerImage(e, "DropDown")}
                              defaultValue=""
                            >
                              <option disabled value=""></option>
                              {layer?.images?.map((image) => (
                                <option key={image.id} value={image.id}>
                                  {image.imageName}
                                </option>
                              ))}
                            </select>
                          )}
                        {layer.InputType === "Radio" &&
                          layer.dispalyType == "Image" && (
                            <div>
                              {layer?.images?.map((image) => (
                                <div key={image.id}>
                                  <input
                                    type="radio"
                                    id={image.id}
                                    name="dropdownOptions"
                                    value={image.id}
                                    onChange={(e) =>
                                      handleLayerImage(e, image.id)
                                    }
                                  />
                                  <label>{image.imageName}</label>
                                </div>
                              ))}
                            </div>
                          )}
                        {layer.InputType === "Checkbox" &&
                          layer.dispalyType == "Image" && (
                            <div>
                              {layer?.images?.map((image) => (
                                <div key={image.id}>
                                  <input
                                    type="checkbox"
                                    id={image.id}
                                    name="dropdownOptions"
                                    value={image.id}
                                    onChange={(e) =>
                                      handleLayerImage(e, image.id)
                                    }
                                  />
                                  <label>{image.imageName}</label>
                                </div>
                              ))}
                            </div>
                          )}
                        {layer.InputType == "Label" &&
                          layer.dispalyType == "Image" &&
                          layer?.images?.map((image) => (
                            <>
                              <div
                                key={image.id}
                                className="py-2 mx-3 my-2"
                                style={{
                                  border: "2px solid black",
                                  width: "40%",
                                }}
                                onClick={(e) => handleLayerImage(e, image.id)}
                              >
                                {image.imageName}
                              </div>
                            </>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="products_col" style={{ backgroundColor: "white" }}>
              <div
                className="mt-2"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* add if statmentti render thingd */}

                <Stage width={sizeclass} height={sizeclass} ref={stageRef}>
                  <Layer>
                    {image.map((imageObj, index) => {
                      // Calculate the scaling factor for the image
                      const scale = Math.min(
                        sizeclass / imageObj.width,
                        sizeclass / imageObj.height
                      );

                      // Check if a color is selected
                      const imageComponent = selectedColor ? (
                        <KonvaImage
                          key={index}
                          image={imageObj}
                          width={imageObj.width}
                          height={imageObj.height}
                          scaleX={scale}
                          scaleY={scale}
                          draggable={true}
                        />
                      ) : (
                        // Render the image without color overlay
                        <KonvaImage
                          key={index}
                          image={imageObj}
                          width={imageObj.width}
                          height={imageObj.height}
                          scaleX={scale}
                          scaleY={scale}
                          draggable={true}
                        />
                      );

                      return imageComponent;
                    })}

                    {showText.map((text) => (
                      <Text
                        key={text.id}
                        text={text?.imageText}
                        x={textPosition.x}
                        y={textPosition.y}
                        draggable
                        onDragEnd={handleDragEnd}
                        zIndex={999}
                        fontSize={30}
                      />
                    ))}
                  </Layer>
                </Stage>
                <div className="d-flex gap-1 mb-3">
                  {ActiveLayerData?.images?.length > 1 && (
                    <div className="previous">
                      <div className="d-flex gap-5">
                        <HiChevronDoubleLeft
                          size="25px"
                          onClick={(e) => handelprevious(e)}
                        />
                      </div>
                    </div>
                  )}
                  {ActiveLayerData?.images?.length > 1 && (
                    <div className="next">
                      <div className="d-flex gap-5">
                        <HiChevronDoubleRight
                          size="25px"
                          onClick={(e) => handleNext(e)}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="d-flex gap-1 mb-3">
               {ActiveLayerData?.dispalyType === "Image" &&
  ActiveLayerData?.images?.length > 1 && (
    ActiveLayerData?.images?.map((layer) => {
      return (
        <div key={layer.index} className="cir mx-1 mb-2"></div>
      );
    })
  )
}

                </div>
                <div className="d-flex gap-5" style={{ margin: "-15px 0 0 0" }}>
                  {/* <input type="button" className="px-2"  onClick={(e) => zoomimage(e)} id="plus" value="+"/>  */}
                  <div
                    id="thing"
                    class="plus-plus d-flex justify-center"
                    onClick={(e) => zoomoutimage(e)}
                  >
                    <p className="plus">+</p>
                  </div>

                  <FaMagnifyingGlass size="25px" />
                  <div
                    id="thing"
                    class="plus-cancel d-flex justify-center "
                    onClick={(e) => zoomimage(e)}
                  >
                    <p className="cancel">-</p>
                  </div>
                  {/* <input type="button" id="minus" onClick={(e)=>zoomoutimage(e)} value="-"/> */}
                </div>

                <p>Your product will appear here</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AddImage;
