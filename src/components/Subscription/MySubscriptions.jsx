import React, { useEffect, useState } from "react";
import './subscription.css'
import { FaSearch } from "react-icons/fa";
import { HiOutlineArrowNarrowDown, HiOutlineArrowNarrowUp } from "react-icons/hi";
import axios from "axios";

const MySubscriptions = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectAll = (event) => {
    const isChecked = event.target.checked;
    setSelectAll(isChecked);
    if (isChecked) {
      const allIndices = Array.from({ length: filteredUsers.length }, (_, i) => i);
      setSelectedRows(allIndices);
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowSelect = (index) => {
    let updatedSelectedRows;
    if (selectedRows.includes(index)) {
      updatedSelectedRows = selectedRows.filter((i) => i !== index);
    } else {
      updatedSelectedRows = [...selectedRows, index];
    }
    setSelectedRows(updatedSelectedRows);
    setSelectAll(updatedSelectedRows.length === filteredUsers.length);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}/profile/super-admin/getlist`
        );
        setUsers(response.data.storeOwners);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleToggleStatus = async () => {
    try {
      const updatedUsers = [...users];
      selectedRows.forEach((index) => {
        updatedUsers[index].status = updatedUsers[index].status === 'active' ? 'inactive' : 'active';
      });
      setUsers(updatedUsers);
      const promises = selectedRows.map(async (index) => {
        const response = await axios.put(
          `${import.meta.env.VITE_APP_API_URL}/profile/store-owner/${updatedUsers[index]._id}`,
          { user: updatedUsers[index] }
        );
        if (response.status === 200) {
          console.log(`User status updated successfully for user at index ${index}`);
          alert(`User status updated successfully for user at index ${index}`)
        } else {
          console.error(`Error updating user status for user at index ${index}:`, response);
        }
      });
      await Promise.all(promises);
    } catch (error) {
      console.error('Error toggling status:', error);
    }
  };

  console.log(users);
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="left_wrapper ">
      <div className="wrapper_header mb-4">
        <div className="wraper_header_title">Subscriptions</div>
        <button className="bg-dark text-white p-2 border rounded">+ Add Store Merchant</button>
      </div>

      <div className="main_container">
        <div className="my_products p-4 bg-white">
          <h5>Store Owner Details</h5>
          <div className="table_options">
            <div className="order_search_btn order_input " id="order_search">
              <span><FaSearch /></span>
              <input
                type="text"
                placeholder="Retailer Store Name"
                name="search"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <div className="order_search_btn sort_input order_input" id="order_search">
              <span>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path></svg></span>
              Sort
            </div>
          </div>

          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="gap-2 t_head">
                  <th scope="col" className="border-0">
                    <div className="p-2">
                      <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                    </div>
                  </th>
                  {[
                    { label: 'Sr. No.:', className: 'border-0', divClassName: 'p-2 ' },
                    { label: 'Retailer Store Name', className: 'border-0', divClassName: 'py-2' },
                    { label: 'Sales Channel', className: 'border-0 px-2', divClassName: 'py-2' },
                    { label: 'Domain Name', className: 'border-0 px-2', divClassName: 'py-2' },
                    { label: 'Store Sales', className: 'border-0 px-2', divClassName: 'py-2' },
                    { label: 'Subscription Plan', className: 'border-0 px-2', divClassName: 'py-2' },
                    { label: 'Activate/Deactivate', className: 'border-0 px-2', divClassName: 'py-2' },
                  ].map((column, index) => (
                    <th key={index} scope="col" className={column.className}>
                      <div className={column.divClassName}>{column.label}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((userData, index) => (
                    <tr className="t_body" key={index}>
                      <td className="border-0">
                        <div className="p-2">
                          <input
                            type="checkbox"
                            checked={selectAll || selectedRows.includes(index)}
                            onChange={() => handleRowSelect(index)}
                          />
                        </div>
                      </td>
                      <td className="border-0 p-2">{index + 1}.</td>
                      <td className="border-0 py-2">{userData.name}</td>
                      <td className="border-0 px-2 py-2">-</td>
                      <td className="border-0 px-2 py-2">{userData.shopifystoredomain}</td>
                      <td className="border-0 px-2 py-2">-</td>
                      <td className="border-0 px-2 py-2">-</td>
                      <td className="border-0">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={`flexSwitchCheckDefault-${index}`}
                            checked={userData.status === 'active'}
                            // onChange={handleToggleStatus}
                            readOnly
                          />
                          <label className="form-check-label" htmlFor={`flexSwitchCheckDefault-${index}`}></label>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8}><strong>No data found</strong></td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className="active_deactive">
              <button className="btn p-0 p-2" onClick={handleToggleStatus}>Activate | Deactivate</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySubscriptions;
