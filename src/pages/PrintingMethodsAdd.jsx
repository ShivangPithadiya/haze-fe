import React from "react";

const PrintingMethodsAdd = () => {
    return (
        <div className="left_wrapper pt-5">
            <div className="wrapper_header">
                <div className="wraper_header_title">Printing Methods </div>
                <div className="wraper_button_section products_btn  Printing_Methods_btn">
                    <button className="add_button ">View Demos</button>
                    <button
                        className="add_button dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        + Add Printing Method
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item" href="#">
                                View Themes
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Select a Theme
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                1 .Minimal
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                2 .Complexion
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="m-0" />
            <div clasclassNames="main_container">
                <div className="my_products">
                    <div className=" products_hr"></div>
                    <div className="main_container_pricing p-4 mb-4">
                        <div className="">
                            <h5>Name</h5>
                            <div class="mb-4">
                                <input class="file_select_title p-2 w-100" placeholder='Type  the print method name' style={{ border: "1px solid #9C9C9C;" }} />
                            </div>
                            <div className="checkboxes d-flex mb-4">
                                <label class="list-group-item me-4">
                                    <input class="form-check-input me-2 border border-secondary" type="checkbox" value="" />
                                    Pantone enabled
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="main_container_pricing p-4">
                        <h5>Print-Ready Files</h5>
                        <div className="border p-4 mb-3">
                            <p>Standard Output Format</p>
                            <div className="checkboxes d-flex">
                                <label class="list-group-item me-4">
                                    <input class="form-check-input me-2 border border-secondary" type="checkbox" value="" />
                                    SVG
                                </label>
                                <label class="list-group-item me-4">
                                    <input class="form-check-input me-2 border border-secondary" type="checkbox" value="" />
                                    PDF
                                </label>
                                <label class="list-group-item me-4">
                                    <input class="form-check-input me-2 border border-secondary" type="checkbox" value="" />
                                    PNG
                                </label>
                                <label class="list-group-item me-4">
                                    <input class="form-check-input me-2 border border-secondary" type="checkbox" value="" />
                                    DXF
                                </label>
                            </div>
                        </div>
                        <div className="border p-4 mb-3">
                            <p>DPI</p>
                            <div class="">
                                <input class="file_select_title p-2 w-50" placeholder='300' style={{ border: "1px solid #9C9C9C;" }} />
                            </div>
                        </div>
                        <div className="border toggle-back p-4 mb-3">
                            <div class="form-check form-switch">
                                <input class="form-check-input " type="checkbox" id="flexSwitchCheckChecked1" />
                                <label class="form-check-label" for="flexSwitchCheckChecked1">Get a single  print file for all print areas / sides.</label> <br />
                                <a href="#">Learn more</a>
                            </div>
                        </div>
                        <div className="border p-4 mb-3">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked2" />
                                <label class="form-check-label" for="flexSwitchCheckChecked2">Use a custom CMYK profile for PDF output</label> <br />
                                <a href="#">Learn more</a>
                            </div>
                        </div>
                        <div className="border p-4 mb-3">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked3" />
                                <label class="form-check-label" for="flexSwitchCheckChecked3">Mirrored print files</label> <br />
                                <a href="#">Learn more</a>
                            </div>
                        </div>
                        <div className="border p-4 mb-3">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked4" />
                                <label class="form-check-label" for="flexSwitchCheckChecked4">Replace color(s) in the final print-ready file.</label> <br />
                                <a href="#">Learn more</a>
                            </div>
                        </div>
                        <h5>Settings</h5>
                        <div className="border p-4 mb-3">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked5" />
                                <label class="form-check-label" for="flexSwitchCheckChecked5">Set a limit for the number of colours customers can use in a design</label> <br />
                                <a href="#">Learn more</a>
                            </div>
                        </div>
                        <div className="border p-4 mb-3">
                            <div class="form-check form-switch custom-toggle mb-4">
                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked6" checked />
                                <label class="form-check-label toggle-background" for="flexSwitchCheckChecked6">
                                    <div class="toggle-handle"></div>
                                </label>
                                <label class="form-check-label mx-2" for="flexSwitchCheckChecked6">Allow users to add text</label> <br />
                                <a href="#">Learn more</a>
                            </div>
                            <div className="checkbox_outer d-flex mb-3">
                                <div className="checkboxes">
                                    <label class="list-group-item me-4 mb-2">
                                        <input class="form-check-input me-2 border border-secondary" type="checkbox" value="" />
                                        Text Art
                                    </label>
                                    <label class="list-group-item me-4 mb-2">
                                        <input class="form-check-input me-2 border border-secondary" type="checkbox" value="" />
                                        Curved Text
                                    </label>
                                    <label class="list-group-item me-4 mb-2">
                                        <input class="form-check-input me-2 border border-secondary" type="checkbox" value="" />
                                        Italic
                                    </label>
                                </div>
                                <div className="checkboxes">
                                    <label class="list-group-item me-4 mb-2">
                                        <input class="form-check-input me-2 border border-secondary" type="checkbox" value="" />
                                        Text Box
                                    </label>
                                    <label class="list-group-item me-4 mb-2">
                                        <input class="form-check-input me-2 border border-secondary" type="checkbox" value="" />
                                        Bold
                                    </label>
                                    <label class="list-group-item me-4 mb-2">
                                        <input class="form-check-input me-2 border border-secondary" type="checkbox" value="" />
                                        Uppercase
                                    </label>
                                </div>
                            </div>
                            <div className="">
                                <p>Maximum number of text elements</p>
                                <div class="">
                                    <input class="file_select_title p-2 w-100" placeholder='Maximum number of text elements' style={{ border: "1px solid #9C9C9C;" }} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrintingMethodsAdd;
