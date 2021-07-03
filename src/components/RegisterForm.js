import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { fields, buttons } from "../config/authForms";

const RegisterForm = () => {
  return (
    <div className="form--register">
      <Button
        text="Sign-up with Facebook"
        variant="facebook"
        onClickHandler={() => {}}
      />
      <div className="divider">or</div>
      <Input field={fields.email} />
      <Input field={fields.password} />
      <Button text={buttons.submitSignIn.text} onClickHandler={() => {}} />
      <p>
        Already have an account? <Link to="/login">Log in</Link>.
      </p>
    </div>
  );
};

export default RegisterForm;
