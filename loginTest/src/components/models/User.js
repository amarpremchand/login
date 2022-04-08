class User {
  firstName = "";
  lastName = "";
  userName = "";
  mail = "";
  password = "";

  constructor(
    firstName = "",
    lastName = "",
    userName = "",
    mail = "",
    password = ""
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.mail = mail;
    this.password = password;
  }
}

export default User;
