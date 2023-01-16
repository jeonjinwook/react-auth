import { users } from "../index";

export const login = async (userData: { email: any; password: any }) => {
  try {
    const user = await getUserByEmailOrUsername(userData);
    console.log(user);
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

export const joinUser = async (userData: {email: any; name:any; password:any}) => {
  const response = await fetch("http://localhost:8080/api/users/sign-up", {
    method: "POST", // *GET, POST, PUT, DELETE 등
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(userData), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
  });
  return response.json();
};

const getUserByEmailOrUsername = async (userData: {
  email: any;
  password: any;
}) => {
  const response = await fetch("http://localhost:8080/login", {
    method: "POST", // *GET, POST, PUT, DELETE 등
    mode: "cors", // no-cors, *cors, same-origin
    body: JSON.stringify(userData), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
  });
  return response.json();
};
