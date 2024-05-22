import React, { useState, useEffect } from "react";
import Chart from "./Chart";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetState } from "../../features/customizeProductSlice";
import { signOut } from "firebase/auth";
import { logoutUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import { clearAccessToken } from "../../features/authSlice";
const DashboardMain = (props) => {
  const user = useSelector((state) => state.user.user);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [domain, setDomain] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const shopifyStoredomain = user?.shopifystoredomain;
  const shopifyaccesstoken = user?.shopifyaccesstoken;
  const [orders, setOrders] = useState([]);
  console.log("first", user);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!shopifyStoredomain) {
        setShowModal(true);
        return;
      }
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}/shopify/orders`,
          {
            headers: {
              shopifyStoredomain: `${shopifyStoredomain}`,
              shopifyaccesstoken: `${shopifyaccesstoken}`,
            },
          }
        );
        setOrders(response.data.orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  console.log("Orders:", orders);

  let totalOrdersInRs = 0;
  let totalOrdersLength = 0;
  let averageOrderValue = 0;
  let growthRate = 0;

  if (Array.isArray(orders) && orders.length > 0) {
    totalOrdersInRs = orders.reduce((total, order) => {
      const amount = parseFloat(order.current_total_price || 0);
      return total + amount;
    }, 0);
    totalOrdersLength = orders.length;
    averageOrderValue = totalOrdersInRs / totalOrdersLength;
    const previousYearTotalOrders = 1000;
    growthRate =
      ((totalOrdersLength - previousYearTotalOrders) /
        previousYearTotalOrders) *
      100;
  }
  const [monthlySalesData, setMonthlySalesData] = useState([]);
  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (Array.isArray(orders) && orders.length > 0) {
      console.log("Orders:", orders);
      const salesData = Array.from({ length: 12 }, (_, i) => {
        const monthSales = orders.filter((order) => {
          const orderDate = new Date(order.created_at);
          return orderDate.getMonth() === i;
        });
        return monthSales.length;
      });
      setMonthlySalesData(salesData);
    }
  }, [orders]);

  const handleNavigate = (productType) => {
    navigate(`/product-customizer?productType=${productType}`);
    localStorage.setItem("SelectedId", "null");
    localStorage.setItem("SelectedCustomizerData", JSON.stringify([]));
    dispatch(resetState());
  };

  const handlePlatformChange = (e) => {
    setSelectedPlatform(e.target.value);
  };

  const handleDomainChange = (e) => {
    setDomain(e.target.value);
  };
  const handelAdd = async () => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_APP_API_URL}/profile/updateuser`,
        {
          id: user._id,
          shopifystoredomain: domain,
        }
      );
      if (response.data.success) {
        setShowModal(false);
        localStorage.removeItem("customizerData");
        dispatch(logoutUser());
        dispatch(clearAccessToken());
        signOut(auth);
        localStorage.clear();
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );

      } else {
        console.error("Failed to update user:", response.data.message);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="left_wrapper" style={{ paddingTop: "20px" }}>
      <div className="wrapper_header p-4 pb-0">
        <div className="wraper_header_title">
          Your Dashboard
          <div className="wraper_header_sub_title">
            Welcome back, {user.name} !
          </div>
        </div>

        <div className="wraper_button_section">
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

      <div className="Dashboard_info_section">
        <div className="dashboard_info_row">
          <div className="dashoard_col">
            <div className="dashboard_info_icon">
              <img src="assets/Image/deshboard/site.svg" />
            </div>
            <div className="dashboard_info_body">
              <div className="dashboard_info_cont fw-bold">
                <span className="dashboard_info_input">Site plan:</span>
                <span className="dashboard_info_out_put">Essential</span>
              </div>
              <div className="dashoard_info_tag fw-bold">Manage Plan</div>
            </div>
          </div>

          <div className="dashoard_col align-items-center">
            <div className="dashboard_info_icon">
              <img src="assets/Image/deshboard/Sales.svg" />
            </div>
            <div className="dashboard_info_body">
              <div className="dashboard_info_cont fw-bold">
                <span className="dashboard_info_input">Sales channel:</span>
                <span className="dashboard_info_out_put">Shopify</span>
              </div>
              <div className="dashoard_info_tag fw-bold">Change Sales Channel</div>
            </div>
          </div>

          <div className="dashoard_col align-items-center">
            <div className="dashboard_info_icon">
              <img src="assets/Image/deshboard/web.svg" />
            </div>
            <div className="dashboard_info_body">
              <div className="dashboard_info_cont">
                <span className="dashboard_info_input fw-bold">Domain:</span>
                <a
                  href={"https://" + shopifyStoredomain}
                  // shopifyStoredomain
                  className="d-flex fw-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="dashboard_info_out_put">
                    https://{shopifyStoredomain}
                  </span>
                  <span className="info_web_icon">
                    {" "}
                    <img src="assets/Image/deshboard/link.svg" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main_container">
        <div className="home_section">
          <div className="analytic_home_Section">
            <div>
              <div className="home_section_title">Analytics</div>
              <div className="Analytics_info_data">
                <span className="Analytics_info_title">
                  Your key stats for{" "}
                </span>
                <span className="Analytics_info_calendar">
                  <img src="assets/Image/deshboard/calendar 1.svg" /> Last year
                </span>
                <span className="Analytics_info_date">
                  compared to Jan 1 - Dec 31, 2023
                </span>
              </div>
            </div>
            <div className="analytic_view_all">
              <a href="/orders">View All Orders</a>
            </div>
          </div>
          <div className="homw_section_row">
            <div className="home_section_card">
              <div className="home_section_card_title">Total Earnings</div>
              <div className="home_section_card_body">
                <div className="home_section_card_cont">
                  <div className="home_ection_card_value">
                    <span className="currency_icon">$</span>
                    <span className="currency_valuue">
                      {totalOrdersInRs.toFixed(2)}
                    </span>
                  </div>
                  <div className="home_range home_range_down">
                    <span className="range_icon">
                      <img src="assets/Image/deshboard/do-arrow-Recovered 2.svg" />
                    </span>
                    <span className="range_value">
                      {(((totalOrdersLength - 1000) / 1000) * 100).toFixed(2)}%
                    </span>
                  </div>
                </div>
                <div className="range_graph">
                  <img src="assets/Image/deshboard/rangegraph.svg" />
                </div>
              </div>
            </div>
            <div className="home_section_card">
              <div className="home_section_card_title">Total Orders</div>
              <div className="home_section_card_body">
                <div className="home_section_card_cont">
                  <div className="home_ection_card_value">
                    <span className="currency_icon">+</span>
                    <span className="currency_valuue">{totalOrdersLength}</span>
                  </div>
                  <div className="home_range home_range_up">
                    <span className="range_icon">
                      <img src="assets/Image/deshboard/up-arrow 5.svg" />
                    </span>
                    <span className="range_value">8%</span>
                  </div>
                </div>
                <div className="range_graph">
                  <img src="assets/Image/deshboard/rangegraph.svg" />
                </div>
              </div>
            </div>
            <div className="home_section_card">
              <div className="home_section_card_title">Average Order Value</div>
              <div className="home_section_card_body">
                <div className="home_section_card_cont">
                  <div className="home_ection_card_value">
                    <span className="currency_valuue">
                      {averageOrderValue.toFixed(2)}
                    </span>
                  </div>
                  <div className="home_range home_range_up">
                    <span className="range_icon">
                      <img src="assets/Image/deshboard/up-arrow 5.svg" />
                    </span>
                    <span className="range_value">8%</span>
                  </div>
                </div>
                <div className="range_graph">
                  <img src="assets/Image/deshboard/rangegraph.svg" />
                </div>
              </div>
            </div>
            <div className="home_section_card">
              <div className="home_section_card_title">Growth Rate</div>
              <div className="home_section_card_body">
                <div className="home_section_card_cont">
                  <div className="home_ection_card_value">
                    <span className="currency_valuue">
                      {growthRate.toFixed(2)}%
                    </span>
                  </div>
                  <div className="home_range home_range_down">
                    <span className="range_icon">
                      <img src="assets/Image/deshboard/do-arrow-Recovered 2.svg" />
                    </span>
                    <span className="range_value">4%</span>
                  </div>
                </div>
                <div className="range_graph">
                  <img src="assets/Image/deshboard/rangegraph.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home_section2">
          <div className="homw_section_row">
            <div className="home_section_col recentorderdiv">
              <div className="home_section_title">Recent Orders</div>
              <div className="data_scroll_bar">
                <div className="data_scroll">
                  {orders.slice(0, 5).map((order, index) => (
                    <div className="home_Recent_Orders_section" key={index}>
                      <div className="home_recnet_orders_row">
                        <div className="home_recnet_orders_col">
                          <div className="home_recnet_orders_tag">
                            #{order.order_number} {order.line_items[0].title}
                          </div>
                          <div className="home_recnet_orders_info">
                            {/* Format the date accordingly */}
                            {order.created_at} {order.line_items.length} item(s)
                          </div>
                        </div>
                        <div className="home_recnet_orders_col">
                          <div className="home_recnet_orders_status">
                            {order.financial_status}
                          </div>
                          <div className="home_recnet_orders_amount">
                            ${order.current_total_price}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="home_section_col totalsalediv">
              <div className="home_section_title">Total Sales</div>
              <div>
                <Chart monthlySalesData={monthlySalesData} />
              </div>
            </div>
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
                      <div className="mb-2 d-flex justify-content-between">
                        <h5>Add your Shop Domain</h5>
                        <button
                          className="btn-close rounded-pill btn-block"
                          onClick={handleClose}
                        ></button>
                      </div>
                      <hr className="m-0 mb-3" />
                      <div className="select_pricing">
                        <div className="mb-4">
                          <label>Enter Your Platform</label>
                          <select
                            className="file_select_title p-2 w-100 rounded mt-2"
                            style={{ border: "1px solid #9C9C9C" }}
                            value={selectedPlatform}
                            onChange={handlePlatformChange}
                          >
                            <option value="">Select a platform</option>
                            <option value="Shopify">Shopify</option>
                            <option value="WooCommerce">WooCommerce</option>
                          </select>
                        </div>
                        {selectedPlatform && (
                          <div className="mb-4">
                            <label>Enter Your {selectedPlatform} Domain</label>
                            <div class="input-group mt-3">
                              <div class="input-group-prepend">
                                <span
                                  class="input-group-text"
                                  style={{
                                    borderRadius: "5px 0px 0px 5px",
                                  }}
                                >
                                  https://
                                </span>
                              </div>

                              <input
                                type="text"
                                className="aq1w1P file_select_title p-2  rounded "
                                style={{
                                  border: "1px solid #9C9C9C",

                                  width: "270px",
                                  height: "38px",
                                }}
                                value={domain}
                                onChange={handleDomainChange}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="buttons">
                        <button
                          className="btn border-dark button_close"
                          onClick={handleClose}
                        >
                          Cancel
                        </button>
                        <button className="btn btn-dark" onClick={handelAdd}>
                          Add
                        </button>
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

export default DashboardMain;
