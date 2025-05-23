// import React from "react";
// import Profilenav from './Profilenav'
// import Topnav from './Topnav'

// const Paymentmethods = () => {
//   return (
//     <div className='p-6'>
//       <Topnav />
    
//     <div className='flex flex-row w-full p-6'>
//         <Profilenav />

    
//     <div className="p-6 bg-white min-h-screen text-[#0f0f0f]">
//       {/* Heading */}
//       <h1 className="text-3xl font-bold mb-6">Payments</h1>

//       {/* Add a checkout method */}
//       <div className="bg-[#3963f1] text-white rounded-md p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
//         <div className="flex items-start gap-2">
//           <span className="text-xl">ℹ️</span>
//           <div>
//             <h2 className="font-semibold text-lg">Add a checkout method</h2>
//             <p className="text-base mt-1">
//               Checkout is faster when you have a credit or debit card on file.
//             </p>
//           </div>
//         </div>
//         <button className="mt-4 sm:mt-0 underline text-white font-semibold text-base">
//           Add credit or debit card
//         </button>
//       </div>

//       {/* Cards and accounts */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-bold">Cards and accounts</h2>
//         <button className="text-[#3963f1] text-2xl font-bold">+</button>
//       </div>

//       <div className="border-2 border-dashed border-gray-300 rounded-md p-12 flex justify-center items-center flex-col max-w-md">
//         <div className="text-[#3963f1] text-4xl font-light">+</div>
//         <p className="text-[#3963f1] mt-2 text-base">Add cards and accounts</p>
//       </div>
//     </div>
//     </div>
//     </div>
//   );
// };

// export default Paymentmethods;
import React, { useState } from "react";
import Profilenav from './Profilenav';
import Topnav from './Topnav';
import CryptoJS from "crypto-js";

const Paymentmethods = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [cards, setCards] = useState([]);
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
    firstName: "",
    lastName: "",
  });

  const encryptData = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), "secret-key").toString();
  };

  const handleAddCard = () => {
    const encryptedCard = encryptData(cardDetails);
    setCards([...cards, encryptedCard]);
    setShowPopup(false);
    setStep(1);
    setSelectedMethod("");
    setCardDetails({ number: "", expiry: "", cvv: "", firstName: "", lastName: "" });
  };

  return (
    <div className='p-6'>
      <Topnav />
      <div className='flex flex-row w-full p-6'>
        <Profilenav />
        <div className="p-6 bg-white min-h-screen text-[#0f0f0f] w-full">
          <h1 className="text-3xl font-bold mb-6">Payments</h1>

          <div className="bg-[#3963f1] text-white rounded-md p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div className="flex items-start gap-2">
              <span className="text-xl">ℹ️</span>
              <div>
                <h2 className="font-semibold text-lg">Add a checkout method</h2>
                <p className="text-base mt-1">
                  Checkout is faster when you have a credit or debit card on file.
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowPopup(true)}
              className="mt-4 sm:mt-0 underline text-white font-semibold text-base"
            >
              Add credit or debit card
            </button>
          </div>

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Cards and accounts</h2>
            <button
              className="text-[#3963f1] text-2xl font-bold"
              onClick={() => setShowPopup(true)}
            >
              +
            </button>
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-md p-12 flex justify-center items-center flex-col max-w-md">
            <div className="text-[#3963f1] text-4xl font-light">+</div>
            <p className="text-[#3963f1] mt-2 text-base">Add cards and accounts</p>
          </div>

          {cards.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Encrypted Payment Methods</h3>
              <ul className="mt-2 list-disc list-inside">
                {cards.map((card, index) => (
                  <li key={index} className="text-sm break-all">{card}</li>
                ))}
              </ul>
            </div>
          )}

          {showPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
                <button
                  className="absolute top-2 right-3 text-xl"
                  onClick={() => {
                    setShowPopup(false);
                    setStep(1);
                    setSelectedMethod("");
                  }}
                >
                  ❌
                </button>

                {step === 1 && (
                  <>
                    <h2 className="text-2xl font-bold mb-2">Add Payment Method</h2>
                    <p className="text-sm text-gray-600 mb-4">Check out faster when you add a payment method. Your payment details are secure and private.</p>
                    {['Credit or debit card', 'PayPal', 'Venmo'].map((method) => (
                      <div key={method} className="flex items-center mb-3">
                        <input
                          type="radio"
                          className="mr-2"
                          checked={selectedMethod === method}
                          onChange={() => setSelectedMethod(method)}
                        />
                        <label>{method}</label>
                      </div>
                    ))}
                    <div className="flex justify-between mt-6">
                      <button
                        className="text-[#3963f1] px-4 py-2 border border-[#3963f1] rounded"
                        onClick={() => setShowPopup(false)}
                      >
                        Back
                      </button>
                      <button
                        className={`px-4 py-2 rounded text-white ${selectedMethod === 'Credit or debit card' ? 'bg-[#3963f1]' : 'bg-gray-300 cursor-not-allowed'}`}
                        onClick={() => selectedMethod === 'Credit or debit card' && setStep(2)}
                      >
                        Continue
                      </button>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <h2 className="text-xl font-bold mb-4">Add credit or debit card</h2>
                    <div className="space-y-3">
                      <input type="text" placeholder="Card number" className="border p-2 rounded w-full" value={cardDetails.number} onChange={e => setCardDetails({ ...cardDetails, number: e.target.value })} />
                      <div className="flex gap-2">
                        <input type="text" placeholder="Expiration date (MM/YY)" className="border p-2 rounded w-1/2" value={cardDetails.expiry} onChange={e => setCardDetails({ ...cardDetails, expiry: e.target.value })} />
                        <input type="text" placeholder="Security Code" className="border p-2 rounded w-1/2" value={cardDetails.cvv} onChange={e => setCardDetails({ ...cardDetails, cvv: e.target.value })} />
                      </div>
                      <div className="flex gap-2">
                        <input type="text" placeholder="First name" className="border p-2 rounded w-1/2" value={cardDetails.firstName} onChange={e => setCardDetails({ ...cardDetails, firstName: e.target.value })} />
                        <input type="text" placeholder="Last name" className="border p-2 rounded w-1/2" value={cardDetails.lastName} onChange={e => setCardDetails({ ...cardDetails, lastName: e.target.value })} />
                      </div>
                    </div>
                    <div className="mt-6 flex justify-between">
                      <button
                        className="text-[#3963f1] px-4 py-2 border border-[#3963f1] rounded"
                        onClick={() => setStep(1)}
                      >
                        Back
                      </button>
                      <button
                        className="bg-[#3963f1] text-white px-4 py-2 rounded"
                        onClick={handleAddCard}
                      >
                        Add
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Paymentmethods;
