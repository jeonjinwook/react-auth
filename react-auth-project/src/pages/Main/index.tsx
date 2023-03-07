import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { TodoInterface } from "../../types/Todo";
import ToDoList from "../../components/ToDoList";
import AddToDoComponent from "../../components/AddToDo";
import AuthButton from "../../components/AuthButton";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Buttons = styled.div`
  width: 100%;
  dispaly: flex;
  flex-direction: row;
`;

const Title = styled.h1`
  font-size: xxx-large;
`;

const Main = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [todoLists, setTodoLists] = useState<TodoInterface[]>([]);

  const userLogoutBtn = async () => {
    const response = await axios("http://localhost:8081/api/users/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("Authorization"),
        RefreshAuthorization: localStorage.getItem("RefreshAuthorization"),
      },
      data: JSON.stringify({}),
    });
    localStorage.setItem("isLogin", "false");
    navigate("/login");
  };

  const userDelete = async () => {
    const response = await axios("http://localhost:8081/api/users/deleteUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("Authorization"),
        RefreshAuthorization: localStorage.getItem("RefreshAuthorization"),
      },
      data: JSON.stringify({}),
    });

    return response.data;
  };

  const userDeleteBtn = async () => {
    const { result, message } = await userDelete();
    if (result === "success") {
      localStorage.setItem("isLogin", "false");
      alert(message);
      navigate("/login");
    } else {
      alert(message);
    }
  };

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin") || "false";

    if (isLogin === "false") {
      navigate("/login");
    }
    const getTodoListData = async () => {
      const { data } = await axios(
        "http://localhost:8081/api/todo/getTodoList",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("Authorization"),
            RefreshAuthorization: localStorage.getItem("RefreshAuthorization"),
          },
          data: JSON.stringify({ selectType: "ALL" }),
        }
      );
      setTodoLists(data.data);
    };

    getTodoListData();
  }, []);

  useEffect(() => {}, [todoLists]);

  return (
    <section>
      <AppContainer>
        <Buttons>
          <AuthButton onClick={userLogoutBtn} title={`로그아웃`} />
          <AuthButton onClick={userDeleteBtn} title={`회원탈퇴`} />
        </Buttons>
        <Title>To Do List</Title>
        <AddToDoComponent todoLists={todoLists} setTodoLists={setTodoLists} />
        <ToDoList todoLists={todoLists} setTodoLists={setTodoLists} />
      </AppContainer>
    </section>
  );
};

export default Main;
