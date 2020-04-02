import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar";
import Navbar from "../components/navbar/navbar";
import "./dashboard.scss";
const styles = {
  wrapper: "dashboard__wrapper",
  contentContainer: "dashboard__content-container"
};
class Dashboard extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Navbar />
        <Sidebar />
        <div className={styles.contentContainer}>Dashboard</div>
      </div>
    );
  }
}

export default Dashboard;
