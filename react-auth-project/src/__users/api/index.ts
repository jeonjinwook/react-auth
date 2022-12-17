import { users } from "../index";

export const getUserByUsername = (username) => {
  return users.filter((data) => data.username === username)[0] || null;
};

export const getUserByEmail = (email) => {
  return users.filter((data) => data.email === email)[0] || null;
};

export const joinUser = (userData) => {
  try {
    users.push({
      id: users.reduce((maxId, user) => Math.max(user.id, maxId), -1) + 1,
      ...userData,
    });

    return { status: "success" };
  } catch (error) {
    return { status: "fail", message: "Get Error" };
  }
};

export const login = (userData) => {
  try {
    const user = getUserByEmailOrUsername(userData.userId);
    if (!user) {
      return { status: "fail", message: "User Not Found" };
    } else {
      if (user.password == userData.password) {
        return { status: "success" };
      } else {
        return { status: "fail", message: "User id and Password do not match" };
      }
    }
  } catch (error) {
    return { status: "fail", message: "Get Error" };
  }
};

const getUserByEmailOrUsername = (userId) => {
  return users.filter(
    (data) => data.email === userId || data.username === userId
  )[0];
};
