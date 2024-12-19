import React from "react";

const Card = ({ title, value, percentage, isIncrease }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:translate-y-1 flex flex-col space-y-2">
      {/* Title */}
      <h3 className="text-gray-500 text-sm">{title}</h3>

      {/* Value */}
      <p className="text-2xl font-semibold">{value}</p>

      {/* Increase/Decrease */}
      <p
        className={`text-sm font-medium ${
          isIncrease ? "text-green-500" : "text-red-500"
        }`}
      >
        {isIncrease ? "📈" : "📉"} {percentage} {isIncrease ? "Increase" : "Decrease"}
      </p>
    </div>
  );
};

export default Card;





// import React from "react";

// const Card = ({ title, value, percentage, isIncrease }) => {
//   return (
//     <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:translate-y-1 flex flex-col space-y-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
//       {/* Title */}
//       <h3 className="text-gray-600 text-sm font-medium">{title}</h3>

//       {/* Value */}
//       <p className="text-4xl font-bold text-gray-800">{value}</p>

//       {/* Increase/Decrease */}
//       <p
//         className={`text-sm font-medium flex items-center ${
//           isIncrease ? "text-green-500" : "text-red-500"
//         }`}
//       >
//         <span className="mr-2 text-2xl">{isIncrease ? "📈" : "📉"}</span>
//         <span>{percentage}</span>
//         <span className="ml-2">{isIncrease ? "Increase" : "Decrease"}</span>
//       </p>
//     </div>
//   );
// };

// export default Card;





