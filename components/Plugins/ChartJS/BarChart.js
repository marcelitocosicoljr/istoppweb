import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data, options }, props) => {
  return (
    <div style={styles.container}>
      <Bar data={data} options={options} {...props} />
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    height: "100%",
  },
};

export default BarChart;
