import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { fields, buttons } from "../config/authForms";

const LoginForm = () => {
  return (
    <div className="form--login">
      <Button
        text="Log in with Facebook"
        variant="facebook"
        onClickHandler={() => {}}
      />
      <div className="divider"><span>or</span></div>
      <Input field={fields.email} />
      <Input field={fields.password} />
      <Button text={buttons.submitLogIn.text} onClickHandler={() => {}} />
      <p>
        Don't have an account? <Link to="/">Sign in</Link>.
      </p>
      <p>
        Forgot password? Click here to{" "}
        <Link to="/reset-password">reset it</Link>.
      </p>
    </div>
  );
};

export default LoginForm;
