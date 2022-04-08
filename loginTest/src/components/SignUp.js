import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./SignUp.css";
import { useAlert } from "react-alert";
import UserSignUp from "./models/UserSignUp";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { TextField } from "@fluentui/react/lib/TextField";
import { Stack } from "@fluentui/react/lib/Stack";
import { MessageBar, MessageBarButton, MessageBarType } from "@fluentui/react";

import {
  add,
  invalidMail,
  uniqueUser,
  notEmpty,
  uniqueMail,
} from "./services/UserService";

//import * as functions form
//functions.f

const stackTokens = { childrenGap: 15 };
const stackStyles = { root: { width: 650 } };
const columnProps = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};

const SignUp = () => {
  const alert = useAlert();
  const history = useHistory();

  const [user, setUser] = useState(new UserSignUp());

  const userChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const goLogin = () => {
    history.replace("/login");
  };

  const validateEmptyFields = () => {
    if (notEmpty(user.firstName) && notEmpty(user.lastName)) return;

    alert.show("No fields can be empty");
  };

  const validateMail = () => {
    // mail validation process

    if (!invalidMail(user.mail) && notEmpty(user.mail) && uniqueMail(user.mail))
      return;

    alert.show(
      "Mail has to contain @ and .com or has already been used and cannot be empty"
    );
  };

  const validateUsername = () => {
    let validationResult;
    // username validation process
    validationResult = uniqueUser(user.userName);

    if (validationResult && notEmpty(user.userName)) return;

    alert.show("Username already exists or cannot be empty");
  };

  const validatePassword = () => {
    let validationResult = user.password;
    // password validation process

    if (
      validationResult === user.confirmPassword &&
      notEmpty(user.password) &&
      notEmpty(user.confirmPassword)
    )
      return;

    /*<MessageBar
      messageBarType={MessageBarType.error}
      isMultiline={false}
      onDismiss={() => alert("onDismiss!")}
      dismissButtonAriaLabel="Close"
    >
      Error MessageBar with single line, with dismiss button.
    </MessageBar>;*/

    alert.show("Passwords do not match and cannot be empty");
  };

  const userSuccess = () => {
    if (
      uniqueMail(user.mail) &&
      uniqueUser(user.userName) &&
      notEmpty(user.firstName) &&
      notEmpty(user.lastName) &&
      user.password === user.confirmPassword
    ) {
      add(user);
      // add user  validation process
      alert.success("User added succesfully");
      goLogin();
    } else return;
  };

  const validateAll = () => {
    validatePassword();
    validateMail();
    validateUsername();
    validateEmptyFields();
    userSuccess();
  };

  const WarningExample = () => (
    <MessageBar messageBarType={MessageBarType.error}>
      Error MessageBar with single line, with dismiss button.
    </MessageBar>
  );

  return (
    <div>
      <h1>Sign Up</h1>
      <Stack vertical tokens={stackTokens} styles={stackStyles}>
        <Stack {...columnProps}>
          <TextField
            label="First Name"
            name="firstName"
            value={user.firstName}
            onChange={userChange}
            className="text"
            placeholder="First name"
          />
        </Stack>
        <Stack {...columnProps}>
          <TextField
            label="Last Name"
            name="lastName"
            type="text"
            value={user.lastName}
            onChange={userChange}
            className="text"
            placeholder="Last name"
          />
        </Stack>

        <Stack {...columnProps}>
          <TextField
            label="Username"
            name="userName"
            type="text"
            value={user.userName}
            onChange={userChange}
            className="text"
            placeholder="Last name"
          />
        </Stack>

        <Stack {...columnProps}>
          <TextField
            label="Email Address"
            name="mail"
            type="email"
            value={user.mail}
            onChange={userChange}
            className="text"
            placeholder="Enter email"
          />
        </Stack>

        <Stack {...columnProps}>
          <TextField
            label="Password"
            name="password"
            type="password"
            value={user.password}
            onChange={userChange}
            className="text"
            placeholder="Enter password"
          />
        </Stack>

        <Stack {...columnProps}>
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={user.confirmPassword}
            onChange={userChange}
            className="text"
            placeholder="Re-enter password"
          />
        </Stack>
      </Stack>
      <PrimaryButton
        //className="submit"
        text="Sign Up"
        onClick={() => {
          validateAll();
          //WarningExample();
        }}
      />
      <p className="remember-me">
        Already registered? <Link to="login">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp;
