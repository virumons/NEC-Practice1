import React from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./ProductList.css"; // Import the CSS file

const products = [
  {
    name: "Product1",
    url: "catalogapp.io",
    rating: 60,
    ratingChange: "+5%",
    lastAssessed: "22 Jan 2022",
    status: "Active",
    tags: ["Customer data", "Admin"],
    additionalTags: "+4",
  },
  {
    name: "Circooles",
    url: "getcircooles.com",
    rating: 72,
    ratingChange: "-4%",
    lastAssessed: "20 Jan 2022",
    status: "Active",
    tags: ["Business data", "Admin"],
    additionalTags: "+2",
  },
  {
    name: "Command+R",
    url: "cmdr.ai",
    rating: 78,
    ratingChange: "+6%",
    lastAssessed: "24 Jan 2022",
    status: "Active",
    tags: ["Customer data", "Financials"],
  },
  {
    name: "Hourglass",
    url: "hourglass.app",
    rating: 38,
    ratingChange: "+8%",
    lastAssessed: "26 Jan 2022",
    status: "Active",
    tags: ["Database access", "Admin"],
  },
  {
    name: "Layers",
    url: "getlayers.io",
    rating: 42,
    ratingChange: "-1%",
    lastAssessed: "18 Jan 2022",
    status: "Active",
    tags: ["Salesforce", "Admin"],
    additionalTags: "+2",
  },
  {
    name: "Quotient",
    url: "quotient.co",
    rating: 66,
    ratingChange: "-6%",
    lastAssessed: "28 Jan 2022",
    status: "Active",
    tags: ["Business data", "Admin"],
    additionalTags: "+4",
  },
  {
    name: "Sisyphus",
    url: "sisyphus.com",
    rating: 91,
    ratingChange: "+2%",
    lastAssessed: "16 Jan 2022",
    status: "Inactive",
    tags: ["Customer data", "Financials"],
  },
];

const ProductList = () => {
  return (
    <div className="container">
      {/* Sidebar - Unified with AddProduct Page */}
      <div className="sidebar">
        <h2>Product</h2>
        <ul>
          <li>Add Product</li>
          <li className="active">Product Lists</li>
          <li>Products</li>
        </ul>
        <div className="settings">
          <h3>Settings And Account</h3>
          <ul>
            <li>Account Settings</li>
            <li>Activity</li>
            <li>Products</li>
            <li>Exit</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <h1>Business - Product List</h1>
          <button className="add-button">
            <FaPlus className="icon" /> Add Product
          </button>
        </div>

        {/* Table */}
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Vendor</th>
                <th>Rating</th>
                <th>Last Assessed</th>
                <th>License Use</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>
                    <span className="vendor-name">{product.name}</span>
                    <span className="vendor-url">{product.url}</span>
                  </td>
                  <td>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${product.rating}%` }}></div>
                    </div>
                    <span className="rating-text">
                      {product.rating}{" "}
                      <span className={product.ratingChange.startsWith("-") ? "negative" : "positive"}>
                        {product.ratingChange}
                      </span>
                    </span>
                  </td>
                  <td>{product.lastAssessed}</td>
                  <td>
                    <span className="status">{product.status}</span>
                    {product.tags.map((tag, i) => (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    ))}
                    {product.additionalTags && <span className="extra-tags">{product.additionalTags}</span>}
                  </td>
                  <td className="actions">
                    <FiEdit className="edit-icon" />
                    <FiTrash className="delete-icon" />
                    <BsThreeDotsVertical className="menu-icon" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
