import { users } from "../index";

export const getUserByUsername = (username) => {
  return users.filter((data) => data.username === username) || null;
};

export const getUserByEmail = (email) => {
  return users.filter((data) => data.email === email) || null;
};
