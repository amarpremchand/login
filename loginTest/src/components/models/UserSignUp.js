import { User } from ".";

class UserSignUp extends User {
  confirmPassword = "";

  constructor(
    firstName = "",
    lastName = "",
    userName = "",
    mail = "",
    password = "",
    confirmPassword = ""
  ) {
    super(firstName, lastName, userName, mail, password);

    this.confirmPassword = confirmPassword;
  }
}

export default UserSignUp;
