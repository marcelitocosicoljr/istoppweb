import React from "react";
import Navbar from "./Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main style={styles.mainContainer}>{children}</main>
    </div>
  );
};

export default MainLayout;

const styles = {
  mainContainer: {
    padding: "2.813rem 2rem",
  },
};
