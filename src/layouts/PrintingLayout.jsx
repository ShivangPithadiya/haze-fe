import React from 'react';
import Header from "../pages/PricingRules/Header.jsx"
import Sidebar from '../pages/PricingRules/Sidebar.jsx';
const PrintingLayout = ({ children }) => {
    return (
        <>
            <main id="main_section dashboard_main_section">
                <Header />
                <section className="wrapper_section">
                    <Sidebar />
                    {children}
                </section>
            </main>
        </>
    )
}

export default PrintingLayout