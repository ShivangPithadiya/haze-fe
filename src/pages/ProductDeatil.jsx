import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoginLayout from '../layouts/LoginLayout'
import Slider from 'react-slick'
import { callApi } from '../api/ApiHelper'



const ProductDeatil = () => {
  const {productId} = useParams()
  const [productDetail,setProductDetail] = useState({})
  const[callingApi,setCallingApi] = useState(true)

  useEffect(()=>{
    if (callingApi == true) {
      setCallingApi(false)
      callApi(`/shopify/products/${productId}`, { method: "GET", data: {} }).then((res)=>{
        setProductDetail(res?.product)
          console.log("errr res",res)
      })
    }
  },[callingApi])

  useEffect(() => {
    document.body.style.overflow =  "hidden"
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
  
    
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
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
        style={{ ...style, display: "block" }}
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

  // var settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   initialSlide: 0,
//   nextArrow: <SampleNextArrow />,
//   prevArrow: <SamplePrevArrow />,
// };

var settings = {
  slidesToShow: 1,
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
};
  

  return (
    <LoginLayout>
      <div className="first__popup">
              <div className="first__popup__sub__box">
                <div className="first__popup__left__box">
                  {/* <svg
                    // onClick={firstPopup}
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="close__img__popup"
                  >
                    <line
                      x1="1.42426"
                      y1="0.575736"
                      x2="12.4243"
                      y2="11.5757"
                      stroke="#2D2D2D"
                      stroke-width="1.2"
                    />
                    <line
                      y1="-0.6"
                      x2="15.5563"
                      y2="-0.6"
                      transform="matrix(-0.707107 0.707107 0.707107 0.707107 12 1)"
                      stroke="#2D2D2D"
                      stroke-width="1.2"
                    />
                  </svg> */}

                  <h2 className="heading__name">{productDetail?.title}</h2>

                  <div className="mug__color__box">
                    <h3 className="mug__heading"> Colour</h3>
                    <div className="border__bottom" />
                    <div className="mug__colors">
                      <div className="first mug__box" />
                      <div className="second mug__box" />
                      <div className="third mug__box" />
                      <div className="forth mug__box" />
                      <div className="five mug__box" />
                      <div className="six mug__box" />
                      <div className="seven mug__box" />
                      <div className="eight mug__box" />
                      <div className="nine mug__box" />
                      <div className="ten mug__box" />
                    </div>
                  </div>

                  <div className="handle__color__box">
                    <h3 className="handle__heading">Handle Colour</h3>
                    <div className="border__bottom" />
                    <div className="handle__colors">
                      <div className="first handle__box" />
                      <div className="second handle__box" />
                      <div className="third handle__box" />
                      <div className="forth handle__box" />
                      <div className="five handle__box" />
                      <div className="six handle__box" />
                      <div className="seven handle__box" />
                      <div className="eight handle__box" />
                    </div>
                  </div>

                  <div className="handle__color__box">
                    <h3 className="handle__heading">Text</h3>
                    <div className="border__bottom" />
                    <h4 className="text__printed">Enter Text to be Printed</h4>
                    <input
                      placeholder="Your Text"
                      className="input__txt__field"
                    />
                  </div>
                </div>

                <div className="first__popup__right__box">
                  <div className="top__right__box">
                    <div className="price__heading__box">
                      <h2 className="price__heading">${productDetail?.variants?.[0]?.price}</h2>
                    </div>
                    <div className="top__right__img__box">
                      <img
                        src="/assets/Image/theme-selector/1.png"
                        className="right__box__img"
                        alt="Image"
                      />
                      <img
                        src="/assets/Image/theme-selector/1.svg"
                        className="right__box__img"
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div className="border__bottom" />
                  {productDetail?.images?.length > 0 &&
                  <div className="slider__main__box">
                    <Slider {...settings}>
                      {productDetail?.images.length > 0 &&productDetail?.images.map((item,key)=>(
                        <div key={key}>
                        {console.log("dfdshf",item?.src)}
                        <img
                          src={item?.src}
                          className="slider__right__box__img"
                          alt={item?.alt ?item?.alt : item?.id }
                        />
                      </div>

                      )) }
                    </Slider>
                  </div>
}
                  <div className="cart__btn__box">
                    <button className="cart__btn">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
    </LoginLayout>
  )
}

export default ProductDeatil
