import React, { useEffect, useState } from 'react';
import "./Header.css"
import { FaRegEye } from "react-icons/fa";
import { setLayerData, customizeProduct, setActiveLayerId, setActiveLayerData, setSaveImage } from '../../features/customizeProductSlice';
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import InitialData from '../../components/themebuilder/InitialData';
import axios from "axios"
const Header = () => {
	const productCustomizerData = useSelector((state) => state.customizeProduct);
	const product_name = useSelector((state) => state.customizeProduct.product_name);
	const Data = useSelector((state) => state.customizeProduct.layerData);
	const [Layer, setLayer] = useState(Data);
	const [isPopupOpen, setPopupOpen] = useState(false);
	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [showResetModal, setShowResetModal] = useState(false);
	const [showModal1, setShowModal1] = useState(false);
	const navigate = useNavigate();
	const [layerData, setLayerData] = useState();
	const user = useSelector((state) => state.user.user);

	

	useEffect(() => {
		setLayerData(Data);
		setLayer(Data)
	}, [Data]);

	const togglePopup = () => {
		setPopupOpen(!isPopupOpen);
	};
	const toggleDropdown = () => {
		setDropdownOpen(!isDropdownOpen);
	};
	const handlePriview = () => {
		const url = "/product-preview";
		window.open(url, "_blank");
		window.location.reload();
	}
	const product = {
		"id": productCustomizerData.activeLayerId,
		"title": product_name, //In UI also it is static
		"body_html": null, //no idea
		"vendor": "hazetest",
		"product_type": "", // how many product types are there, is there any enum for that
		"created_at": "2024-04-08T04:33:23-04:00", //on save onClick
		"handle": "shopify-order-test-data", //no idea
		"updated_at": "2024-04-08T04:33:23-04:00", //have to work upon edit page for that
		"published_at": "2024-04-08T04:33:23-04:00", // publish onclick
		"template_suffix": null,
		"published_scope": "global",
		"tags": "",
		"status": "active", //enum required
		"admin_graphql_api_id": "gid://shopify/Product/9028161863963",
		"variants": [
			{
				"id": 48267578474779,
				"product_id": 9028161863963,
				"title": product_name,
				"price": "0.00",
				"sku": "",
				"position": 1,
				"inventory_policy": "deny",
				"compare_at_price": null,
				"fulfillment_service": "manual",
				"inventory_management": null,
				"option1": "Default Title",
				"option2": null,
				"option3": null,
				"created_at": "2024-04-08T04:33:23-04:00",
				"updated_at": "2024-04-08T04:33:23-04:00",
				"taxable": true,
				"barcode": null,
				"grams": 0,
				"weight": 0,
				"weight_unit": "kg",
				"inventory_item_id": 50318007992603,
				"inventory_quantity": 0,
				"old_inventory_quantity": 0,
				"requires_shipping": true,
				"admin_graphql_api_id": "gid://shopify/ProductVariant/48267578474779",
				"image_id": null
			}
		],
		"options": [
			{
				"id": 11389241262363,
				"product_id": 9028161863963,
				"name": "Title", //product_name
				"position": 1,
				"values": [
					"Default Title" //product_name
				]
			}
		],
		"images": [],
		"image": null
	}
	const data = {
		"layerId": productCustomizerData.activeLayerId,
		"inputType": "text",
		"displayType": "banner",
		"title": "Example Image",
		"thumbnailType": false,
		"labelType": true,
		"imageName": "example.jpg",
		"images": [
			{
				"id": "img1",
				"layerId": "layer123",
				"imageName": "example1.jpg",
				"url": "https://example.com/image1.jpg"
			},
			{
				"id": "img2",
				"layerId": "layer123",
				"imageName": "example2.jpg",
				"url": "https://example.com/image2.jpg"
			}
		],
		"colors": [
			{
				"id": "color1",
				"layerId": "layer123",
				"colorName": "Red",
				"color": "#FF0000"
			},
			{
				"id": "color2",
				"layerId": "layer123",
				"colorName": "Blue",
				"color": "#0000FF"
			}
		],
		"textName": "Example Text",
		"text": [
			{
				"id": "text1",
				"layerId": "layer123",
				"textName": "Text 1",
				"imageText": "Lorem ipsum dolor sit amet"
			},
			{
				"id": "text2",
				"layerId": "layer123",
				"textName": "Text 2",
				"imageText": "consectetur adipiscing elit"
			}
		]
	}
	const handlePublishToast = () => {
		toast.success("The draft was successfully published!");
	}
	const PublishProduct = async () => {
		const shopifyStoredomain = user?.shopifystoredomain;
		const shopifyaccesstoken = user?.shopifyaccesstoken;

		if (!product_name.trim()) {

			alert("Please fill in the product name.");
			return;
		}
		const updatedLayerData = {
			
			title: product_name,
			layerdata: Layer.map(layer => ({ ...layer })) // Create a shallow copy of each layer object
		};
		setShowModal1(true);
		// Iterate through layers
	
		console.log("updatedLayerData", updatedLayerData);
		// SelectedId get from localstorage

		const Productselectedid = localStorage.getItem('SelectedId');
		console.log('Productselectedid', Productselectedid);
	//if productselctedid is not null then update the product

		if (Productselectedid !== null && Productselectedid !== undefined && Productselectedid !== "" && Productselectedid !== "undefined" && Productselectedid !== "null") {
			axios.patch(`${import.meta.env.VITE_APP_API_URL}/data/ProductData/${Productselectedid}`, updatedLayerData)
				.then((response) => {
					console.log("Data sent successfully to layerdata:", response.data);
					const DataUpdated = {
						_id: response.data._id,
						title: product_name,
						layerdata: Layer.map(layer => ({ ...layer }))
					}
					axios.patch(`${import.meta.env.VITE_APP_API_URL}/data/layerdata/${Productselectedid}`, DataUpdated)
						.then((response) => {
							console.log("Data sent successfully to layerdata:", response.data);
						
									
									setShowModal1(false);
									toast.success("The product was successfully published!");
									})
								
						})
				
				.catch((error) => {
					console.error("Error sending data to layer data:", error);
					setShowModal1(false);
					toast.error("There is a issue to publish product!");
				});
		}
		else {
			//if productselctedid is null then create the product

			const shopifyStoredomain = user?.shopifystoredomain;
			const shopifyaccesstoken = user?.shopifyaccesstoken;
        axios.post(`${import.meta.env.VITE_APP_API_URL}/shopify/products`, product,
				{
					headers: {
						"shopifyStoredomain": shopifyStoredomain,
						"shopifyaccesstoken": shopifyaccesstoken
					}
				}
			)
			.then((response) => {
					console.log("Sending data to Shopify:", response.data);
					// Update product ID in layer data
					const d1={
						_id: response.data.product.id,
						...updatedLayerData
					}
					console.log("Updated Layer Data:", updatedLayerData);


		axios.post(`${import.meta.env.VITE_APP_API_URL}/data/ProductData`, d1)
						.then((response) => {

							console.log("Data sent successfully to layerdata:", response.data);
							InitialData.pid = response.data._id;
						  InitialData.ProductDetails.productName = response.data.title;
							InitialData.ProductDetails.productId = response.data._id;
	
							const authToken = localStorage.getItem('token');
							axios.post(`${import.meta.env.VITE_APP_API_URL}/data/customizer`, InitialData, {
							headers: {
								Authorization: `Bearer ${authToken}`
							}
							})
							const DataUpdated ={
								_id: response.data._id,
								title: product_name,
			layerdata: Layer.map(layer => ({ ...layer }))
							}
								axios.post(`${import.meta.env.VITE_APP_API_URL}/data/layerdata`, DataUpdated )
								.then((response) => {
									console.log("Data sent successfully to layerdata:", response.data);
				
		
						setShowModal1(false);
						toast.success("The product was successfully published!");
						navigate('/product-pricing-details')

			
			
					}
				)
						})
			.catch((error) => {
				console.error("Error sending data to layer data:", error);
				setShowModal1(false);
				toast.error("There is a issue to publish product!");
			});
		}
	)
		.catch((error) => {
			console.error("Error sending data to shopify:", error);
			setShowModal1(false);
			toast.error("There is a issue to publish product!");
		});
	}

	};
	
	const handleClose = () => {
		setShowModal(false)
		setShowResetModal(false)
		navigate("/my-products");

	};
	const handleClosebtn = () => {setShowModal(false); setShowResetModal(false)}
	const handleClosebtn1 = () => setShowModal1(false);
	const handleShow = () => setShowModal(true);
	const handleResetShow = () => setShowResetModal(true);

	const handleSaveDraft = async () => {
		if (!product_name.trim()) {

			alert("Please fill in the product name.");
			return;
		}
		const updatedProduct = {
			title: product_name,
			layerdata: Layer.map(layer => ({ ...layer })),
			status: "inactive"
		};
setShowModal1(true);
		for (const layer of updatedLayerData.layerdata) {
			// Check if display type is image
			if (layer.dispalyType === "Image") {
				console.log("Image Thumbnail:", layer.Thumbailimage);
				console.log("Images:", layer.images);
				// Upload thumbnail image to Cloudinary and update URL
				try {
					const thumbnailUrl = await imgToCloudinary(layer.Thumbailimage);
					layer.Thumbailimage = thumbnailUrl; // Update thumbnail URL in copied layer object
					console.log("Thumbnail uploaded to Cloudinary:", thumbnailUrl);
				} catch (error) {
					// Handle error
					console.error("Error uploading thumbnail to Cloudinary:", error);
				}
				// Upload each image in layer.images to Cloudinary and update the array
				layer.images = await Promise.all(layer.images.map(async (image) => {
					try {
						const imageUrl = await imgToCloudinary(image.url);
						return { ...image, url: imageUrl }; // Create a new object with updated URL
					} catch (error) {
						// Handle error
						console.error("Error uploading image to Cloudinary:", error);
						return image; // Return the original image object if an error occurs
					}
				}));
				console.log("Images uploaded to Cloudinary:", layer.images);
			}
		}
		axios.post(`${import.meta.env.VITE_APP_API_URL}/data/ProductData`, updatedProduct)
			.then((response) => {
				console.log("Draft saved successfully:", response.data);
				navigate("/my-products");
				setShowModal1(false);

			})
			.catch((error) => {
				console.error("Error sending data to shopify:", error);
				setShowModal1(false);
			});


	};
	return (
		<header className="Haze_header">
			<div className="logo_section">
				<div className="logo">
					<a href="/dashboard">
						<img src="../../assets/Image/logo/Haze Logo 1 (1).png" alt="Logo" />
					</a>
				</div>
			</div>
			<div className="menu">
				<ul className="header_menu">
					<li className="header_menu_list">
						Build your product
						{/* SVG Code for arrow */}
						{" >"}
					</li>
					<li className="header_menu_list">
						Pricing Details
						{/* SVG Code for arrow */}
						{" >"}
					</li>
					<li className="header_menu_list">
						Review
						{/* SVG Code for arrow */}
						{" >"}
					</li>
					<li className="header_menu_list">
						Done!
						{/* SVG Code for arrow */}
						{" >"}
					</li>
				</ul>
			</div>
			<div className="right_header_Section">
				<button className="login_buttotn">Logic</button>
				<hr className='hr_product' />
				<button className="view_button " onClick={handlePriview}>
					<FaRegEye />
				</button>
				<button className="dropdown">
					<span className="popup-button" onClick={PublishProduct}>
						Next
					</span>
					{isPopupOpen && (
						<div id="popupContent" className="popup">
							<div className="popup_cont">
								<p className="suuccessully_msg">
									<img src="../Image/svg/success.svg" alt="Success" />
									The draft was successfully published
								</p>
								<div onClick={togglePopup}>
									{/* SVG Code for close icon */}
								</div>
							</div>
						</div>
					)}
					<span className="dropdown_bnt" onClick={toggleDropdown}>
						<span>
							<svg xmlns="http://www.w3.org/2000/svg"
								width="8"
								height="14"
								viewBox="0 0 8 14"
								fill="none"
							><path d="M1 1L7 7L1 13"
								stroke="#fff"
								stroke-width="2"
								stroke-linecap="round" /></svg>
						</span>
						{isDropdownOpen && (
							<div id="dropdownContent" className="dropdown-content p-0">
								<p onClick={handleShow} className='p-2 mb-0'>Discard</p>
								<p onClick={handleResetShow} className='mb-0 p-2 border-0'>Reset</p>

							</div>
						)}
					</span>
				</button>
			</div>
			{/* <ToastContainer position='top-center' /> */}
			<Modal show={showModal} onHide={handleClosebtn} centered>
				<Modal.Header closeButton>
					<Modal.Title>Confirm Action</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Do you want to save your changes as a draft, or discard them?</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleSaveDraft}>
						Save As Draft
					</Button>
					<Button variant="danger" onClick={handleClose}>
						Discard Changes
					</Button>
				</Modal.Footer>
			</Modal>
			<Modal show={showResetModal} onHide={handleClosebtn} centered>
				<Modal.Header closeButton>
					<Modal.Title>Confirm Action</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Do you want to save your changes as a draft, or discard them?</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleSaveDraft}>
						Save As Draft
					</Button>
					<Button variant="danger" onClick={handleClose}>
						Reset
					</Button>
				</Modal.Footer>
			</Modal>
			<Modal className='bg-white' show={showModal1} centered>
			
				<div className="progress">
    <div className="progress_item"></div>
</div>

				
				
				

			</Modal>
		</header>
	);
};
export default Header;