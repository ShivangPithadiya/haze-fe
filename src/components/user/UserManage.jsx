import React, { useEffect, useState, useRef } from "react";
import './user.css'
const UserManage = () => {
    const [showModal, setShowModal] = useState(false)
    const handleUser = () => {
        setShowModal(true)
    }
    const handleClose = () => {
        setShowModal(false)
    }
    return (
        <div className="left_wrapper">
            <div className="wrapper_header mb-3">
                <div className="wraper_header_title">User Management</div>
                <button className="bg-dark text-white p-2 rounded" onClick={handleUser}>+ Add User</button>
            </div>
            <hr className="m-0" />
            <div className="user-content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <span>
                                <img src="/src/assets/Image/user-management.svg" alt="" />
                            </span>
                            <p>There’s no user added yet</p>
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
                                            <div className='mb-2 d-flex'><h5>Invite People to this Project</h5>
                                                <button className=" btn-close rounded-pill btn-block" onClick={handleClose}></button>
                                            </div>
                                            <hr className="m-0"/>
                                            <div className="select_pricing d-flex align-items-center">
                                                <span className="sidebar_menu_icon m-2">
                                                    <img src="assets/Image/them/Layers.svg" />
                                                </span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserManage;








