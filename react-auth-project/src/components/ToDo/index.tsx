import { useState, useImperativeHandle } from "react";
import styled from "styled-components";

import { TodoInterface } from "../../types/Todo";

import axios from "axios";

const ToDoEl = styled.li`
  display: flex;
  align-items: center;
  width: 350px;
  border-bottom: 1px solid #dbdbdb;
  padding: 10px 0;
  & > label {
    margin-left: 8px;
    width: 300px;
    padding-top: 5px;
  }
  &.completed > label {
    text-decoration: line-through;
    color: #aaa;
  }
`;

const SelectBox = styled.select``;
const DeleteToDoBtn = styled.button``;

function ToDo(todoData: TodoInterface) {
  // const { todoNo, contents, date, status } = todoData;
  const [todoForm, setTodoForm] = useState<TodoInterface>(todoData);
  // const [todoContents, setTodoContents] = useState<string>(contents);
  // const [todoStatus, setTodoStatus] = useState<string>(status);

  const toggleCompletedToDo = async (value: string) => {
    const newStatusTodo = { ...todoForm, status: value };
    await axios("http://localhost:8081/api/todo/updateTodo", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("Authorization"),
        RefreshAuthorization: localStorage.getItem("RefreshAuthorization"),
      },
      data: JSON.stringify(newStatusTodo),
    });
    setTodoForm(newStatusTodo);
  };

  const deleteToDo = async () => {
    await axios("http://localhost:8081/api/todo/deleteTodo", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("Authorization"),
        RefreshAuthorization: localStorage.getItem("RefreshAuthorization"),
      },
      data: JSON.stringify(todoForm),
    });
  };

  return (
    <ToDoEl>
      <SelectBox
        onChange={(e) => toggleCompletedToDo(e.target.value)}
        defaultValue={todoForm.status}
      >
        <option value={"todo"}>할 일</option>
        <option value={"inProgress"}>진행중</option>
        <option value={"completed"}>완료됨</option>
      </SelectBox>
      <label>{todoForm.contents}</label>
      <DeleteToDoBtn onClick={deleteToDo}>✕</DeleteToDoBtn>
    </ToDoEl>
  );
}

export default ToDo;
