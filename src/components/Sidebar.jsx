import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Link } from "react-router-dom"; // Import Link from react-router-dom
import svg1 from "../../public/assets/Image/Orders.svg";
import { signOut } from "firebase/auth";
import { logoutUser } from "../features/userSlice";
import { auth } from "../firebase";
import { clearAccessToken } from "../features/authSlice";
const Sidebar = ({ isSidebarOpen, closeNav }) => {
  const userType = useSelector((state) => state.user.user.userType);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/dashboard");
  const [isMobile, setIsMobile] = useState(false);
  const user = useSelector((state) => state.user.user);
  const [profileImage, setProfileImage] = useState("assets/Image/Avatar.png");

  const menu = {
    admin: [
      { name: "Orders", url: "/orders", icon: "assets/Image/Orders.svg" },
      { name: "Products", url: "/my-products", icon: "assets/Image/My Products.svg" },
      { name: "Pricing Rules", url: "/pricing-rules", icon: "assets/Image/Pricing Rules.svg" },
      { name: "Theme Builder", url: "/theme-selector", icon: "assets/Image/Theme Builder.svg" },
      { name: "Printing Methods", url: "/printing-methods", icon: "assets/Image/Printing Methods.svg" },
      { name: "Saved Designs", url: "/saved-designs", icon: "assets/Image/Saved Designs.svg" },
    ],
    "retail-user": [
      { name: "Orders", url: "/orders", icon: "assets/Image/Orders.svg" },
      { name: "Products", url: "/my-products", icon: "assets/Image/My Products.svg" },
      { name: "Pricing Rules", url: "/pricing-rules", icon: "assets/Image/Pricing Rules.svg" },
    ],
    "super-admin": [
      { name: "Subscriptions", url: "/subscriptions", icon: "src/assets/Image/subscriptions.svg" },
    ],
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Update profile image from localStorage
  
    const user= JSON.parse(localStorage.getItem("user"));
    const storedProfileImage = user?.profileImage;

    if (storedProfileImage) {
      setProfileImage(storedProfileImage);
    }
  }, []);

  const toggleUserDropdown = () => {
    var userDropdownOptions = document.getElementById("userDropdownOptions");
    userDropdownOptions.style.display =
      userDropdownOptions.style.display === "block" ? "none" : "block";
  };

  const dispatch = useDispatch();
  const handelLogout = () => {
    localStorage.removeItem('customizerData');
    dispatch(logoutUser());
    dispatch(clearAccessToken());
    signOut(auth);
    localStorage.clear();
    window.history.replaceState({}, document.title, window.location.pathname);
  };
  return (
    <>
      <div className={`sider_baar ${isMobile ? "mobile" : "desktop"} ${isSidebarOpen ? "open" : "close"}`}>
        <div className="sidebar_menu_section">
          <a className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <ul className="sidebar_menu">
            <li className="sidebar_list">
              <Link to="/dashboard" className={activeLink === "/dashboard" ? "active" : ""}>
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/home.svg" alt="Home" />
                </span>
                <span className={`sidebar_menu_name mt-2 px-2 ${activeLink === "/dashboard" ? "active_list" : ""}`}>
                  Dashboard
                </span>
              </Link>
            </li>
            {/*sidebar */}
            {
              <>
                {menu[userType].map((item, index) => (
                  <li key={index} className="sidebar_list">
                    <Link to={item.url} className={activeLink === item.url ? "active" : ""}>
                      <span className="sidebar_menu_icon">
                        <img src={item.icon} alt={item.name} />
                      </span>
                      <span className={`sidebar_menu_name mt-2 px-2 ${activeLink === `/${item.url}` ? "active_list active" : ""
                        }`}>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </>
            }

          </ul>

          {/* Go to profile */}
          <div className="user_profile_sectiion">
            {userType === 'super-admin' ?
              <li className="sidebar_list mb-4">
                <Link to='#' onClick={handelLogout}>
                  <span className="sidebar_menu_name mt-2 px-2">Logout</span>
                </Link>
              </li>
              :
              <>
                <li className="sidebar_list mb-4">
                  <Link to='/settings' className={activeLink === '/settings' ? "active" : ""}>
                    <span className="sidebar_menu_icon">
                      <img src='assets/Image/Settings.svg' alt='Settings' />
                    </span>
                    <span className={`sidebar_menu_name mt-2 px-2 ${activeLink === '/settings' ? "active_list active" : ""
                      }`}>Settings</span>
                  </Link>
                </li>




                <div className="user_profile">
                  <div className="custom-user-dropdown">
                    <img className="user-avatar" src="assets/Image/Avatar.png" alt="User Avatar" />
                    <div className="user_profile">
                      <div className="user-name">{user.name}</div>
                      <div className="user_roll">{user.userType}</div>
                    </div>
                    <div className="custom-user-dropdown-toggle" onClick={toggleUserDropdown}>
                      <img src="./public/assets/Image/Dropdown.svg" alt="Dropdown" />
                    </div>
                    <div className="custom-user-dropdown-options" id="userDropdownOptions">
                      <Link to="/your-profile">
                        <span>
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* SVG Path */}
                          </svg>
                        </span>
                        Your Profile
                      </Link>
                      <a href="#">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            {/* SVG Path */}
                          </svg>
                        </span>
                        Help Center
                      </a>
                      <a href="#">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill=""
                          >
                            {/* SVG Path */}
                          </svg>
                        </span>
                        Logout
                      </a>
                    </div>
                  </div>
                </div>
              </>
            }
          </div>

        </div>
      </div>
    </>
  );
};

export default Sidebar;
