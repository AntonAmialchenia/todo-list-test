import { Button, Checkbox } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { FC } from "react";
import { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
      }}>
      <Checkbox checked={todo.checked} />
      <h3>{todo.body}</h3>
      <Button type="primary" shape="circle" icon={<DeleteOutlined />} />
    </div>
  );
};
