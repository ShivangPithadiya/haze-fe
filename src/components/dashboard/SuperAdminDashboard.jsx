import React, { useState, useEffect, useRef } from "react";
import Chart from "./Chart";
import BarChart from "./BarChart";
import axios from "axios";
import { useSelector } from "react-redux";
const SuperAdminDashboard = (props) => {
    const user = useSelector(state => state.user.user)
    const [orders, setOrders] = React.useState([]);
    useEffect(() => {
        const fetchOrders = async () => {
            const shopifyStoredomain = user?.shopifystoredomain;
            const shopifyaccesstoken = user?.shopifyaccesstoken;
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/shopify/orders`,
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
        growthRate = ((totalOrdersLength - previousYearTotalOrders) / previousYearTotalOrders) * 100;
    }
    const [monthlySalesData, setMonthlySalesData] = useState([]);
    useEffect(() => {
        if (Array.isArray(orders) && orders.length > 0) {
            console.log("Orders:", orders);
            const salesData = Array.from({ length: 12 }, (_, i) => {
                const monthSales = orders.filter(order => {
                    const orderDate = new Date(order.created_at);
                    return orderDate.getMonth() === i;
                });
                return monthSales.length;
            });
            setMonthlySalesData(salesData);
        }
    }, [orders]);
    return (
        <div className="left_wrapper" style={{ paddingTop: "20px" }}>
            <div className="wrapper_header p-4 pb-0">
                <div className="wraper_header_title">
                    Your Dashboard
                </div>
            </div>
            <div className="main_container">
                <div className="home_section2">
                    <div className="homw_section_row">
                        <div className="home_section_col totalsalediv">
                            <div className="home_section_title">Total No. of Stores
                            </div>
                            <div>
                                <BarChart monthlySalesData={monthlySalesData} />
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="home_section2">
                    <div className="homw_section_row">
                        <div className="home_section_col totalsalediv">
                            <div className="home_section_title">Total Sales
                            </div>
                            <div>
                                <Chart monthlySalesData={monthlySalesData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SuperAdminDashboard;