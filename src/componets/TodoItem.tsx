import { Button, Checkbox, Input } from "antd";
import { DeleteOutlined, EditOutlined, CheckOutlined } from "@ant-design/icons";
import { FC, useState } from "react";
import { Todo } from "../types";
import { useAppDispatch } from "../hooks/redux";
import { checkedTodo, deleteTodo, updateTodo } from "../store/sliceTodo";

interface TodoItemProps {
  todo: Todo;
}

const todoStyle: React.CSSProperties = {
  display: "flex",
  gap: 20,
  fontSize: 20,
  maxWidth: 560,
  margin: "0 auto",
  border: "1px solid #bdb5b5",
  padding: "5px 15px",
  borderRadius: 15,
};

const buttonsStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  justifyContent: "center",
  alignItems: "center",
};

const flexStyle: React.CSSProperties = {
  display: "flex",
  gap: 20,
  justifyContent: "center",
  alignItems: "center",
};

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const { id, body, checked, timeCreate } = todo;

  const dispatch = useAppDispatch();
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(todo.body);

  const hendleUdateTodo = () => {
    dispatch(updateTodo({ body: value, id: todo.id }));
    setEdit(false);
  };

  const hendleChecked = () => {
    dispatch(checkedTodo({ id, checked: !checked }));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div style={todoStyle}>
      <div style={flexStyle}>
        <div style={flexStyle}>
          <Checkbox onChange={hendleChecked} checked={checked} />
          {edit ? (
            <Input
              style={{ fontSize: 20 }}
              placeholder="Редактировать задачу"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          ) : (
            <h3
              style={
                checked
                  ? {
                      textDecorationLine: "line-through",
                      textDecorationStyle: "double",
                    }
                  : { textDecorationLine: "none" }
              }>
              {body}
            </h3>
          )}
        </div>
        <time style={{ fontSize: 12 }}>{timeCreate}</time>
      </div>
      <div style={buttonsStyle}>
        <Button
          onClick={() => handleDeleteTodo(id)}
          type="primary"
          shape="circle"
          icon={<DeleteOutlined />}
        />
        {edit ? (
          <Button
            onClick={hendleUdateTodo}
            type="default"
            shape="circle"
            icon={<CheckOutlined />}
          />
        ) : (
          <Button
            onClick={() => setEdit(true)}
            type="default"
            shape="circle"
            icon={<EditOutlined />}
          />
        )}
      </div>
    </div>
  );
};
