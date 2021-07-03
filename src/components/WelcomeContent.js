import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ResetPasswordForm from "./ResetPasswordForm";
import common from "../config/common";

const WelcomeContent = () => {
  return (
    <div className="welcome-content">
      <img
        src={common.logoImage}
        alt="we are ManchesterCodes"
        className="logo"
      />
      <Switch>
        <Route exact path="/">
          <RegisterForm />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/reset-password">
          <ResetPasswordForm />
        </Route>
      </Switch>
    </div>
  );
};

export default WelcomeContent;
