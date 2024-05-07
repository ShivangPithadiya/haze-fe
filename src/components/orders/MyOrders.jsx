import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import "../orders/myorder.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetState } from "../../features/customizeProductSlice";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const user = useSelector((state) => state.user.user);
      const dispatch = useDispatch();
  const navigate = useNavigate();

    useEffect(() => {
        const fetchOrders = async () => {
            const shopifyStoredomain = user?.shopifystoredomain;
            const shopifyaccesstoken = user?.shopifyaccesstoken;
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/shopify/orders`,
             {
                    headers: {
                       "shopifyStoredomain": `${shopifyStoredomain}`,
                        "shopifyaccesstoken": `${shopifyaccesstoken}`,
                    },
                });

                setOrders(response.data.orders);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };

        fetchOrders();
    }, []);

    // Filter orders based on search term and date range
    const filteredOrders = orders.filter(order => {
        const orderDate = new Date(order.created_at).getTime();
        const searchMatch = order.order_number && order.order_number.toString().includes(searchTerm);
        const dateMatch = (!startDate || orderDate >= new Date(startDate).getTime()) &&
                          (!endDate || orderDate <= new Date(endDate).getTime());
        return searchMatch && dateMatch;
    });

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };
      const handleNavigate = (productType) => {
    navigate(`/product-customizer?productType=${productType}`);
    dispatch(resetState());
  };

    return (
        <div className="left_wrapper">
            <div className="wrapper_header">
                <div className="wraper_header_title">Your Orders</div>
                <div className="wraper_button_section products_btn">
                    <button className="add_button ">View Demos</button>
                   
                         <button
            className="add_button dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            + Add Product{" "}
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
             <li onClick={() => handleNavigate("Minimal")}>
              <a className="dropdown-item">1 . Minimal</a>
            </li>
            <li onClick={() => handleNavigate("Complex")}>
              <a className="dropdown-item">2 . Complexion</a>
            </li>
          </ul>
                  
                </div>
            </div>
            <div className="main_container">
                <div className="my_orders_section">
                    <div className=" products_hr"></div>
                    <form className="orders_form">
                        <div className="orders_form_row">
                            <div className="order_form_col">
                                <div className="order_form_input_section gap-2">
                                    <div className="order_inner_col">
                                        <span className="date_title">Date from:</span>
                                        <div className="order_date order_input" id="dat_from">
                                            <input
                                                type="date"
                                                id="startDateInput"
                                                placeholder="dd/mm/yyyy"
                                                name="startDateInput"
                                                value={startDate}
                                                onChange={handleStartDateChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="order_inner_col">
                                        <span className="date_title">Date to:</span>
                                        <div className="order_date order_input" id="dat_from">
                                            <input
                                                type="date"
                                                id="endDateInput"
                                                placeholder="dd/mm/yyyy"
                                                name="endDateInput"
                                                value={endDate}
                                                onChange={handleEndDateChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order_form_col">
                                <div className="order_form_input_section">
                                    <div className="order_search_btn order_input" id="order_search">
                                        <input
                                            type="text"
                                            placeholder="Search by order number or tag"
                                            name="search"
                                            value={searchTerm}
                                            onChange={handleSearchChange}
                                        />
                                        <FaSearch />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className=" products_hr"></div>

                    <div className="order_data_table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Order Number</th>
                                    <th>Customer Email</th>
                                    <th>Financial Status</th>
                                    <th>Total Price</th>
                                    <th>Shipping Address</th>
                                    <th>Billing Address</th>
                                    <th>Line Items</th>
                                    {/* <th>Order Status URL</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {filteredOrders.map((order, index) => (
                                    <tr key={index}>
                                        <td>{new Date(order.created_at).toDateString()}</td>
                                        <td>{order.order_number}</td>
                                        <td>{order.customer.email}</td>
                                        <td>{order.financial_status}</td>
                                        <td>{order.current_total_price}</td>
                                        <td>{order.shipping_address.address1}, {order.shipping_address.city}, {order.shipping_address.province}, {order.shipping_address.country}, {order.shipping_address.zip}</td>
                                        <td>{order.billing_address.address1}, {order.billing_address.city}, {order.billing_address.province}, {order.billing_address.country}, {order.billing_address.zip}</td>
                                        <td>
                                            <ul>
                                                {order.line_items.map((item, i) => (
                                                    <li key={i}>{item.title}</li>
                                                ))}
                                            </ul>
                                        </td>
                                        {/* <td><a href={order.order_status_url}>View Order Status</a></td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
