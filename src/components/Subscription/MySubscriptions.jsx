import React from "react";
import './subscription.css'
import { FaSearch } from "react-icons/fa";
import { HiOutlineArrowNarrowDown, HiOutlineArrowNarrowUp } from "react-icons/hi";
const MySubscriptions = () => {

  return (
    <div className="left_wrapper">
      <div className="wrapper_header mb-4">
        <div className="wraper_header_title">Subscriptions</div>

      </div>

      <div className="main_container">
        <div className="my_products p-4 bg-white">
          <h5>Store Owner Details</h5>
          <div className="table_options d-flex">
            <div className="order_search_btn order_input " id="order_search">
              <span><FaSearch /></span>
              <input
                type="text"
                placeholder="Reatailer Store Name"
                name="search"
              />
            </div>
            <div className="order_search_btn sort_input order_input" id="order_search">
              <span>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path></svg></span>
              <input
                type="text"
                placeholder="Sort"
                name="search"
              />
            </div>
          </div>

          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className='gap-2  t_head'>
                  <th scope="col" className="border-0">
                    <div className="p-2">
                      <input type="checkbox" />
                    </div>
                  </th>
                  {[
                    { label: 'Sr. No.:', className: 'border-0', divClassName: 'p-2 ' },
                    { label: 'Retailer Store Name', className: 'border-0', divClassName: 'py-2' },
                    { label: 'Sales Channel', className: 'border-0 px-2', divClassName: 'py-2' },
                    { label: 'Domain Name', className: 'border-0 px-2', divClassName: 'py-2' },
                    { label: 'Store Sales', className: 'border-0 px-2', divClassName: 'py-2' },
                    { label: 'Subscription Plan', className: 'border-0 px-2', divClassName: 'py-2' },
                    { label: 'Activate/Deactivate', className: 'border-0 px-2', divClassName: 'py-2' }
                  ].map((column, index) => (
                    <th key={index} scope="col" className={column.className}>
                      <div className={column.divClassName}>{column.label}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-0">
                    <div className="p-2">
                      <input type="checkbox" />
                    </div>
                  </td>

                  {/* ********** use commented code while making it dynamic ******** */}
                  {/* {[...Array(7)].map((_, index) => (
                                        <td key={index} className="border-0 ">
                                            <div>{data here}</div>
                                        </td>
                                    ))} */}

                  {[
                    { label: '01.', className: 'border-0', divClassName: 'p-2 ' },
                    { label: 'Retailer Store Name', className: 'border-0', divClassName: 'py-2' },
                    { label: 'Shoppify', className: 'border-0 px-2', divClassName: 'py-2' },
                    { label: 'https://www.petspurest.com/', className: 'border-0 px-2', divClassName: 'py-2' },
                    { label: '$2000/per month', className: 'border-0 px-2', divClassName: 'py-2' },
                    { label: 'Essential', className: 'border-0 px-2', divClassName: 'py-2' },
                  ].map((column, index) => (
                    <td key={index} scope="col" className={column.className}>
                      <div className={column.divClassName}>{column.label}</div>
                    </td>
                  ))}
                  <td className="border-0">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="active_deactive"><button className="btn p-0">Activate | Deactivate</button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySubscriptions;
