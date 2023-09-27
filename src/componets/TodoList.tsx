import { FC } from "react";
import { TodoItem } from "./TodoItem";
import { useAppSelector } from "../hooks/redux";

export const TodoList: FC = () => {
  const { todos } = useAppSelector((state) => state.todo);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
      {todos.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </div>
  );
};
