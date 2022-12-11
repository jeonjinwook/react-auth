interface User {
  id: number;
  email: string;
  username: string;
  password: string;
}

export const users: User[] = [
  { id: 1, email: "user01@test.com", username: "user01", password: "123" },
];
