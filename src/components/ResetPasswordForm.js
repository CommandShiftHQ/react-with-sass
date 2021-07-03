import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { fields, buttons } from "../config/authForms";

const ResetPasswordForm = () => {
  return (
    <div className="form--reset-password">
      <p>We will help you to reset your password.</p>
      <Input field={fields.email} />
      <Button
        text={buttons.submitResetPassword.text}
        onClickHandler={() => {}}
      />
      <p>
        Want to try again? <Link to="/login">Log in</Link>.
      </p>
    </div>
  );
};

export default ResetPasswordForm;
