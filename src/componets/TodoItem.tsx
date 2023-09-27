import { Button, Checkbox } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { FC } from "react";
import { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
}

const todoStyle = {
  display: "flex",
  gap: 20,
  justifyContent: "center",
  alignItems: "center",
  fontSize: 20,
  maxWidth: 460,
  margin: "0 auto",
  border: "1px solid #bdb5b5",
  padding: "0 15px",
  borderRadius: 15,
};

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div style={todoStyle}>
      <Checkbox checked={todo.checked} />
      <h3>{todo.body}</h3>
      <Button type="primary" shape="circle" icon={<DeleteOutlined />} />
      <time style={{ fontSize: 12 }}>{todo.timeCreate}</time>
    </div>
  );
};
