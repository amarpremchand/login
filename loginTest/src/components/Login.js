import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { useAlert } from "react-alert";
import UserLogin from "./models/UserLogin";
import { validUsernamePassword } from "./services/UserService";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { TextField } from "@fluentui/react/lib/TextField";
import { Stack } from "@fluentui/react/lib/Stack";

const stackTokens = { childrenGap: 15 };
const stackStyles = { root: { width: 650 } };
const columnProps = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};

const Login = () => {
  const alert = useAlert();
  const history = useHistory();
  const [user, setUser] = useState(new UserLogin());

  const userChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const goLoginSuccessful = () => {
    history.replace("/loginSuccess");
  };

  const userSuccessLogin = () => {
    if (validUsernamePassword(user)) {
      alert.success("Login Successful");
      goLoginSuccessful();
    } else {
      alert.error("Login Failed");
    }
  };

  return (
    <div>
      <Stack vertical tokens={stackTokens} styles={stackStyles}>
        <h1>Sign In</h1>
        <Stack {...columnProps}>
          <TextField
            label="Username"
            name="userName"
            type="text"
            value={user.userName}
            onChange={userChange}
            className="text"
            placeholder="Enter username"
          />
        </Stack>

        <br />
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

        <div>
          <input type="checkbox" id="Check" />
          <label className="labelCheckBox" htmlFor="Check">
            Remember me
          </label>
        </div>
      </Stack>
      <PrimaryButton
        type="submit"
        //className="submit"
        onClick={() => userSuccessLogin()}
      >
        Sign In
      </PrimaryButton>
      <p className="not-registered">
        Not registered? <Link to="/">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
