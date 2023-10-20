import { FC } from "react";
import { TodoItem } from "../TodoItem";
import { useAppSelector } from "../../hooks/redux";

import styles from "./TodoList.module.css";

export const TodoList: FC = () => {
  const { todos } = useAppSelector((state) => state.todo);
  return (
    <div className={styles.flex}>
      {todos.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </div>
  );
};
