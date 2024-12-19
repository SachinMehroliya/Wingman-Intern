import React from "react";

const Forecast = () => {
  return (
    <div className="p-6 bg-green-100 text-green-800 rounded-lg flex justify-between mb-8">
      <div>
        <p className="text-lg font-semibold">+15%</p>
        <p>Forecasted increase by the end of the month</p>
      </div>
      <div>
        <p className="text-lg font-semibold">+20%</p>
        <p>Increase in cumulative sales</p>
      </div>
    </div>
  );
};

export default Forecast;
