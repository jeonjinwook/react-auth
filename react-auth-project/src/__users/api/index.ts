import axios from "axios";

export const login = async (userData: { email: any; password: any }) => {
  try {
    const user = await getUserByEmailOrUsername(userData);
    return user;
  } catch (error) {
    return { status: "fail", message: "Get Error" };
  }
};

export const joinUser = async (userData: {
  email: any;
  name: any;
  password: any;
}) => {
  const response = await axios("http://localhost:8081/api/users/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(userData),
  });
  return response.data;
};

const getUserByEmailOrUsername = async (userData: {
  email: any;
  password: any;
}) => {
  const response = await axios("http://localhost:8081/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(userData),
  });

  localStorage.setItem("Authorization", response.headers.authorization!);
  localStorage.setItem(
    "RefreshAuthorization",
    response.headers.refreshauthorization!
  );
  return response.data;
};
