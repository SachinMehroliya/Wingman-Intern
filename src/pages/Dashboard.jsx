import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Insights from "../components/Insights";
// import Forecast from "../components/Forecast";
import OrdersTable from "../components/OrdersTable";

const Dashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6 md:pl-20">
      {/* Header */}
      <Header />

      {/* At a Glance */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">At a glance</h2>
        <div className="grid grid-cols-3 gap-6">
          <Card title="Consultations" value="24" percentage="15%" isIncrease={true} />
          <Card title="Orders Placed" value="12" percentage="15%" isIncrease={false} />
          <Card title="Conversion" value="50%" percentage="15%" isIncrease={false} />
          <Card title="Total Sales Value" value="$2,400" percentage="15%" isIncrease={true} />
          <Card title="Avg Order Value" value="$240" percentage="15%" isIncrease={true} />
          <Card title="Commission Paid" value="$240" percentage="15%" isIncrease={true} />
        </div>
      </section>

      {/* Insights */}
      <Insights />

      {/* Forecast
      <Forecast /> */}

      {/* Orders */}
      <OrdersTable />
    </div>
  );
};

export default Dashboard;
