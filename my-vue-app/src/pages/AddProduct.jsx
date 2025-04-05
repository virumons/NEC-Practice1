import React, { useState } from "react";
import "./AddProduct.css";

const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    category: "",
    subCategory: "",
    quality: "",
    size: "",
    productDate: "",
    salesChannel: "Only sale market",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setProduct({ ...product, images: files });
  };

  return (
    <div className="add-product-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Product</h2>
        <ul>
          <li className="active">Add Product</li>
          <li>Product Lists</li>
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

      {/* Main Form */}
      <div className="product-form">
        {/* Description */}
        <div className="section">
          <h3>Description</h3>
          <label>Product Name</label>
          <input
            type="text"
            name="productName"
            value={product.productName}
            onChange={handleChange}
            placeholder="Enter product name"
          />
          <label>Business Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Enter business description"
          ></textarea>
        </div>

        {/* Category */}
        <div className="section">
          <h3>Category</h3>
          <label>Product Category</label>
          <select name="category" value={product.category} onChange={handleChange}>
            <option value="">Select Category</option>
            <option value="Outerwear & Winter">Outerwear & Winter</option>
          </select>
          <label>Sub Category</label>
          <select name="subCategory" value={product.subCategory} onChange={handleChange}>
            <option value="">Select Sub Category</option>
            <option value="Leather Jacket">Leather Jacket</option>
          </select>
        </div>

        {/* Quality */}
        <div className="section">
          <h3>Quality</h3>
          <select name="quality" value={product.quality} onChange={handleChange}>
            <option value="">Select Quality</option>
            <option value="New">New</option>
            <option value="Second hand">Second Hand</option>
          </select>
        </div>

        {/* Product Image */}
        <div className="section">
          <h3>Product Image</h3>
          <input type="file" multiple onChange={handleFileUpload} />
          <div className="image-upload">Drop your images or click to browse</div>
        </div>

        {/* Select Size */}
        <div className="section">
          <h3>Select Size</h3>
          <select name="size" value={product.size} onChange={handleChange}>
            <option value="">Select Size</option>
            <option value="EU-44">EU-44</option>
            <option value="EU-42">EU-42</option>
            <option value="EU-40">EU-40</option>
            <option value="EU-38">EU-38</option>
            <option value="EU-36">EU-36</option>
            <option value="EU-34">EU-34</option>
          </select>
          <label>Product Date</label>
          <input
            type="date"
            name="productDate"
            value={product.productDate}
            onChange={handleChange}
          />
        </div>

        {/* Sales Channel */}
        <div className="section">
          <h3>Sales Channel</h3>
          <select name="salesChannel" value={product.salesChannel} onChange={handleChange}>
            <option value="Only sale market">Only sale market</option>
            <option value="Online sales from the outlet">Online sales from the outlet</option>
            <option value="Both market and online">Both market and online</option>
            <option value="Online sale only">Online sale only</option>
          </select>
        </div>

        {/* Actions */}
        <div className="actions">
          <button className="blue">Add Product</button>
          <button className="gray">Save Product</button>
          <button className="gray">Discard</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
