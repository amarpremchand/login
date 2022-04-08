import { Users } from "../db";

const add = (e) => {
  Users.push(e);
};

const notEmpty = (e) => {
  let answer;
  e === "" ? (answer = false) : (answer = true);

  return answer;
};

const invalidMail = (e) => {
  let answer = false;

  if (!e.includes("@") || !e.includes(".com")) answer = true;

  return answer;
};

const uniqueUser = (e) => {
  for (let i = 0; i < Users.length; i++) {
    if (e === Users[i].userName) return false;
  }

  return true;
};

const uniqueMail = (e) => {
  for (let i = 0; i < Users.length; i++) {
    if (e === Users[i].mail) return false;
  }

  return true;
};

const validUsernamePassword = (e) => {
  for (let i = 0; i < Users.length; i++) {
    if (e.userName === Users[i].userName && e.password === Users[i].password)
      return true;
  }

  return false;
};

export {
  add,
  invalidMail,
  uniqueUser,
  notEmpty,
  uniqueMail,
  validUsernamePassword,
};
