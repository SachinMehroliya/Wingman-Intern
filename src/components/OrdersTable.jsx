import React from "react";

const OrderTable = () => {
  // Sample order data including product photo URL
  const orders = [
    {
      id: 1,
      productName: "Product Name 1",
      date: "24 Apr 2024",
      timeSpent: "2h 5m",
      orderValue: "$102.21",
      commission: "$10.00",
      photo: "https://via.placeholder.com/40", // Replace with your photo URL
    },
    {
      id: 2,
      productName: "Product Name 2",
      date: "25 Apr 2024",
      timeSpent: "1h 15m",
      orderValue: "$230.75",
      commission: "$20.50",
      photo: "https://via.placeholder.com/40",
    },
    {
      id: 3,
      productName: "Product Name 3",
      date: "26 Apr 2024",
      timeSpent: "3h 40m",
      orderValue: "$452.10",
      commission: "$30.75",
      photo: "https://via.placeholder.com/40",
    },
  ];

  return (
    <section className="mb-8 px-4 py-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-6 text-gray-700">Order Summary</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse bg-white rounded-lg shadow-md">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-100 text-gray-700 uppercase text-sm tracking-wide">
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Time Spent</th>
              <th className="p-4 text-left">Order Value</th>
              <th className="p-4 text-left">Commission</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-t hover:bg-gray-50 transition-all duration-200 ease-in-out"
              >
                {/* Product with Photo */}
                <td className="p-4 flex items-center">
                  <img
                    src={order.photo}
                    alt="Product"
                    className="w-10 h-10 rounded-full mr-4 hidden md:block"
                  />
                  <span className="text-gray-800 font-medium">{order.productName}</span>
                </td>

                {/* Date */}
                <td className="p-4 text-gray-600">{order.date}</td>

                {/* Time Spent */}
                <td className="p-4 text-gray-600">{order.timeSpent}</td>

                {/* Order Value */}
                <td className="p-4 text-gray-600 font-semibold">{order.orderValue}</td>

                {/* Commission */}
                <td className="p-4 text-gray-600">{order.commission}</td>

                {/* View Graph Button */}
                <td className="p-4">
                  <button
                    className="text-blue-600 hover:text-blue-800 font-semibold underline transform transition duration-300 ease-in-out hover:scale-105"
                    onClick={() => alert(`Viewing graph for ${order.productName}`)}
                  >
                    View Graph
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default OrderTable;


  