import React, { useEffect, useState, useRef } from "react";
import './user.css'
const UserManage = () => {
    const [showModal, setShowModal] = useState(false)
    const [showDelete, setDelete] = useState(false)
    const [user, setUser] = useState('1')
    const handleUser = () => {
        setShowModal(true)
    }
    const handleClose = () => {
        setShowModal(false)
        setDelete(false)
    }
    const handleDelete = () => {
        setDelete(true)
    }
    return (
        <div className="left_wrapper">
            <div className="wrapper_header mb-3">
                <div className="wraper_header_title">User Management</div>
                <button className="bg-dark text-white p-2 rounded" onClick={handleUser}>+ Add User</button>
            </div>
            <hr className="m-0 mb-4" />
            <div className="user-content">
                <div className="container-fluid">
                    <div className="row mb-2">
                        {user.length > 0 ?
                            <>
                                <div className="user_data d-flex justify-content-between mb-3">
                                    <div className="left_side d-flex">
                                        <img src="assets/Image/Avatar.png" alt="" />
                                        <div className="inner">
                                            <h5>Myles Dickinson</h5>
                                            <p>myles.dickinson@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="right_side">
                                        <span onClick={handleDelete}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <hr className="m-0 mb-4" />
                                <div className="user_data d-flex justify-content-between  mb-3">
                                    <div className="left_side d-flex">
                                        <img src="assets/Image/Avatar.png" alt="" />
                                        <div className="inner">
                                            <h5>Myles Dickinson</h5>
                                            <p>myles.dickinson@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="right_side">
                                        <span onClick={handleDelete}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <hr className="m-0 mb-4" />
                                <div className="user_data d-flex justify-content-between  mb-3">
                                    <div className="left_side d-flex">
                                        <img src="assets/Image/Avatar.png" alt="" />
                                        <div className="inner">
                                            <h5>Myles Dickinson</h5>
                                            <p>myles.dickinson@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="right_side">
                                        <span onClick={handleDelete}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <hr className="m-0 mb-4" />
                            </> :
                            <>
                                <div className="col-12 no_user">
                                    <span>
                                        <img src="/src/assets/Image/user-management.svg" alt="" />
                                    </span>
                                    <p>There’s no user added yet</p>
                                </div>
                            </>
                        }


                    </div>
                </div>
            </div>
            {/* <hr className="m-0" /> */}
            {showModal && (
                <div className="modal-over1">
                    <div className="modal-content1">
                        <div className="px-4 px-lg-0">
                            <div className="pb-5 modal-view">
                                <div className="container">
                                    <div className="row">
                                        {/* w1x */}
                                        <div className="col-12 p-4 bg-white rounded shadow-sm">
                                            <div className='mb-2 d-flex justify-content-between'><h5>Invite People to this Project</h5>
                                                <button className=" btn-close rounded-pill btn-block" onClick={handleClose}></button>
                                            </div>
                                            <hr className="m-0 mb-3" />
                                            <div className="select_pricing ">
                                                <div class="mb-4">
                                                    <label >Email address</label>
                                                    <input type="email" class="file_select_title p-2 w-100 rounded mt-2" style={{ border: "1px solid #9C9C9C;" }} />
                                                </div>
                                            </div>
                                            <div className="buttons">
                                                <button className="btn border-dark button_close" onClick={handleClose}>Cancel</button>
                                                <button className="btn btn-dark" onClick={handleClose}>Invite</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showDelete && (
                <div className="modal-over1">
                    <div className="modal-content1">
                        <div className="px-4 px-lg-0">
                            <div className="pb-5 modal-view">
                                <div className="container">
                                    <div className="row modal_delete">
                                        {/* w1x */}
                                        <div className="col-12 p-4 bg-white rounded shadow-sm">
                                            <div className='mb-2 d-flex justify-content-between'><h5>Remove Member</h5>
                                                <button className=" btn-close rounded-pill btn-block" onClick={handleClose}></button>
                                            </div>
                                            {/* <hr className="m-0 mb-3" /> */}
                                            <div className="remove_user ">
                                                <div class="mb-4">
                                                    <p>You are about to remove a member which will not allow this person to login into your project anymore.</p>
                                                </div>
                                            </div>
                                            <div className="buttons">
                                                <button className="btn border-dark button_close" onClick={handleClose}>Keep Member</button>
                                                <button className="btn btn-dark" onClick={handleClose}>Remove Member</button>
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








