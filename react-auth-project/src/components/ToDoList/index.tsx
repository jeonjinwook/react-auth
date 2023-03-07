import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

import ToDo from "../ToDo";
import { TodoInterface } from "../../types/Todo";

import axios from "axios";

const ToDoListBox = styled.ul`
  width: 350px;
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

const SelectBox = styled.select``;

interface ToDoListProps {
  todoLists: TodoInterface[];
  setTodoLists: Dispatch<SetStateAction<TodoInterface[]>>;
}

function ToDoList({ todoLists, setTodoLists }: ToDoListProps) {
  const setToDoListFilterValue = async (e: any) => {
    const { data } = await axios("http://localhost:8081/api/todo/getTodoList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("Authorization"),
        RefreshAuthorization: localStorage.getItem("RefreshAuthorization"),
      },
      data: JSON.stringify({ selectType: e }),
    });
    setTodoLists(data.data);
  };

  return (
    <div>
      <ToDoListBox>
        <SelectBox onChange={(e) => setToDoListFilterValue(e.target.value)}>
          <option value={"ALL"}>전체 목록</option>
          <option value={"RECENTLY_TODO"}>최근 작성된 TODO 한개</option>
        </SelectBox>
        {todoLists.map((data: TodoInterface) => (
          <ToDo key={data.todoNo} {...data} />
        ))}
      </ToDoListBox>
    </div>
  );
}

export default ToDoList;
