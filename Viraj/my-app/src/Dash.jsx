
import { useState } from "react";

export default function Dash() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const vendors = [
    { name: "Product1", url: "catalogapp.io", rating: 60, change: 5, date: "22 Jan 2022", status: "Active", tags: ["Customer data", "Admin", "+4"] },
    { name: "Circooles", url: "getcicooles.com", rating: 72, change: -4, date: "20 Jan 2022", status: "Active", tags: ["Business data", "Admin", "+2"] },
    { name: "Command+R", url: "cmdr.ai", rating: 78, change: 6, date: "24 Jan 2022", status: "Active", tags: ["Customer data", "Financials"] },
    { name: "Hourglass", url: "hourglass.app", rating: 38, change: 8, date: "26 Jan 2022", status: "Active", tags: ["Database access", "Admin"] },
    { name: "Layers", url: "getlayers.io", rating: 42, change: -1, date: "18 Jan 2022", status: "Active", tags: ["Salesforce", "Admin", "+2"] },
    { name: "Quotient", url: "quotient.co", rating: 66, change: -6, date: "28 Jan 2022", status: "Active", tags: ["Business data", "Admin", "+4"] },
    { name: "Sisyphus", url: "sisyphus.com", rating: 91, change: 2, date: "16 Jan 2022", status: "Inactive", tags: ["Customer data", "Financials"] },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Business - Product name - category</h1>
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
            onClick={() => setPopupOpen(true)}
          >
            + Add Product
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-4">Keep track of Products and their ratings.</p>
        
        <div className="flex justify-between items-center mb-4">
          <button className="bg-gray-200 px-4 py-2 rounded-md">View all</button>
          <input type="text" placeholder="Search" className="border px-4 py-2 rounded-md w-1/3" />
        </div>
        
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Vendor</th>
              <th className="p-3">Rating</th>
              <th className="p-3">Last Assessed</th>
              <th className="p-3">License Use</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor, index) => (
              <tr key={index} className="border-t">
                <td className="p-3 flex items-center gap-2">
                  <input type="checkbox" className="mr-2" />
                  <div>
                    <div className="font-semibold">{vendor.name}</div>
                    <div className="text-sm text-gray-500">{vendor.url}</div>
                  </div>
                </td>
                <td className="p-3 flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-300 rounded">
                    <div
                      className="h-2 bg-purple-500 rounded"
                      style={{ width: `${vendor.rating}%` }}
                    ></div>
                  </div>
                  <span>{vendor.rating}</span>
                  <span className={vendor.change > 0 ? "text-green-500" : "text-red-500"}>
                    {vendor.change > 0 ? `↑ ${vendor.change}%` : `↓ ${Math.abs(vendor.change)}%`}
                  </span>
                </td>
                <td className="p-3">{vendor.date}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded-full text-xs ${vendor.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}>
                    {vendor.status}
                  </span>
                  {vendor.tags.map((tag, i) => (
                    <span key={i} className="ml-2 px-2 py-1 bg-gray-200 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </td>
                <td className="p-3 flex gap-2">
                  <button className="text-blue-500">✏️</button>
                  <button className="text-red-500">🗑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
            <h2 className="text-lg font-semibold mb-4">Add New Product</h2>
            <input type="text" placeholder="Product Name" className="border w-full px-4 py-2 rounded-md mb-4" />
            <input type="text" placeholder="Product URL" className="border w-full px-4 py-2 rounded-md mb-4" />
            <input type="number" placeholder="Rating" className="border w-full px-4 py-2 rounded-md mb-4" />
            <input type="date" placeholder="Last Assessed" className="border w-full px-4 py-2 rounded-md mb-4" />
            <input type="text" placeholder="License Use" className="border w-full px-4 py-2 rounded-md mb-4" />
            <div className="flex justify-end gap-2">
              <button className="bg-gray-200 px-4 py-2 rounded-md" onClick={() => setPopupOpen(false)}>Cancel</button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
