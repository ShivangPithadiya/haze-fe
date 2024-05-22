import React, { useState } from "react";
import axios from "axios";
import "./Login/Login.css";
import { toast } from "react-toastify";
const Signup = ({ handleChange }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shopifyaccesstoken, setShopifyaccesstoken] = useState("");
  const [shopifystoredomain, setShopifystoredomain] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [shopifyApiKey, setShopifyApiKey] = useState("");
  const [shopifyApiSecret, setShopifyApiSecret] = useState("");
  const [shopifyStoreDomain, setShopifyStoreDomain] = useState("");
  const [shopifyAccessToken, setShopifyAccessToken] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [userType, setUserType] = useState('store-owner');
  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      if (!email || !password || !name || !confirmPassword) {
        toast.error("Please provide all fields.");
        throw new Error("Please provide all fields.");
      }
      if (password !== confirmPassword) {
        toast.error("Passwords do not match.");
        throw new Error("Passwords do not match.");
      }
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/auth/register`,
        {
          name,
          email,
          userType,
          password,
          confirmPassword,
        }
      );
      console.log("Signup successful", response.data);
      handleChange("login");
    } catch (error) {
      console.error("Signup error", error.message);
    }
  };
  return (
    <div className="signup">
      <div className="login_div">Sign Up</div>
      <div>
        <label className="label_div">Name*</label>
        <div className="input-div">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name*"
            value={name}
          />
        </div>
      </div>
      <div>
        <label className="label_div">Email*</label>
        <div className="input-div">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email*"
            value={email}
          />
        </div>
      </div>
      {/* <div className="usertype">
        <label className="label_div">User Type</label>
        <div className="input-div border d-flex justify-content-between">
          {" "}
          <select
            id="userType"
            value={userType}
            onChange={handleUserTypeChange}
          >
            <option value="retail-user">Retail User</option>
            <option value="admin">Admin</option>
            <option value="super-admin">Super Admin</option>
          </select>
        </div>
      </div> */}
      <div>
        <label className="label_div">Password*</label>
        <div className="input-div border d-flex justify-content-between">
          {" "}
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password*"
            value={password}
          />
        </div>
      </div>
      <div>
        <label className="label_div">Confirm Password*</label>
        <div className="input-div border d-flex justify-content-between">
          {" "}
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm Password*"
            value={confirmPassword}
          />
        </div>
      </div>
      {/* <div>
        <label className="label_div">Shopify Api Key*</label>
        <div className="input-div">
          <input
            onChange={(e) => setShopifyApiKey(e.target.value)}
            type="text"
            placeholder="Shopify Api Key*"
            value={shopifyApiKey}
          />
        </div>
      </div>  <div>
        <label className="label_div">Shopify Api Secret*</label>
        <div className="input-div">
          <input
            onChange={(e) => setShopifyApiSecret(e.target.value)}
            type="text"
            placeholder="Shopify Api Secret*"
            value={shopifyApiSecret}
          />
        </div>
      </div>  <div>
        <label className="label_div">Shopify Store Domain*</label>
        <div className="input-div">
          <input
            onChange={(e) => setShopifyStoreDomain(e.target.value)}
            type="text"
            placeholder="Name*"
            value={shopifyStoreDomain}
          />
        </div>
      </div> <div>
        <label className="label_div">Shopify Access Token*</label>
        <div className="input-div">
          <input
            onChange={(e) => setShopifyAccessToken(e.target.value)}
            type="text"
            placeholder="Name*"
            value={shopifyAccessToken}
          />
        </div>
      </div> */}
      <div className="d-flex">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          style={{ marginRight: "8px" }}
        />
        <span className="already_member">
          {" "}
          I agree to all statements in <span>Terms of Service</span>
        </span>
      </div>
      <button className="mt-3" onClick={handleSignUp}>
        Sign up
      </button>
      <div
        className="already_member mt-3"
        onClick={() => handleChange("login")}
      >
        {" "}
        <span>I’m already a member</span>
      </div>
    </div>
  );
};
export default Signup;