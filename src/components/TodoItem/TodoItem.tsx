import { Checkbox } from "antd";
import { FC } from "react";

import { Todo } from "../../types";
import { useTodo } from "../../hooks/useTodo";
import { TodoBody } from "../TodoBody";
import { TodoActions } from "../TodoActions";

import styles from "./TodoItem.module.css";
interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const { body, checked, timeCreate } = todo;
  const {
    value,
    setValue,
    isEdit,
    setIsEdit,
    handleChecked,
    handleDeleteTodo,
    handleUdateTodo,
  } = useTodo(todo);

  return (
    <div className={styles.todo}>
      <div className={styles.flex}>
        <div className={styles.flex}>
          <Checkbox onChange={handleChecked} checked={checked} />
          <TodoBody
            body={body}
            value={value}
            checked={checked}
            setValue={setValue}
            isEdit={isEdit}
          />
        </div>
        <time className={styles.time}>{timeCreate}</time>
      </div>
      <TodoActions
        isEdit={isEdit}
        handleUdateTodo={handleUdateTodo}
        handleDeleteTodo={handleDeleteTodo}
        setIsEdit={setIsEdit}
      />
    </div>
  );
};
