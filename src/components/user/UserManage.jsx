import React, { useEffect, useState } from "react";
import './user.css'
import axios from "axios";

const UserManage = () => {
    const [showModal, setShowModal] = useState(false);
    const [showDelete, setDelete] = useState(false);
    const [email, setEmail] = useState('');
    const [user, setUser] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/profile/super-admin/getlist`);
                setUser(response.data.storeOwners);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleUser = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setDelete(false);
    };

    const handleDeleteModal = (userId) => {
        setSelectedUserId(userId);
        setDelete(true);
    };

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`${import.meta.env.VITE_APP_API_URL}/profile/store-owner/${selectedUserId}`);

            if (response.status === 200) {
                console.log("User deleted successfully:", response.data);
                setUser(user.filter(user => user.id !== selectedUserId));
                setDelete(false);
            } else {
                console.error("Failed to delete user. Server responded with status:", response.status);
            }
        } catch (error) {
            console.error("Error deleting user:", error.message);
        }
    };

    const handleInvite = async () => {
        if (!email) {
            console.error("Error: Email data is missing.");
            return;
        }
        try {
            const update = { email };
            const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/email/invite`, update);

            if (response.status === 200) {
                console.log("Email sent successfully:", response.data);
                alert(response.data.message);
            } else {
                console.error("Failed to send email. Server responded with status:", response.status);
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Error sending email:", error.message);
            alert(error.message);
        }
    };

    const handleToggleStatus = async (e, id, index) => {
        try {
            const updatedUsers = [...user];
            const currentUser = updatedUsers[index];
            const newStatus = currentUser.status === 'active' ? 'inactive' : 'active';

            // Update the user's status locally
            updatedUsers[index].status = newStatus;
            setUser(updatedUsers);

            // Send the updated status to the server
            const response = await axios.put(
                `${import.meta.env.VITE_APP_API_URL}/profile/store-owner/${id}`,
                { user: updatedUsers[index] }
            );

            if (response.status === 200) {
                console.log(`User status updated successfully for user at index ${index}`);
                alert(`User status updated successfully for user at index ${index}`)

            } else {
                console.error(`Error updating user status for user at index ${index}:`, response);
            }
        } catch (error) {
            console.error('Error toggling status:', error);
        }
    };

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
                        {user.map((user, index) => (
                            <React.Fragment key={index}>
                                <div className="user_data d-flex justify-content-between mb-3">
                                    <div className="left_side d-flex">
                                        <img src="assets/Image/Avatar.png" alt="" />
                                        <div className="inner">
                                            <h5>{user.name}</h5>
                                            <p>{user.email}</p>
                                        </div>
                                    </div>

                                    <div className="right_side d-flex">
                                        <div className="form-check form-switch custom-toggle mx-4">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id={`flexSwitchCheckChecked${user._id}`}
                                                checked={user.status === 'active'}
                                                onChange={(e) => handleToggleStatus(e, user._id, index)}
                                            />
                                            <label className="form-check-label toggle-background" htmlFor={`flexSwitchCheckChecked${user._id}`}>
                                                <div className="toggle-handle"></div>
                                            </label>
                                        </div>
                                        <span onClick={() => handleDeleteModal(user._id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <hr className="m-0 mb-4" />
                            </React.Fragment>
                        ))}
                        {user.length === 0 && (
                            <div className="col-12 no_user">
                                <span className="ps-4">
                                    <img src="/src/assets/Image/user-management.svg" alt="" />
                                </span>
                                <p>There’s no user added yet</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="modal-over1">
                    <div className="modal-content1">
                        <div className="px-4 px-lg-0">
                            <div className="pb-5 modal-view">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 p-4 bg-white rounded shadow-sm">
                                            <div className='mb-2 d-flex justify-content-between'>
                                                <h5>Invite People to this Project</h5>
                                                <button className="btn-close rounded-pill btn-block" onClick={handleClose}></button>
                                            </div>
                                            <hr className="m-0 mb-3" />
                                            <div className="select_pricing">
                                                <div className="mb-4">
                                                    <label>Email address</label>
                                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="file_select_title p-2 w-100 rounded mt-2" style={{ border: "1px solid #9C9C9C" }} />
                                                </div>
                                            </div>
                                            <div className="buttons">
                                                <button className="btn border-dark button_close" onClick={handleClose}>Cancel</button>
                                                <button className="btn btn-dark" onClick={handleInvite}>Invite</button>
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
                                        <div className="col-12 p-4 bg-white rounded shadow-sm">
                                            <div className='mb-2 d-flex justify-content-between'>
                                                <h5>Remove Member</h5>
                                                <button className="btn-close rounded-pill btn-block" onClick={handleClose}></button>
                                            </div>
                                            <div className="remove_user">
                                                <div className="mb-4">
                                                    <p>You are about to remove a member which will not allow this person to login into your project anymore.</p>
                                                </div>
                                            </div>
                                            <div className="buttons">
                                                <button className="btn border-dark button_close" onClick={handleClose}>Keep Member</button>
                                                <button className="btn btn-dark" onClick={handleDelete}>Remove Member</button>
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
