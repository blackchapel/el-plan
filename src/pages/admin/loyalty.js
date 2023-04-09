import React, { useState } from "react";
import Chart from "react-google-charts";
import AdminNavbar from "../../components/admin/admin_navbar/adminNavbar"

const Loyalty = () => {
  const LineData = [
    ["x", "line"],
    [1, 5.8],
    [2, 6.9],
    [3, 4.2],
    [4, 5.1],
    [5, 9.0],
  ];

  const LineChartOptions = {
    hAxis: {
      title: "Product",
    },
    vAxis: {
      title: "Popularity",
    },
    series: {
      1: { curveType: "function" },
    },
  };
  return (
    <>
    <AdminNavbar />
      <div>
        {/* <Linechart chartdata={chartdata} /> */}
        <div className="container mt-5">
          <h2>Popularity of products</h2>
          <Chart
            width={"700px"}
            height={"410px"}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={LineData}
            options={LineChartOptions}
            rootProps={{ "data-testid": "2" }}
          />
        </div>
      </div>
    </>
  );
};

export default Loyalty;
