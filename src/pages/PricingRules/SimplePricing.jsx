import React, { useState } from 'react'
import './pricing.css'
export default function SimplePricing() {
    const [showColors, setShowColors] = useState(false)
    const handleColors = () => {
        setShowColors(!showColors)
    }
    return (
        <div className="left_wrapper pt-5">
            <div className="wrapper_header">
                <div className="wraper_header_title text-bold">Pricing Rules</div>
            </div>
            <div className="pricing_rules_section">
                <h6><b>Simple Pricing</b></h6>
                <hr className='m-0' />
            </div>
            <div className="main_container_pricing p-4">
                <div className="">
                    <h5>Select a product to add a price</h5>
                    <select className="add_theme_inner_container_select w-100 p-2">
                        <option value="Thumbnail">Select a product</option>
                        <option value="mug">Mug</option>
                        <option value="mug">Mug2</option>
                    </select>
                </div>
            </div>
            <div className="main_container_pricing p-4">
                <div className="">
                    <p>Standard Output Format</p>
                    <p>Base Price</p>
                    <div class="mb-4">
                        <input class="file_select_title p-2 w-100" placeholder='0' style={{ border: "1px solid #9C9C9C;" }} />
                    </div>
                    <div className="checkboxes d-flex mb-4">
                        <label class="list-group-item me-4">
                            <input class="form-check-input me-2 border border-secondary" type="checkbox" value="" onChange={() => handleColors()} />
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
                </div>
            </div>
            <div className="save_button text-end">
                <button className='btn btn-dark'>Save</button>
            </div>
        </div>
    )
}
