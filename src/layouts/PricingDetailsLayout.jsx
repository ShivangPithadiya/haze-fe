import React from 'react';
import HeaderPricing from "../pages/ProductCustomizer/HeaderPricing.jsx"
const ProductLayout = ({ children }) => {
	return (
		<>
			<main id="main_section dashboard_main_section">
				<HeaderPricing />
				<section className="wrapper_section">
					{children}
				</section>
			</main>
		</>
	)
}

export default ProductLayout