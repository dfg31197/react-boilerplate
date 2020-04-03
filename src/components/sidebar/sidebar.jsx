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
  render() {
    return (
      <div
        className={classNames({
          [styles.wrapper]: true,
          [styles.sidebarActive]: this.props.isSidebarExpanded
        })}
      >
        <div className={styles.contentContainer}>Sidebar</div>
      </div>
    );
  }
}

export default Sidebar;
