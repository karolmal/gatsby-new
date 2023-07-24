import React from "react";
function Hero() {
  return (
    <li className="py-4 flex">
      <img
        className="h-10 w-10 rounded-full"
        src="https://images.unsplash.com/photo-1681276159290-29989388a728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80"
        alt=""
      />
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">Karol</p>
        <p className="text-sm text-gray-500">Walsall</p>
      </div>
    </li>
  );
}

export default Hero;
