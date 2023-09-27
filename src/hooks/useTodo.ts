import { useState } from "react";
import { useAppDispatch } from "./redux";
import { checkedTodo, deleteTodo, updateTodo } from "../store/sliceTodo";
import { Todo } from "../types";

export const useTodo = (todo: Todo) => {
  const { id, body, checked } = todo;
  const dispatch = useAppDispatch();
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(body);

  const handleUdateTodo = () => {
    dispatch(updateTodo({ body: value, id: todo.id }));
    setEdit(false);
  };

  const handleChecked = () => {
    dispatch(checkedTodo({ id, checked: !checked }));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return {
    edit,
    setEdit,
    value,
    setValue,
    handleUdateTodo,
    handleChecked,
    handleDeleteTodo,
  };
};
