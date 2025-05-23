// // SellerProfileForm.jsx

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Upload, Plus, X } from 'lucide-react';
// import { FaPhone, FaMapMarkerAlt, FaFilePdf } from 'react-icons/fa';
// import { MdAddLocationAlt } from 'react-icons/md';

// const accountTypes = ['Individual', 'Company'];
// const businessCategories = [
//   'Electronics', 'Clothing', 'Furniture', 'Books', 'Beauty',
//   'Groceries', 'Toys', 'Automotive', 'Fitness', 'Pets'
// ];
// const countries = ['India', 'USA', 'Canada', 'Germany', 'UK'];
// const cities = ['Mumbai', 'Delhi', 'Bangalore', 'New York', 'London'];
// const addressTypes = ['Personal Address', 'Shipping Address'];

// const Sellernewprofile = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     coverImage: '',
//     profileImage: '',
//     accountType: '',
//     businessName: '',
//     govId: null,
//     selectedCategories: [],
//     selectedCategory: '',
//     phone: '',
//     addresses: []
//   });

//   const handleCategorySelect = (category) => {
//     if (!formData.selectedCategories.includes(category)) {
//       setFormData({
//         ...formData,
//         selectedCategories: [...formData.selectedCategories, category]
//       });
//     }
//   };

//   const handleAddAddress = () => {
//     if (formData.addresses.length < 4) {
//       setFormData({
//         ...formData,
//         addresses: [...formData.addresses, {
//           type: '',
//           fullName: '',
//           country: '',
//           city: '',
//           address: '',
//           zip: '',
//           phone: ''
//         }]
//       });
//     }
//   };

//   const handleAddressChange = (index, field, value) => {
//     const updatedAddresses = [...formData.addresses];
//     updatedAddresses[index][field] = value;
//     setFormData({ ...formData, addresses: updatedAddresses });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     navigate('/profile');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-5xl mx-auto p-6 bg-white shadow-2xl rounded-2xl space-y-6">
//       <h2 className="text-3xl font-bold text-gray-800">Seller Profile</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label className="block text-gray-700">Cover Image</label>
//           <input type="file" accept="image/*" className="w-full p-2 border rounded" onChange={e => setFormData({ ...formData, coverImage: e.target.files[0] })} />
//         </div>

//         <div>
//           <label className="block text-gray-700">Profile Image</label>
//           <input type="file" accept="image/*" className="w-full p-2 border rounded" onChange={e => setFormData({ ...formData, profileImage: e.target.files[0] })} />
//         </div>

//         <div>
//           <label className="block text-gray-700">Account Type</label>
//           <select className="w-full p-2 border rounded" onChange={e => setFormData({ ...formData, accountType: e.target.value })}>
//             <option value="">Select Account Type</option>
//             {accountTypes.map(type => <option key={type}>{type}</option>)}
//           </select>
//         </div>

//         <div>
//           <label className="block text-gray-700">Business Name</label>
//           <input type="text" className="w-full p-2 border rounded" value={formData.businessName} onChange={e => setFormData({ ...formData, businessName: e.target.value })} />
//         </div>

//         <div className="col-span-2">
//           <label className="block text-gray-700">Upload Government ID (PDF)</label>
//           <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center flex flex-col items-center justify-center cursor-pointer">
//             <FaFilePdf className="text-red-600 text-3xl mb-2" />
//             <p className="text-gray-500">Drag and drop or click to upload</p>
//             <input type="file" accept="application/pdf" className="hidden" id="govIdInput" onChange={e => setFormData({ ...formData, govId: e.target.files[0] })} />
//           </div>
//         </div>

//         <div className="col-span-2">
//           <label className="block text-gray-700">Business Category</label>
//           <div className="flex items-center gap-4">
//             <select className="w-full p-2 border rounded" onChange={e => setFormData({ ...formData, selectedCategory: e.target.value })}>
//               <option value="">Select Category</option>
//               {businessCategories.map(cat => <option key={cat}>{cat}</option>)}
//             </select>
//             <button type="button" onClick={() => handleCategorySelect(formData.selectedCategory)} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
//           </div>
//           <div className="flex flex-wrap gap-2 mt-2">
//             {formData.selectedCategories.map(cat => (
//               <span key={cat} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
//                 {cat} <X className="w-4 h-4 cursor-pointer" onClick={() => setFormData({ ...formData, selectedCategories: formData.selectedCategories.filter(c => c !== cat) })} />
//               </span>
//             ))}
//           </div>
//         </div>

//         <div className="col-span-2">
//           <label className="block text-gray-700">Phone Number</label>
//           <input type="tel" className="w-full p-2 border rounded" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
//         </div>
//       </div>

//       <div className="space-y-4">
//         <h3 className="text-xl font-semibold">Addresses</h3>
//         {formData.addresses.map((addr, i) => (
//           <div key={i} className="p-4 bg-gray-50 border rounded-xl">
//             <select value={addr.type} onChange={e => handleAddressChange(i, 'type', e.target.value)} className="mb-3 w-full p-2 border rounded">
//               <option value="">Select Address Type</option>
//               {addressTypes.map(type => <option key={type}>{type}</option>)}
//             </select>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input type="text" placeholder="Full Name" value={addr.fullName} onChange={e => handleAddressChange(i, 'fullName', e.target.value)} className="p-2 border rounded w-full" />
//               <select value={addr.country} onChange={e => handleAddressChange(i, 'country', e.target.value)} className="p-2 border rounded w-full">
//                 <option value="">Select Country</option>
//                 {countries.map(c => <option key={c}>{c}</option>)}
//               </select>
//               <select value={addr.city} onChange={e => handleAddressChange(i, 'city', e.target.value)} className="p-2 border rounded w-full">
//                 <option value="">Select City</option>
//                 {cities.map(c => <option key={c}>{c}</option>)}
//               </select>
//               <input type="text" placeholder="Zip Code" value={addr.zip} onChange={e => handleAddressChange(i, 'zip', e.target.value)} className="p-2 border rounded w-full" />
//               <input type="text" placeholder="Phone" value={addr.phone} onChange={e => handleAddressChange(i, 'phone', e.target.value)} className="p-2 border rounded w-full" />
//               <textarea placeholder="Detailed Address" value={addr.address} onChange={e => handleAddressChange(i, 'address', e.target.value)} className="p-2 border rounded w-full md:col-span-2" rows={2} />
//             </div>
//           </div>
//         ))}
//         {formData.addresses.length < 4 && (
//           <button type="button" onClick={handleAddAddress} className="flex items-center gap-2 text-blue-600 font-medium">
//             <MdAddLocationAlt className="w-5 h-5" /> Add Address
//           </button>
//         )}
//       </div>

//       <div className="text-right">
//         <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">Submit</button>
//       </div>
//     </form>
//   );
// };

// export default Sellernewprofile;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { FaFilePdf } from 'react-icons/fa';
import { MdAddLocationAlt } from 'react-icons/md';

const accountTypes = ['Individual', 'Company'];
const businessCategories = [
  'Electronics', 'Clothing', 'Furniture', 'Books', 'Beauty',
  'Groceries', 'Toys', 'Automotive', 'Fitness', 'Pets'
];
const countries = ['India', 'USA', 'Canada', 'Germany', 'UK'];
const cities = ['Mumbai', 'Delhi', 'Bangalore', 'New York', 'London'];
const addressTypes = ['Personal Address', 'Shipping Address'];

const Sellernewprofile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    coverImage: '',
    profileImage: '',
    accountType: '',
    businessName: '',
    govId: null,
    selectedCategories: [],
    selectedCategory: '',
    phone: '',
    addresses: [{
      type: '',
      fullName: '',
      country: '',
      city: '',
      address: '',
      zip: '',
      phone: ''
    }]
  });

  const handleCategorySelect = (category) => {
    if (category && !formData.selectedCategories.includes(category)) {
      setFormData({
        ...formData,
        selectedCategories: [...formData.selectedCategories, category]
      });
    }
  };

  const handleAddAddress = () => {
    if (formData.addresses.length < 4) {
      setFormData({
        ...formData,
        addresses: [...formData.addresses, {
          type: '',
          fullName: '',
          country: '',
          city: '',
          address: '',
          zip: '',
          phone: ''
        }]
      });
    }
  };

  const handleAddressChange = (index, field, value) => {
    const updatedAddresses = [...formData.addresses];
    updatedAddresses[index][field] = value;
    setFormData({ ...formData, addresses: updatedAddresses });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = new FormData();
    data.append('coverImage', formData.coverImage);
    data.append('profileImage', formData.profileImage);
    data.append('accountType', formData.accountType);
    data.append('businessName', formData.businessName);
    data.append('govId', formData.govId);
    data.append('selectedCategories', JSON.stringify(formData.selectedCategories));
    data.append('phone', formData.phone);
    data.append('addresses', JSON.stringify(formData.addresses));
  
    try {
      // const res = await fetch('/profile', {
      //   method: 'POST',
      //   body: data
      // });
      navigate('/profile');
  
      if (res.ok) {
        //nil
      } else {
        console.error('Submission failed.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto p-6 bg-white rounded-2xl space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Seller Profile</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* COVER IMAGE */}
<div>
  <label className="block text-gray-700 mb-1">Cover Image</label>
  <div className="relative border-2 border-dashed border-gray-400 rounded-xl h-48 w-full flex items-center justify-center overflow-hidden bg-gray-50">
    {!formData.coverImage ? (
      <>
        <div className="text-center text-gray-500">
          <svg className="mx-auto mb-2 h-8 w-8 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 4v16m8-8H4" />
          </svg>
          <p>Click to upload cover image</p>
        </div>
        <input
          type="file"
          accept="image/*"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={(e) => setFormData({ ...formData, coverImage: e.target.files[0] })}
        />
      </>
    ) : (
      <>
        <img src={URL.createObjectURL(formData.coverImage)} alt="Cover Preview" className="object-cover w-full h-full" />
        <input
          type="file"
          accept="image/*"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={(e) => setFormData({ ...formData, coverImage: e.target.files[0] })}
        />
      </>
    )}
  </div>
</div>

{/* PROFILE IMAGE */}
<div>
  <label className="block text-gray-700 mb-1">Profile Image</label>
  <div className="relative border-2 border-dashed border-gray-400 rounded-full h-32 w-32 mx-auto flex items-center justify-center overflow-hidden bg-gray-50">
    {!formData.profileImage ? (
      <>
        <div className="text-center text-gray-500">
          <svg className="mx-auto mb-1 h-6 w-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 4v16m8-8H4" />
          </svg>
          <p className="text-xs">Upload</p>
        </div>
        <input
          type="file"
          accept="image/*"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={(e) => setFormData({ ...formData, profileImage: e.target.files[0] })}
        />
      </>
    ) : (
      <>
        <img src={URL.createObjectURL(formData.profileImage)} alt="Profile Preview" className="object-cover w-full h-full" />
        <input
          type="file"
          accept="image/*"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={(e) => setFormData({ ...formData, profileImage: e.target.files[0] })}
        />
      </>
    )}
  </div>
</div>


        <div>
          <label className="block text-gray-700">Account Type</label>
          <select className="w-full p-2 border rounded" onChange={e => setFormData({ ...formData, accountType: e.target.value })}>
            <option value="">Select Account Type</option>
            {accountTypes.map(type => <option key={type}>{type}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-gray-700">Business Name</label>
          <input type="text" className="w-full p-2 border rounded" value={formData.businessName} onChange={e => setFormData({ ...formData, businessName: e.target.value })} />
        </div>

        {/* <div className="col-span-2">
          <label className="block text-gray-700">Upload Government ID (PDF)</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center flex flex-col items-center justify-center cursor-pointer">
            <FaFilePdf className="text-red-600 text-3xl mb-2" />
            <p className="text-gray-500">Drag and drop or click to upload</p>
            <input type="file" accept="application/pdf" className="hidden" id="govIdInput" onChange={e => setFormData({ ...formData, govId: e.target.files[0] })} />
          </div>
        </div> */}

        <div className="col-span-2">
          <label className="block text-gray-700">Business Category</label>
          <select
            className="w-full p-2 border rounded"
            onChange={e => {
              setFormData({ ...formData, selectedCategory: e.target.value });
              handleCategorySelect(e.target.value);
            }}
          >
            <option value="">Select Category</option>
            {businessCategories.map(cat => <option key={cat}>{cat}</option>)}
          </select>
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.selectedCategories.map(cat => (
              <span key={cat} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                {cat}
                <X className="w-4 h-4 cursor-pointer" onClick={() =>
                  setFormData({ ...formData, selectedCategories: formData.selectedCategories.filter(c => c !== cat) })
                } />
              </span>
            ))}
          </div>
        </div>

        <div className="col-span-2">
          <label className="block text-gray-700">Phone Number</label>
          <input type="tel" className="w-full p-2 border rounded" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Addresses</h3>
        {formData.addresses.map((addr, i) => (
          <div key={i} className="p-4 bg-gray-50 border rounded-xl">
            <select value={addr.type} onChange={e => handleAddressChange(i, 'type', e.target.value)} className="mb-3 w-full p-2 border rounded">
              <option value="">Select Address Type</option>
              {addressTypes.map(type => <option key={type}>{type}</option>)}
            </select>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" value={addr.fullName} onChange={e => handleAddressChange(i, 'fullName', e.target.value)} className="p-2 border rounded w-full" />
              <select value={addr.country} onChange={e => handleAddressChange(i, 'country', e.target.value)} className="p-2 border rounded w-full">
                <option value="">Select Country</option>
                {countries.map(c => <option key={c}>{c}</option>)}
              </select>
              <select value={addr.city} onChange={e => handleAddressChange(i, 'city', e.target.value)} className="p-2 border rounded w-full">
                <option value="">Select City</option>
                {cities.map(c => <option key={c}>{c}</option>)}
              </select>
              <input type="text" placeholder="Zip Code" value={addr.zip} onChange={e => handleAddressChange(i, 'zip', e.target.value)} className="p-2 border rounded w-full" />
              <input type="text" placeholder="Phone" value={addr.phone} onChange={e => handleAddressChange(i, 'phone', e.target.value)} className="p-2 border rounded w-full" />
              <textarea placeholder="Detailed Address" value={addr.address} onChange={e => handleAddressChange(i, 'address', e.target.value)} className="p-2 border rounded w-full md:col-span-2" rows={2} />
            </div>
          </div>
        ))}
        {formData.addresses.length < 4 && (
          <button type="button" onClick={handleAddAddress} className="flex items-center gap-2 text-blue-600 font-medium">
            <MdAddLocationAlt className="w-5 h-5" /> Add Address
          </button>
        )}
      </div>

      <div className="text-right">
        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">Submit</button>
      </div>
    </form>
  );
};

export default Sellernewprofile;
