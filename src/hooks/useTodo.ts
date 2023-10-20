import { useState } from "react";
import { useAppDispatch } from "./redux";
import { checkedTodo, deleteTodo, updateTodo } from "../store/sliceTodo";
import { Todo } from "../types";

export const useTodo = (todo: Todo) => {
  const { id, body, checked } = todo;
  const dispatch = useAppDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(body);

  const handleUdateTodo = () => {
    dispatch(updateTodo({ body: value, id: todo.id }));
    setIsEdit(false);
  };

  const handleChecked = () => {
    dispatch(checkedTodo({ id, checked: !checked }));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  return {
    isEdit,
    setIsEdit,
    value,
    setValue,
    handleUdateTodo,
    handleChecked,
    handleDeleteTodo,
  };
};
