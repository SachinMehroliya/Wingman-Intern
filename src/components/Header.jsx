import React from "react";

const Header = () => {
  return (
    <header className="flex items-center mb-4">
      <div className="text-lg font-semibold bg-green-100 text-green-800 px-4 py-2 rounded-3xl">
        Summary
      </div>
      <div className="ml-6 text-gray-500 cursor-pointer">Sales</div>
      <div className="ml-6 text-gray-500 cursor-pointer">Chats</div>
    </header>
  );
};

export default Header;
