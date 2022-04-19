import React from "react";

import "./ProgressChart.css";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function ProgressChart() {
  const options = {
    title: {
      text: "My chart",
    },
    series: [
      {
        name: "Progress",
        data: [1, 2, 3, 4],
      },
    ],
  };
  return (
    <div className="progressChart">
      <h3>Your progress</h3>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default ProgressChart;
