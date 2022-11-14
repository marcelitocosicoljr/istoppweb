import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ data, options }, props) => {
  return (
    <div style={styles.container}>
      <Pie data={data} options={options} {...props} />
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    height: "100%",
  },
};

export default PieChart;
