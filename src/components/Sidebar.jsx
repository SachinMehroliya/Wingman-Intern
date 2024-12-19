import React from "react";
import { FaChartBar, FaShoppingCart, FaCommentDots } from "react-icons/fa"; // Icons
import { FiHome } from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="w-16 bg-[#109E8B] h-screen fixed top-0 left-0 flex flex-col items-center py-4 space-y-8">
      {/* Logo */}
      <div className="text-white text-2xl font-bold">
        <img
          src="https://via.placeholder.com/40" // Placeholder for logo
          alt="Logo"
          className="w-10 h-10 rounded-full"
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 flex flex-col items-center space-y-6">
        <a
          href="#"
          className="text-white text-2xl hover:bg-green-700 p-2 rounded"
          title="Home"
        >
          <FiHome />
        </a>

        <a
          href="#"
          className="text-white text-2xl hover:bg-green-700 p-2 rounded"
          title="Summary"
        >
          <FaChartBar />
        </a>

        <a
          href="#"
          className="text-white text-2xl hover:bg-green-700 p-2 rounded"
          title="Sales"
        >
          <FaShoppingCart />
        </a>

        <a
          href="#"
          className="text-white text-2xl hover:bg-green-700 p-2 rounded"
          title="Chats"
        >
          <FaCommentDots />
        </a>
      </nav>

      {/* Bottom Placeholder (Logout or Settings Icon) */}
      <div className="text-white text-2xl">
        <img
          src="https://via.placeholder.com/40" // Example for user/profile image
          alt="User"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
