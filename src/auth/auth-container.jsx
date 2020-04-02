import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import classNames from "classnames";

import Login from "./login/login";
import Register from "./register/register";
import "./auth-container.scss";
const styles = {
  wrapper: "auth-container__wrapper",
  contentContainer: "auth-container__content-container",
};

class Auth extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.contentContainer}>
          <Switch>
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/register" component={Register} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Auth;
