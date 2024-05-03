import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

const Chart = ({ monthlySalesData }) => {
    console.log(monthlySalesData);
    // Assuming monthlySalesData is an array of sales data for each month
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        datasets: [
            {
                label: "Monthly Sales",
                data: monthlySalesData,
                fill: false,
                backgroundColor: "rgba(251.5, 81, 84)",
                borderColor: "rgba(251.5, 81, 84)",
                tension: 0.4,
                borderWidth: 5,
                pointBackgroundColor: 'rgba(255, 255, 255, 0.8)',
                pointHoverRadius: 5,
                pointRadius: 5,
                pointBorderWidth: 2,
            }
        ]
    };

    const options = {
        plugins: {
            legend: {
                display: false,
                position: 'chartArea'
            },
            tooltip: {
                enabled: true,
                intersect: false,
                mode: 'nearest',
                callbacks: {
                    title: function(tooltipItem) {
                        return 'Sales';
                    },
                    label: function(context) {
                        return ' ' + context.parsed.y;
                    },
                    labelColor: function(context) {
                        return {
                            borderColor: 'rgba(0,0,0,0)',
                            backgroundColor: 'rgba(0,0,0,0)'
                        };
                    }
                }
            }
        },
        scales: {
            xAxes: [
                {
                    type: "category",
                }
            ],
            x: {
                display: false, // Hide x-axis line
                grid: {
                    drawTicks: false,
                    drawOnChartArea:false
                },
            },
            y: {
                ticks: {
                    display: false
                },
                grid: {
                    drawTicks: false,
                },
                display: true, // Hide x-axis line
            },
        }
    };

    return (
        <div className="chart">
            <Line data={data} options={options} />
        </div>
    );
}

export default Chart;
