import { FC } from "react";
import { TodoItem } from "./TodoItem";
import { Todo } from "../types";

const todoList: Todo[] = [
  { id: 1, body: "Выучить js", checked: false },
  { id: 2, body: "Выучить ts", checked: false },
  { id: 3, body: "Выучить React", checked: false },
];

export const TodoList: FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
      {todoList.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </div>
  );
};
