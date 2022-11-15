import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ data, options }, props) => {
  return (
    <div style={styles.container}>
      <Pie data={data} options={options} {...props} style={{height:'100px'}} />
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    padding:'10px 50px',
    height: "100%",
  },
};

export default PieChart;
