import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar";
import Navbar from "../components/navbar/navbar";
import "./dashboard.scss";

import axiosClient from '../shared/api/axiosConfig';

const styles = {
  wrapper: "dashboard__wrapper",
  contentContainer: "dashboard__content-container"
};
class Dashboard extends React.Component {

    componentDidMount() {
        // TODO: get user details here
        axiosClient.get('googleSheets/getListOfDataSets').then((r) => {console.log('then')}).catch((err) =>{ console.log('catcg', err)});
    }
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
