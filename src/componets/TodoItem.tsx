import { Button, Checkbox } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { FC } from "react";
import { Todo } from "../types";
import { useAppDispatch } from "../hooks/redux";
import { deleteTodo } from "../store/sliceTodo";

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
  const dispatch = useAppDispatch();
  const handlDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div style={todoStyle}>
      <Checkbox checked={todo.checked} />
      <h3>{todo.body}</h3>
      <Button
        onClick={() => handlDeleteTodo(todo.id)}
        type="primary"
        shape="circle"
        icon={<DeleteOutlined />}
      />
      <time style={{ fontSize: 12 }}>{todo.timeCreate}</time>
    </div>
  );
};
