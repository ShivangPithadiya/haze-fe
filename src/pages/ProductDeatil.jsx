import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoginLayout from '../layouts/LoginLayout';
import Slider from 'react-slick';
import { callApi } from '../api/ApiHelper';
import CustomDots from '../components/themebuilder/MainComponent/CustomDots';
import AddToCart from './AddToCart';
import axios from 'axios';

const ProductDetail = () => {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [callingApi, setCallingApi] = useState(true);
  const [productData, setProductData] = useState({});
  const [selectedLayer, setSelectedLayer] = useState([]);
  const [originalImages, setOriginalImages] = useState({});
 const[SelectedCustomizerData, setSelectedCustomizerData] = useState([]);
   const [customizerLayerPanel, setCustomizerLayerPanel] = useState({});
  const [customizerLayerList, setCustomizerLayerList] = useState({});
  const[findUserid, setFindUserid] = useState(null);
  const[shopifyStoredomain, setShopifyStoredomain] = useState(null);
   const [customizerPrice, setCustomizerPrice] = useState({});
   const[ProductVariantid, setProductVariantid] = useState(null);
  const handleImageClick = (index) => {
    setSelectedLayer([productData.layerdata[index]]);
    console.log('Selected Layer:', productData.layerdata[index]);
  };

  const handleColorClick = async (color) => {
    try {
      const layerId = selectedLayer[0].layerId;
      const colorToApply = color.color.replace('#', '');
      console.log('Color to apply:', colorToApply);

      const newImages = await Promise.all(
        originalImages[layerId].map(async (img) => {
          const newBase64Image = await fetchImageAndApplyColor(img.url, colorToApply);
          return newBase64Image ? { ...img, url: newBase64Image } : img;
        })
      );

      setSelectedLayer([{ ...selectedLayer[0], images: newImages }]);
    } catch (error) {
      console.error('Error applying color:', error);
    }
  };

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

  const hexToRgb = (hex) => {
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r},${g},${b}`;
  };

  useEffect(() => {
    if (callingApi) {
      setCallingApi(false);
      callApi(`/data/ProductData/${productId}`, {
        method: "GET",
        data: {},
      }).then((res) => {
        setProductData(res);
        console.log("res", res);
        setFindUserid(res.created_by);
       
axios
  .get(`${import.meta.env.VITE_APP_API_URL}/profile/getuser/${res.created_by}`)
  .then((res) => {
    console.log("res", res);
    setFindUserid(res.data.user);

    setShopifyStoredomain(res.data.user.shopifyStoredomain);
    console.log("res.data.shopifyStoredomain", res.data.user.shopifystoredomain);
    const domain = res.data.user.shopifystoredomain;
    const token = res.data.user.shopifyaccesstoken;
   
    //set domain localstorage

    localStorage.setItem("shopifyStoredomain", domain);
  
      axios
        .get(
          `${import.meta.env.VITE_APP_API_URL}/shopify/products/${productId}`,
          {
            headers: {
              shopifyStoredomain: domain,
              shopifyAccessToken: token,
            },
          }
        )
        .then((res) => {
          setProductDetail(res.data?.product);
          setProductVariantid(res.data?.product?.variants[0].id);
          localStorage.setItem(
            "productVariantid",
            res.data.product.variants[0].id
          );
          
        });
  });

        const originalImgs = {};
        res.layerdata.forEach((layer) => {
          originalImgs[layer.layerId] = layer.images.map((img) => ({ ...img }));
        });
        setOriginalImages(originalImgs);
      });

      callApi(`/data/customizerData/${productId}`, { method: 'GET', data: {} }).then((res) => {
        localStorage.setItem('SelectedCustomizerData', JSON.stringify(res));
        localStorage.setItem('SelectedId', productId);
        console.log('reswwwwwwwwww', res);
      }
 

  
   );

 
      
    }
  }, [callingApi]);



  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
    useEffect(() => {
  const SelectedCustomizerData1 = JSON.parse(localStorage.getItem("SelectedCustomizerData"));
 
  setSelectedCustomizerData(SelectedCustomizerData1);
}, [SelectedCustomizerData]);

 const ProductDetails = SelectedCustomizerData?.ProductDetails;
  const customizerData = SelectedCustomizerData;
  const [isMobile, setIsMobile] = useState(false);
  const [customizerZoom, setCustomizerZoom] = useState({});
  const [customizerOutOfStock, setCustomizerOutOfStock] = useState({});

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

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
        <svg
          width="42"
          height="24"
          viewBox="0 0 42 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.939339 13.0607C0.353554 12.4749 0.353554 11.5251 0.939339 10.9393L10.4853 1.3934C11.0711 0.807611 12.0208 0.807611 12.6066 1.3934C13.1924 1.97919 13.1924 2.92893 12.6066 3.51472L4.12132 12L12.6066 20.4853C13.1924 21.0711 13.1924 22.0208 12.6066 22.6066C12.0208 23.1924 11.0711 23.1924 10.4853 22.6066L0.939339 13.0607ZM42 13.5H2V10.5H42V13.5Z"
            fill="#2D2D2D"
          />
        </svg>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
        <svg
          width="42"
          height="24"
          viewBox="0 0 42 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.0607 13.0607C41.6464 12.4749 41.6464 11.5251 41.0607 10.9393L31.5147 1.3934C30.9289 0.807611 29.9792 0.807611 29.3934 1.3934C28.8076 1.97919 28.8076 2.92893 29.3934 3.51472L37.8787 12L29.3934 20.4853C28.8076 21.0711 28.8076 22.0208 29.3934 22.6066C29.9792 23.1924 30.9289 23.1924 31.5147 22.6066L41.0607 13.0607ZM0 13.5H40V10.5H0V13.5Z"
            fill="#2D2D2D"
          />
        </svg>
      </div>
    );
  }
  var settings = {
    slidesToShow: 1,
    customPaging: (i) => <CustomDots active={i === 0} />,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }


  return (
    <LoginLayout>
      <div className="first__popup">
        <div className="first__popup__sub__box">
          <div className="first__popup__left__box">
            <h2 className="heading__name">{productDetail?.title}</h2>
            {productData?.layerdata?.length > 0 &&
              productData?.layerdata.map((layer, index) => (
                <div className="mug__color__box" key={index}>
                  <h3 className="mug__heading">{layer.imageTitle}</h3>
                  <div className="border__bottom" />
                  {layer?.dispalyType === 'Image' && (
                    <>
                      <div className="products_wrapper_row">
                        <div className="products_wrapper_col">
                          <div className="products-active products_wrapper_image" onClick={() => handleImageClick(index)}>
                            <img src={layer?.Thumbailimage} alt="image" width={40} />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {layer?.dispalyType === 'Colour' && (
                    <>
                      <div className="products_wrapper_row">
                        <div className="products_wrapper_col">
                          <div className="products_colour_section">
                            {layer.colours.map((color, index) => (
                              <span
                                key={index}
                                className="products-active"
                                style={{ backgroundColor: color.color }}
                                onClick={() => handleColorClick(color)}
                              ></span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
          </div>
          <div className="first__popup__right__box">
            <div className="top__right__box">
              <div className="price__heading__box">
                <h2 className="price__heading">${productDetail?.variants?.[0]?.price}</h2>
              </div>
              <div className="top__right__img__box">
                <img src="/assets/Image/theme-selector/1.png" className="right__box__img" alt="Image" />
                <img src="/assets/Image/theme-selector/1.svg" className="right__box__img" alt="Image" />
              </div>
            </div>
            <div className="border__bottom" />
            <div className="products_slid">
              {selectedLayer.map((layer, index) => (
                <Slider {...settings} key={index}>
                  {layer.images.map((image, index) => (
                    <div key={index}>
                      <img src={image.url} alt="image" />
                    </div>
                  ))}
                </Slider>
              ))}
            </div>
          <AddToCart   />
          </div>
        </div>
      </div>
    </LoginLayout>
  );
};

export default ProductDetail;
