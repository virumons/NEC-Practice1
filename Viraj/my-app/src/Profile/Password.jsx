 /* dev- viraj
 */ 
import React from 'react'
import { MailCheck, Phone, Lock } from "lucide-react";
import Profilenav from './Profilenav'
import Topnav from './Topnav'
import { Link } from "react-router-dom";

function Password() {

  const emailVerified = false;
  const phoneVerified = false;
  return (
    <div className='p-6'>
      <Topnav />
    
    <div className='flex flex-row w-full p-6'>
        <Profilenav />
        <div className="w-full max-w-3xl space-y-6">

{/* Email Verification Box */}
<div className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-start">
  <div className="space-y-1">
    <h2 className="text-lg font-semibold flex items-center gap-2">
      <MailCheck className="text-blue-600" />
      Email Verification
    </h2>
    <p className="text-sm text-gray-600">
      Your email: <span className="font-medium text-gray-800">user@example.com</span>
    </p>
    <p className="text-sm">
      Status:{" "}
      {emailVerified ? (
        <span className="text-green-600 font-semibold">Verified</span>
      ) : (
        <span className="text-red-600 font-semibold">Not Verified</span>
      )}
    </p>
  </div>
  {!emailVerified && (
    <Link to="/verify-email" className="text-blue-600 underline font-medium mt-2">
      Verify Email
    </Link>
  )}
</div>

{/* Phone Verification Box */}
<div className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-start">
  <div className="space-y-1">
    <h2 className="text-lg font-semibold flex items-center gap-2">
      <Phone className="text-green-600" />
      Phone Verification
    </h2>
    <p className="text-sm text-gray-600">
      Phone number: <span className="font-medium text-gray-800">+91-9876543210</span>
    </p>
    <p className="text-sm">
      Status:{" "}
      {phoneVerified ? (
        <span className="text-green-600 font-semibold">Verified</span>
      ) : (
        <span className="text-red-600 font-semibold">Not Verified</span>
      )}
    </p>
  </div>
  {!phoneVerified && (
    <Link to="/verify-phone" className="text-blue-600 underline font-medium mt-2">
      Verify Phone
    </Link>
  )}
</div>

{/* Change Password Box */}
<div className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center">
  <div className="space-y-1">
    <h2 className="text-lg font-semibold flex items-center gap-2">
      <Lock className="text-purple-600" />
      Change Password
    </h2>
    <p className="text-sm text-gray-600">
      For security, consider updating your password regularly.
    </p>
  </div>
  <Link to="/forgot-password" className="text-blue-600 underline font-medium mt-2">
    Change Password
  </Link>
</div>

{/* signout details*/}
<div className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center">
  <div className="space-y-1">
    <h2 className="text-lg font-semibold flex items-center gap-2">
      {/* < className="text-purple-600" /> */}
      Log-out
    </h2>
    <p className="text-sm text-gray-600">
      Log-out will logout you from this account
    </p>
  </div>
  <Link to="/forgot-password" className="text-red-600 underline font-medium mt-2">
    Logout
  </Link>
</div>


</div>
    </div>
    </div>
  )
}

export default Password;


