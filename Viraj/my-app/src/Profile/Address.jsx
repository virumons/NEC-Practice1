//  /* dev- viraj
//  */ 

// import Profilenav from './Profilenav'
// import Topnav from './Topnav';
// import React, { useState, useEffect } from 'react';

// const sections = [
//   { key: 'registration', title: 'Registration address, email and phone number', description: "Your main contact address. It's important to keep it up to date and accurate." },
//   { key: 'delivery', title: 'Delivery address', description: "Your main postage address for purchases. This is where you'd like to receive items you purchase." },
//   { key: 'dispatch', title: 'Dispatch address', description: "Your main address where you post packages from." },
//   { key: 'return', title: 'Return address', description: "Your main return addresses where buyers can return their items." },
//   { key: 'payment', title: 'Payment and collection address', description: "Collection address for offline payment methods like cash on collection or personal cheques." },
// ];

// export default function Address() {
//   const [addresses, setAddresses] = useState({});
//   const [activeModal, setActiveModal] = useState(null);

//   const handleAddOrEdit = (key, index = null) => {
//     setActiveModal({ key, index });
//   };

//   const handleSubmit = (key, data, index) => {
//     setAddresses(prev => {
//       const updated = { ...prev };
//       const list = [...(updated[key] || [])];
//       if (index !== null) {
//         list[index] = data;
//       } else {
//         list.push(data);
//       }
//       updated[key] = list;
//       return updated;
//     });
//     setActiveModal(null);
//   };

//   const handleDelete = (key, idx) => {
//     setAddresses(prev => {
//       const updated = { ...prev };
//       updated[key] = updated[key].filter((_, i) => i !== idx);
//       return updated;
//     });
//   };

//   return (
//     <div className='p-5'>
//       <Topnav />
//       <div className='flex flex-row justify-start items-center h-full'>
//       <Profilenav />
//     <div className="w-6xl  p-6 space-y-6">
//       <h1 className="text-2xl font-bold">Addresses</h1>
//       {sections.map(({ key, title, description }) => (
//         <div key={key} className="border-b pb-4">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="font-normal text-xl">{title}</p>
//               <p className="text-sm text-gray-600">{description}</p>
//             </div>
//             <button
//               className="border border-blue-500 text-blue-500 rounded px-4 py-1 hover:bg-blue-50"
//               onClick={() => handleAddOrEdit(key)}
//             >
//               {addresses[key]?.length ? 'Edit' : 'Add'}
//             </button>
//           </div>

//           {addresses[key]?.map((addr, idx) => (
//             <div key={idx} className="mt-3 p-3 border rounded bg-gray-50">
//               <div className="flex justify-between">
//                 <div>
//                   <p><strong>Name:</strong> {addr.name}</p>
//                   <p><strong>Type:</strong> {addr.type}</p>
//                   <p><strong>Phone:</strong> {addr.phone}</p>
//                   <p><strong>Address:</strong> {addr.address}</p>
//                   <p><strong>Country:</strong> {addr.country}, <strong>City:</strong> {addr.city}</p>
//                   <p><strong>Area:</strong> {addr.area}, <strong>Landmark:</strong> {addr.landmark || 'N/A'}</p>
//                   <p><strong>Zipcode:</strong> {addr.zip}</p>
//                 </div>
//                 <div className="space-x-2">
//                   <button onClick={() => handleAddOrEdit(key, idx)} className="text-blue-600 text-sm">Edit</button>
//                   <button onClick={() => handleDelete(key, idx)} className="text-red-600 text-sm">Delete</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ))}

//       {activeModal && (
//         <AddressModal
//           defaultData={
//             activeModal.index !== null ? addresses[activeModal.key][activeModal.index] : null
//           }
//           onClose={() => setActiveModal(null)}
//           onSubmit={(data) => handleSubmit(activeModal.key, data, activeModal.index)}
//         />
//       )}
//     </div>
//     </div>
//     </div>
//   );
// }



//  function AddressModal({ onClose, onSubmit, defaultData }) {
//   const [form, setForm] = useState({
//     name: '',
//     type: 'Personal',
//     phone: '',
//     address: '',
//     country: '',
//     city: '',
//     area: '',
//     landmark: '',
//     zip: '',
//   });

//   useEffect(() => {
//     if (defaultData) setForm(defaultData);
//   }, [defaultData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm(f => ({ ...f, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(form);
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg relative">
//         <h2 className="text-lg font-bold mb-4">{defaultData ? 'Edit Address' : 'Add Address'}</h2>
//         <form onSubmit={handleSubmit} className="space-y-3">
//           <input name="name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Full Name" required />
//           <select name="type" value={form.type} onChange={handleChange} className="w-full border p-2 rounded">
//             <option value="personal">Personal</option>
//             <option value="commercial">Commercial</option>
//           </select>
//           <input name="phone" value={form.phone} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Phone Number" required />
//           <textarea name="address" value={form.address} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Full Address" required />
//           <input name="country" value={form.country} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Country" required />
//           <input name="city" value={form.city} onChange={handleChange} className="w-full border p-2 rounded" placeholder="City" required />
//           <input name="area" value={form.area} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Area" required />
//           <input name="landmark" value={form.landmark} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Landmark (optional)" />
//           <input name="zip" value={form.zip} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Pincode / Zipcode" required />
//           <div className="flex justify-end gap-2 pt-2">
//             <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
//             <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

/* dev- viraj */

import Profilenav from './Profilenav';
import Topnav from './Topnav';
import React, { useState, useEffect } from 'react';

const sections = [
  { key: 'registration', title: 'Registration address, email and phone number', description: "Your main contact address. It's important to keep it up to date and accurate." },
  { key: 'delivery', title: 'Delivery address', description: "Your main postage address for purchases. This is where you'd like to receive items you purchase." },
  { key: 'dispatch', title: 'Dispatch address', description: "Your main address where you post packages from." },
  { key: 'return', title: 'Return address', description: "Your main return addresses where buyers can return their items." },
  { key: 'payment', title: 'Payment and collection address', description: "Collection address for offline payment methods like cash on collection or personal cheques." },
];

export default function Address() {
  const [addresses, setAddresses] = useState({});
  const [activeModal, setActiveModal] = useState(null);
  const [customAddresses, setCustomAddresses] = useState([]);
  const [showCustomModal, setShowCustomModal] = useState(false);

  const handleAddOrEdit = (key, index = null) => {
    setActiveModal({ key, index });
  };

  const handleSubmit = (key, data, index) => {
    setAddresses(prev => {
      const updated = { ...prev };
      const list = [...(updated[key] || [])];
      if (index !== null) {
        list[index] = data;
      } else {
        list.push(data);
      }
      updated[key] = list;
      return updated;
    });
    setActiveModal(null);
  };

  const handleDelete = (key, idx) => {
    setAddresses(prev => {
      const updated = { ...prev };
      updated[key] = updated[key].filter((_, i) => i !== idx);
      return updated;
    });
  };

  const handleCustomSubmit = (data) => {
    setCustomAddresses(prev => [...prev, data]);
    setShowCustomModal(false);
  };

  const handleCustomDelete = (idx) => {
    setCustomAddresses(prev => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className='p-5'>
      <Topnav />
      <div className='flex flex-row justify-start items-center h-full'>
        <Profilenav />
        <div className="w-6xl p-6 space-y-6">
          <h1 className="text-2xl font-bold">Addresses</h1>

          {sections.map(({ key, title, description }) => (
            <div key={key} className="border-b pb-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-normal text-xl">{title}</p>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
                <button
                  className="border border-blue-500 text-blue-500 rounded px-4 py-1 hover:bg-blue-50"
                  onClick={() => handleAddOrEdit(key)}
                >
                  {addresses[key]?.length ? 'Edit' : 'Add'}
                </button>
              </div>

              {addresses[key]?.map((addr, idx) => (
                <div key={idx} className="mt-3 p-3 border rounded bg-gray-50">
                  <div className="flex justify-between">
                    <div>
                      <p><strong>Name:</strong> {addr.name}</p>
                      <p><strong>Type:</strong> {addr.type}</p>
                      <p><strong>Phone:</strong> {addr.phone}</p>
                      <p><strong>Address:</strong> {addr.address}</p>
                      <p><strong>Country:</strong> {addr.country}, <strong>City:</strong> {addr.city}</p>
                      <p><strong>Area:</strong> {addr.area}, <strong>Landmark:</strong> {addr.landmark || 'N/A'}</p>
                      <p><strong>Zipcode:</strong> {addr.zip}</p>
                    </div>
                    <div className="space-x-2">
                      <button onClick={() => handleAddOrEdit(key, idx)} className="text-blue-600 text-sm">Edit</button>
                      <button onClick={() => handleDelete(key, idx)} className="text-red-600 text-sm">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* ADDITIONAL CUSTOM ADDRESS SECTION */}
          <div className="border-t pt-4 space-y-4">
            <h2 className="text-xl font-semibold">Custom Addresses</h2>
            <button
              onClick={() => setShowCustomModal(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              + Add Address
            </button>

            {customAddresses.map((item, index) => (
              <div key={index} className="mt-3 p-3 border rounded bg-gray-50">
                <div className="flex justify-between">
                  <div>
                    <p className="text-lg font-bold">{item.header}</p>
                    <p><strong>Name:</strong> {item.name}</p>
                    <p><strong>Type:</strong> {item.type}</p>
                    <p><strong>Phone:</strong> {item.phone}</p>
                    <p><strong>Address:</strong> {item.address}</p>
                    <p><strong>Country:</strong> {item.country}, <strong>City:</strong> {item.city}</p>
                    <p><strong>Area:</strong> {item.area}, <strong>Landmark:</strong> {item.landmark || 'N/A'}</p>
                    <p><strong>Zipcode:</strong> {item.zip}</p>
                  </div>
                  <button
                    onClick={() => handleCustomDelete(index)}
                    className="text-red-600 text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {activeModal && (
            <AddressModal
              defaultData={activeModal.index !== null ? addresses[activeModal.key][activeModal.index] : null}
              onClose={() => setActiveModal(null)}
              onSubmit={(data) => handleSubmit(activeModal.key, data, activeModal.index)}
            />
          )}

          {showCustomModal && (
            <CustomAddressModal
              onClose={() => setShowCustomModal(false)}
              onSubmit={handleCustomSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function AddressModal({ onClose, onSubmit, defaultData }) {
  const [form, setForm] = useState({
    name: '',
    type: 'Personal',
    phone: '',
    address: '',
    country: '',
    city: '',
    area: '',
    landmark: '',
    zip: '',
  });

  useEffect(() => {
    if (defaultData) setForm(defaultData);
  }, [defaultData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg relative">
        <h2 className="text-lg font-bold mb-4">{defaultData ? 'Edit Address' : 'Add Address'}</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Full Name" required />
          <select name="type" value={form.type} onChange={handleChange} className="w-full border p-2 rounded">
            <option value="Personal">Personal</option>
            <option value="Commercial">Commercial</option>
          </select>
          <input name="phone" value={form.phone} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Phone Number" required />
          <textarea name="address" value={form.address} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Full Address" required />
          <input name="country" value={form.country} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Country" required />
          <input name="city" value={form.city} onChange={handleChange} className="w-full border p-2 rounded" placeholder="City" required />
          <input name="area" value={form.area} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Area" required />
          <input name="landmark" value={form.landmark} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Landmark (optional)" />
          <input name="zip" value={form.zip} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Pincode / Zipcode" required />
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function CustomAddressModal({ onClose, onSubmit }) {
  const [form, setForm] = useState({
    header: '',
    name: '',
    type: 'Personal',
    phone: '',
    address: '',
    country: '',
    city: '',
    area: '',
    landmark: '',
    zip: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg relative">
        <h2 className="text-lg font-bold mb-4">Add Custom Address</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="header" value={form.header} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Header (e.g., Uncle's Address)" required />
          <input name="name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Full Name" required />
          <select name="type" value={form.type} onChange={handleChange} className="w-full border p-2 rounded">
            <option value="Personal">Personal</option>
            <option value="Commercial">Commercial</option>
          </select>
          <input name="phone" value={form.phone} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Phone Number" required />
          <textarea name="address" value={form.address} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Full Address" required />
          <input name="country" value={form.country} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Country" required />
          <input name="city" value={form.city} onChange={handleChange} className="w-full border p-2 rounded" placeholder="City" required />
          <input name="area" value={form.area} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Area" required />
          <input name="landmark" value={form.landmark} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Landmark (optional)" />
          <input name="zip" value={form.zip} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Pincode / Zipcode" required />
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}



