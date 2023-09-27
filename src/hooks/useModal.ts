import dayjs from "dayjs";
import { Todo } from "../types";
import { addTodo } from "../store/sliceTodo";
import { useAppDispatch } from "./redux";
import { useState } from "react";

export const useModal = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleAddTodo = () => {
    const newTodo: Todo = {
      id: Date.now(),
      body: value,
      checked: false,
      timeCreate: dayjs().format("h:mm:ss"),
    };

    if (value) {
      dispatch(addTodo(newTodo));
    }

    setValue("");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return {
    value,
    setValue,
    isModalOpen,
    showModal,
    handleAddTodo,
    handleCancel,
  };
};
