import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './pricing.css';

export default function PricingDetails() {
    const Data = useSelector((state) => state.customizeProduct.layerData);
    console.log(Data);
    const [tab, setTab] = useState("extra-pricing");
    const [showModal, setShowModal] = useState(false);
    const [showLayer, setShowLayer] = useState(false);
    const handleAddExtraPrice = () => {
        setShowModal(true);
        console.log('Add Extra Price');
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSubmit = () => {
        // Handle form submission, add extra price

        setShowModal(false);
    };


    const handleLayer = () => {
        setShowLayer(true)
    }
    return (
        <div className='container-fluid pricing_container'>
            <div className="row d-flex p-5">
                <div className="col-8">
                    <div className="pricing_section bg-light d-flex p-4 mb-3">
                        <div className="base_price">
                            <h5>Base Price</h5>
                            <div class="mb-4">
                                <input class="file_select_title p-2 w-100" placeholder='0' style={{ border: "1px solid #9C9C9C;" }} />
                            </div>
                        </div>
                        <div className="base_price">
                            <h5>Currency</h5>
                            <select className="add_theme_inner_container_select w-100 p-2">
                                <option value="Thumbnail">Currency</option>
                                <option value="CAD">CAD</option>
                                <option value="USD">USD</option>
                            </select>
                        </div>
                    </div>
                    <div className="additional_pricing bg-light">
                        <div className="left_wrapper w-100">
                            <div className="wrapper_header">
                                <div className="wraper_header_title">Aditional Pricing</div>
                                {tab == "extra-pricing" ?
                                    (<div className="wraper_button_section products_btn">
                                        <button className="add_button" onClick={handleAddExtraPrice}>+ Add extra price</button>
                                    </div>)
                                    :
                                    (<div className="wraper_button_section products_btn">
                                        <button className="add_button">+ Add equation</button>
                                    </div>)
                                }


                            </div>
                            <div className="main_container">
                                <div className="my_products">
                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="pills-Active-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-Active"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-Active"
                                                aria-selected="true"
                                                onClick={() => setTab('extra-pricing')}
                                            >
                                                Extra Pricing
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="pills-Drafts-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-Drafts"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-Drafts"
                                                aria-selected="false"
                                                onClick={() => setTab('equation')}
                                            >
                                                Equations
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="pills-Active"
                                            role="tabpanel"
                                            aria-labelledby="pills-Active-tab"
                                            tabIndex="0"
                                        >
                                            <div className="active_products_section">
                                                <div className="my_products">
                                                    <div className=" products_hr"></div>
                                                    <div className="add_products_section printin_methods_section">
                                                        <div className="add_products_col">
                                                            <div className="add_products_col_icon">
                                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g clip-path="url(#clip0_3716_1179)">
                                                                        <path d="M24.2352 17.0735C24.012 16.9428 23.7264 17.0175 23.5966 17.2401L18.2455 26.3666C17.859 27.0356 17.0015 27.2662 16.3531 26.8918L15.3107 26.2163C15.0942 26.0758 14.8052 26.1374 14.6651 26.354C14.5246 26.5701 14.5867 26.8596 14.8028 26.9996L15.8657 27.6877C16.2322 27.8996 16.6331 28 17.029 28C17.8361 28 18.6212 27.5822 19.0521 26.8362L24.4012 17.712C24.5316 17.4898 24.4574 17.2037 24.2352 17.0735Z" fill="black" />
                                                                        <path d="M25.6489 0H18.18C16.7357 0 15.6598 0.459787 14.5824 1.53718C14.3999 1.71973 14.3999 2.01475 14.5824 2.19724C14.7649 2.37979 15.0599 2.37979 15.2424 2.19724C16.1518 1.2879 16.9757 0.933578 18.18 0.933578H25.6489C26.421 0.933578 27.0493 1.56191 27.0493 2.334V9.80295C27.0493 11.0078 26.695 11.8312 25.7852 12.7406L11.922 26.6234C11.3926 27.1519 10.4702 27.1523 9.94182 26.6234L1.35954 18.0411C1.09488 17.7765 0.949203 17.425 0.949203 17.0506C0.949203 16.6767 1.09482 16.3251 1.35904 16.0609L13.8891 3.54865C14.0819 3.59766 14.2751 3.64667 14.4754 3.70034C16.3744 4.20914 17.8729 4.73479 18.9899 5.20393C18.7701 5.61098 18.6468 6.06705 18.6468 6.53526C18.6468 8.07994 19.903 9.33611 21.4476 9.33611C22.9923 9.33611 24.2485 8.07994 24.2485 6.53526C24.2485 4.99059 22.9923 3.73442 21.4476 3.73442C21.1895 3.73442 20.9809 3.94355 20.9809 4.20121C20.9809 4.45886 21.1895 4.668 21.4476 4.668C22.4775 4.668 23.3149 5.50546 23.3149 6.53521C23.3149 7.56501 22.4774 8.40242 21.4476 8.40242C20.4179 8.40242 19.5804 7.56495 19.5804 6.53521C19.5804 6.19911 19.6724 5.87094 19.8419 5.58527C20.6504 5.97225 21.1559 6.29856 21.3557 6.50676C21.2703 6.53105 21.1382 6.55813 20.9389 6.57536C20.6822 6.59823 20.4922 6.82465 20.5151 7.08137C20.5366 7.32409 20.7401 7.50757 20.9795 7.50757C20.9931 7.50757 21.0071 7.50664 21.0211 7.50571C21.3082 7.48005 22.1816 7.40303 22.3496 6.777C22.8094 5.05962 16.072 3.16156 14.7168 2.79838C12.6437 2.24286 10.6528 1.86289 9.10999 1.72848C7.21428 1.56278 6.29093 1.77843 6.1173 2.42727C6.03421 2.73864 5.81249 3.56533 9.59735 5.05771C9.83685 5.15246 10.1085 5.03484 10.2028 4.79491C10.2971 4.55498 10.1795 4.28376 9.93952 4.18945C8.11104 3.46823 7.35339 2.93979 7.11067 2.691C7.68627 2.52202 9.65479 2.57103 12.8249 3.29176L0.699479 15.4004C0.258346 15.8416 0.015625 16.4274 0.015625 17.0506C0.015625 17.6742 0.258346 18.2605 0.699479 18.7012L9.28171 27.2834C9.72191 27.7241 10.3082 27.9668 10.9314 27.9668C11.5551 27.9668 12.1409 27.7241 12.5821 27.283L26.4457 13.4006C27.5236 12.3232 27.9829 11.2472 27.9829 9.80295V2.33405C27.983 1.04703 26.9359 0 25.6489 0Z" fill="black" />
                                                                        <path d="M15.2815 12.2738C15.099 12.0912 14.8039 12.0912 14.6214 12.2738L14.3694 12.5258C14.0001 12.2812 13.5595 12.137 13.0843 12.137C11.7973 12.137 10.7502 13.184 10.7502 14.471C10.7502 15.1666 11.0373 15.7165 11.2875 16.1184C11.5209 16.4932 11.6838 17.0273 11.6838 17.2719C11.6838 18.044 11.0555 18.6723 10.2834 18.6723C9.51133 18.6723 8.883 18.044 8.883 17.2719C8.883 16.9885 8.96746 16.7154 9.12715 16.4821C9.27277 16.2697 9.21817 15.9788 9.00576 15.8332C8.7929 15.688 8.50254 15.7422 8.35691 15.9546C8.09034 16.3439 7.94937 16.7995 7.94937 17.2719C7.94937 17.7472 8.09362 18.1878 8.3382 18.557L8.08613 18.8091C7.90358 18.9916 7.90358 19.2867 8.08613 19.4692C8.17716 19.5602 8.29668 19.6059 8.41616 19.6059C8.53569 19.6059 8.65516 19.5602 8.74619 19.4692L8.99826 19.2171C9.36751 19.4617 9.80815 19.6059 10.2834 19.6059C11.5703 19.6059 12.6174 18.5589 12.6174 17.2719C12.6174 16.8172 12.3915 16.1245 12.0801 15.6245C11.8024 15.1787 11.6838 14.8338 11.6838 14.471C11.6838 13.699 12.3121 13.0706 13.0842 13.0706C13.4586 13.0706 13.797 13.22 14.0481 13.4604C14.0561 13.4688 14.0589 13.48 14.0668 13.4884C14.0752 13.4963 14.0864 13.4991 14.0948 13.5071C14.3352 13.7582 14.4846 14.0967 14.4846 14.471C14.4846 14.8453 14.3385 15.1978 14.0733 15.4629C13.8908 15.645 13.8908 15.9405 14.0728 16.123C14.2544 16.3055 14.5504 16.305 14.7329 16.1235C15.1745 15.6819 15.4182 15.0951 15.4182 14.471C15.4182 13.9958 15.2739 13.5551 15.0293 13.1859L15.2814 12.9338C15.4641 12.7513 15.4641 12.4562 15.2815 12.2738Z" fill="black" />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_3716_1179">
                                                                            <rect width="28" height="28" fill="white" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>

                                                            </div>
                                                            <div className="add_products_col_title">
                                                                No extra price is created
                                                            </div>
                                                            <div className="add_products_col_paragraph mt-2">
                                                                <p>
                                                                    Create extra price for specific layers
                                                                </p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="tab-pane fade"
                                            id="pills-Drafts"
                                            role="tabpanel"
                                            aria-labelledby="pills-Drafts-tab"
                                            tabIndex="0"
                                        >
                                            <div className="active_products_section">
                                                <div className="my-product-container">
                                                </div>
                                                <div className="my_products">
                                                    <div className=" products_hr"></div>
                                                    <div className="add_products_section printin_methods_section">
                                                        <div className="add_products_col">
                                                            <div className="add_products_col_icon">
                                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g clip-path="url(#clip0_3716_1251)">
                                                                        <path d="M0.5 16.0407H6.58699H6.96154L7.11789 16.3848L9.50134 21.6284L14.5481 3.68424L14.668 3.25812H15.1087H28.5V4.42482H15.5494L10.1909 23.477L9.0995 23.559L6.21243 17.2074H0.5V16.0407Z" fill="#212121" />
                                                                        <path d="M26.479 10.3408L17.653 19.1669L16.8281 18.342L25.6541 9.51599L26.479 10.3408Z" fill="#212121" />
                                                                        <path d="M17.653 9.51599L26.479 18.342L25.6541 19.1669L16.8281 10.3408L17.653 9.51599Z" fill="#212121" />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_3716_1251">
                                                                            <rect width="28" height="28" fill="white" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>

                                                            </div>
                                                            <div className="add_products_col_title">
                                                                No equation created
                                                            </div>
                                                            <div className="add_products_col_paragraph mt-2">
                                                                <p>
                                                                    Create your first equation to add extra price
                                                                    based on mathematical operations.                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {showModal && (
                        <div className="modal-over1">
                            <div className="modal-content1">
                                <div className="px-4 px-lg-0">
                                    <div className="pb-5">
                                        <div className="container">
                                            <div className="row">
                                                {/* w1x */}
                                                <div className="col-12 p-4 bg-white rounded shadow-sm">
                                                    <div className='mb-4'><h5>Create extra pricing</h5></div>
                                                    <div className="select_pricing d-flex align-items-center">
                                                        <span className="sidebar_menu_icon m-2">
                                                            <img src="assets/Image/them/Layers.svg" />
                                                        </span>
                                                        <div className='m-2'>
                                                            <select className="add_theme_inner_container_select w-100 p-2" onSelect={handleLayer}>
                                                                <option value="Thumbnail">Select Layer</option>
                                                                <option value="CAD">Handle Color</option>
                                                                <option value="USD">Font Color</option>
                                                                <option value="USD">Mug Color</option>
                                                                <option value="USD">Mug Color</option>
                                                            </select>

                                                        </div>
                                                        <div className='m-2'>
                                                            <button className=" btn-close rounded-pill btn-block" onClick={handleCloseModal}></button>
                                                        </div>
                                                    </div>
                                                    {showLayer && (
                                                        <>
                                                            <div className="font_select mb-4">
                                                                <div class="">
                                                                    <label htmlFor="">Neon Green</label>
                                                                    <input class="file_select_title p-2 mb-2" placeholder='0' style={{ border: "1px solid #9C9C9C;" }} />
                                                                    <br />
                                                                    <label htmlFor="">Neon Yellow</label>
                                                                    <input class="file_select_title p-2 mb-2" placeholder='0' style={{ border: "1px solid #9C9C9C;" }} />
                                                                    <br />
                                                                    <label htmlFor="">Neon Pink</label>
                                                                    <input class="file_select_title p-2 mb-2" placeholder='0' style={{ border: "1px solid #9C9C9C;" }} />
                                                                </div>
                                                            </div>
                                                        </>

                                                    )}
                                                    {/* <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr className='gap-2'>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="p-2 px-4 text-uppercase">Product</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase">Price</div>
                                                </th>
                                                <th scope="col" className="border-0 px-2 bg-light">
                                                    <div className="py-2 q1 text-uppercase">Quantity</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Data.map((item) => {
                                                if (item.dispalyType === "Image") {
                                                    return (
                                                        <tr key={item.layerId}>
                                                            <td className="border-0">
                                                                <div className="p-3">
                                                                    <img src={item.Thumbailimage} alt={item.imageTitle} width="70" className="img-fluid mx-2 rounded shadow-sm"/>
                                                                    <div className="ml-3 d-inline-block align-middle">
                                                                        <h5 className="mb-0">
                                                                            <a href="#" className="text-dark d-inline-block align-middle">{item.imageTitle}</a>
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="border-0 align-middle w-20">
                                                                <strong className=' d-flex'>
                                                                    <p className='  text-sm f1q px-1'>$</p>
                                                                    <input 
                                                                        id="price" 
                                                                        name="price"
                                                                        placeholder="0" 
                                                                       
                                                                        type="number" 
                                                                        onChange={(e) => console.log(e.target.value)}
                                                                        className=" aq1 mt-2 form-control form-control-sm w-10" 
                                                                    /></strong></td>
                                                            <td className="border-0 align-middle w10">
                                                                <strong> 
                                                                    <input 
                                                                        id="form1" 
                                                                        min="0" 
                                                                        name="quantity" 
                                                                        placeholder="0"
                                                                        onChange={(e) => console.log(e.target.value)}
                                                                        type="number" 
                                                                        className="form-control form-control-sm w-10" 
                                                                    />
                                                                </strong>
                                                            </td>
                                                        </tr>
                                                    );
                                                } else {
                                                    return null;
                                                }
                                            })}
                                        </tbody>
                                    </table>
                                </div> */}
                                                    {/* <div className="modal-footer">

                                                        <button className="btn btn-light rounded-pill py-2 btn-block" onClick={handleCloseModal}>Cancel</button>
                                                        <a href="#" className="btn btn-dark rounded-pill py-2 btn-block mx-2">Proceed</a>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>

                <div className="col-4">
                    <div className="bulk_pricing bg-light p-4">
                        <h5>Bulk Pricing</h5>
                        <p>Set different product price based on the volume your client buy.
                            Requires a published bulk question to be available.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
