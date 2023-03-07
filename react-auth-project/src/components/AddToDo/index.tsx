import React, { useState, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

import { TodoInterface } from "../../types/Todo";
import axios from "axios";

const AddToDo = styled.div`
  width: 360px;
  height: 30px;
  box-sizing: border-box;
  margin: 0 40px 6px;
  padding-right: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background-color: #fafafa;
  & > input {
    padding: 4px 8px;
    width: 100%;
    border: none;
    background-color: transparent;
    font-size: 18px;
  }
  & > input:focus {
    border: none;
    outline: none !important;
  }
`;

interface AddToDoComponentProps {
  todoLists: TodoInterface[];
  setTodoLists: Dispatch<SetStateAction<TodoInterface[]>>;
}

function AddToDoComponent({ todoLists, setTodoLists }: AddToDoComponentProps) {
  const [contents, setContents] = useState("");
  const [date, setDate] = useState(new Date());

  const addTodo = async () => {
    const todoList: TodoInterface = {
      contents,
      date: moment(date).format("yyyyMMDD"),
      status: "todo",
    };
    const { data } = await axios("http://localhost:8081/api/todo/insertTodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("Authorization"),
        RefreshAuthorization: localStorage.getItem("RefreshAuthorization"),
      },
      data: JSON.stringify(todoList),
    });
    setTodoLists(data.data);
  };

  return (
    <AddToDo>
      <input
        value={contents}
        onChange={(e) => setContents(e.target.value)}
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") addTodo();
        }}
      />
      <DatePicker
        dateFormat={"yyyy-MM-dd"}
        selected={date}
        onChange={(date: Date) => setDate(date)}
      />
      <button onClick={addTodo}>⮐</button>
    </AddToDo>
  );
}

export default AddToDoComponent;
