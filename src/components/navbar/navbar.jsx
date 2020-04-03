import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import classNames from "classnames";

import "./navbar.scss";
const styles = {
  wrapper: "custom-navbar__wrapper",
  contentContainer: "custom-navbar__content-container",
  sidebarToggleButton: "custom-navbar__sidebar-toggle-button",
};

class Navbar extends React.Component {
  state = {
    isSidebarActive: true
  };

  handleSidebarToggle = () => {
    this.props.toggleSidebar();
  };
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.contentContainer}>
          <button className={styles.sidebarToggleButton} onClick={this.handleSidebarToggle}>☰</button>
          Navbar
        </div>
      </div>
    );
  }
}

export default Navbar;
