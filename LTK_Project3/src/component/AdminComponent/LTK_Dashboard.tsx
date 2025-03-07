import React from "react";

const Dashboard = () => {
  return (
    <div className="container mt-3">
      <h2>Dashboard</h2>
      <div className="row gap-3 justify-content-center">
        {[
          { title: "👥 Visitors", value: "1,294" },
          { title: "📬 Subscribers", value: "1,303" },
          { title: "🛒 Sales", value: "$1,345" },
          { title: "📦 Orders", value: "576" },
        ].map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-3">
            <div className="card text-center p-3 shadow-sm rounded">
              <h4>{item.title}</h4>
              <p className="fw-bold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
