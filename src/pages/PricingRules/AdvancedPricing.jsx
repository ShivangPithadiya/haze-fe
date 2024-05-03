import React, { useState } from 'react'
import './pricing.css'
export default function AdvancedPricing() {
    const [showOptions, setShowOptions] = useState(false)
    const [showColors, setShowColors] = useState(false)
    const handleSelect = () => {
        setShowColors(!showColors)
    }
    return (
        <div className="left_wrapper pt-5">
            <div className="wrapper_header">
                <div className="wraper_header_title text-bold">Pricing Rules</div>
            </div>
            <div className="pricing_rules_section d-flex w-100 justify-content-between align-items-center">
                <h6><b>Advanced Pricing</b></h6>
                <button
                    className="add_button p-2"
                    type="button"
                    onClick={() => setShowOptions(true)}
                >
                    + Add{" "}
                </button>
            </div>
            <hr className='m-0' />

            {showOptions ? (
                <>
                    <div className="main_container_pricing p-4">
                        <div className="">
                            <h5>New Pricing</h5>
                            <div className="font_select mb-4">
                                <div class="">
                                    <label className='mb-2'>Name</label>
                                    <input class="file_select_title p-2 w-100" placeholder='Enter Name...' style={{ border: "1px solid #9C9C9C;" }} required />
                                    <span className='text-danger'>*Required</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main_container_pricing p-4">
                        <div className="">
                            <h5>Display Options</h5>
                            <div className="font_select mb-4">
                                <div class="">
                                    <label className='mb-2'>Label</label>
                                    <input class="file_select_title p-2 w-100" style={{ border: "1px solid #9C9C9C;" }} required />
                                </div>
                            </div>
                            <div className="font_select mb-4">
                                <div class="">
                                    <p>Price Structure</p>
                                    <div className="checkboxes mb-4">
                                        <label class="list-group-item me-4 mb-2">
                                            <input class="form-check-input me-2 border border-secondary" type="checkbox" value="" />
                                            Show final price (product price + customization charge)
                                        </label>
                                        <label class="list-group-item mb-2">
                                            <input class="form-check-input me-2 border border-secondary" type="checkbox" value="" />
                                            Show product price and customization charge as separated values
                                        </label>
                                        <label class="list-group-item mb-2">
                                            <input class="form-check-input me-2 border border-secondary" type="checkbox" value="" />
                                            Show only customization charge
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Rule Association */}
                    <div className="main_container_pricing p-4">
                        <div className="">
                            <p>Standard Output Format</p>
                            <p>Base Price</p>
                            <div class="mb-4">
                                <input class="file_select_title p-2 w-100" placeholder='0' style={{ border: "1px solid #9C9C9C;" }} />
                            </div>
                            <div className="checkboxes d-flex mb-4">
                                <label class="list-group-item me-4">
                                    <input class="form-check-input me-2 border border-secondary" type="checkbox" value="" onChange={() => handleSelect()} />
                                    Additional Price
                                </label>
                            </div>
                            {showColors && (
                                <>
                                    <div className="row">
                                        <div className="col-12 d-flex">
                                            <div className="font_select mb-4 col-4">
                                                <div class=" me-2">
                                                    <input class="file_select_title p-2 w-100 mb-2" placeholder='Neon Green' style={{ border: "1px solid #9C9C9C;" }} />
                                                    <input class="file_select_title p-2 w-100 mb-2" placeholder='Neon Pink' style={{ border: "1px solid #9C9C9C;" }} />
                                                    <input class="file_select_title p-2 w-100 mb-2" placeholder='Neon Yellow' style={{ border: "1px solid #9C9C9C;" }} />
                                                </div>
                                            </div>
                                            <div className="font_select mb-4 col-4">
                                                <div class="">
                                                    <input class="file_select_title p-2 w-100 mb-2" placeholder='0' style={{ border: "1px solid #9C9C9C;" }} />
                                                    <input class="file_select_title p-2 w-100 mb-2" placeholder='0' style={{ border: "1px solid #9C9C9C;" }} />
                                                    <input class="file_select_title p-2 w-100 mb-2" placeholder='0' style={{ border: "1px solid #9C9C9C;" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            <div className="font_select mb-4">
                                <div class="">
                                    <label className='mb-2'>Cost for Customized Pattern/Embroidery</label>
                                    <input class="file_select_title p-2 w-100" placeholder='0' style={{ border: "1px solid #9C9C9C;" }} required />
                                </div>
                            </div>
                            <div className="font_select mb-4">
                                <div class="">
                                    <label className='mb-2'>Cost for Each Text Element</label>
                                    <input class="file_select_title p-2 w-100" placeholder='0' style={{ border: "1px solid #9C9C9C;" }} required />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Rules */}
                    {/* <div className="main_container_pricing p-4">
                        <div className="">
                            <h5>Rules</h5>

                            <div className="font_select mb-4">
                                <div class="font_select_section  p-3">
                                    <span class="file_select_title text-dark"><strong>Add a new rule</strong></span>
                                    <span class="file_select_icon">
                                        <button type="button" className="">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <rect
                                                    x="0.5"
                                                    y="0.5"
                                                    width="19"
                                                    height="19"
                                                    rx="2.5"
                                                    stroke="#9C9C9C"
                                                />
                                                <path
                                                    d="M10 5.83325L10 14.1666"
                                                    stroke="#2D2D2D"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                />
                                                <path
                                                    d="M14.166 10H5.83268"
                                                    stroke="#2D2D2D"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="save_button text-end">
                        <button className='btn btn-dark'>Save</button>
                    </div>
                </>
            ) : (<>
                <div className="main_container_pricing p-4">
                    <div className="text-center advanced_pricing">
                        <p>No pricing defined</p>
                    </div>
                </div>
            </>)}
        </div>
    )
}
