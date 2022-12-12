import { users } from "../index";

export const getUserByUsername = (username) => {
  return users.filter((data) => data.username === username) || null;
};

export const getUserByEmail = (email) => {
  return users.filter((data) => data.email === email) || null;
};

export const joinUser = (userData) => {
  try {
    const newUsersList = users.push({
      id: users.reduce((maxId, user) => Math.max(user.id, maxId), -1) + 1,
      ...userData,
    });

    return { status: "success", data: newUsersList };
  } catch (error) {
    return { status: "fail" };
  }
};
