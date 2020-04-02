import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import classNames from "classnames";

import "./sidebar.scss";
const styles = {
  wrapper: "custom-sidebar__wrapper",
  contentContainer: "custom-sidebar__content-container",
  sidebarActive: "custom-sidebar__wrapper--sidebar-active"
};

class Sidebar extends React.Component {
  state = {
    isSidebarActive: true
  };
  render() {
    return (
      <div
        className={classNames({
          [styles.wrapper]: true,
          [styles.sidebarActive]: this.state.isSidebarActive
        })}
      >
        <div className={styles.contentContainer}>Niccep</div>
      </div>
    );
  }
}

export default Sidebar;
