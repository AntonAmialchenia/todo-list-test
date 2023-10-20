import dayjs from "dayjs";
import { Todo } from "../types";
import { addTodo } from "../store/sliceTodo";
import { useAppDispatch } from "./redux";
import { useState } from "react";

export const useModal = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("");
  const [inputError, setInputError] = useState<string | null>(null);

  const showModal = () => {
    setIsModalOpen(true);
    // Очистка ошибок и значения при открытии модального окна
    setValue("");
    setInputError(null);
  };

  const validateInput = (): boolean => {
    if (!value.trim()) {
      setInputError(
        "Поле не может быть пустым. Пожалуйста, введите некоторое значение.",
      );
      return false;
    }
    return true;
  };

  const handleAddTodo = () => {
    if (!validateInput()) {
      // Если ввод не валиден, не продолжаем создание задачи
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      body: value,
      checked: false,
      timeCreate: dayjs().format("h:mm:ss"),
    };

    dispatch(addTodo(newTodo));
    setValue("");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setValue("");
    setIsModalOpen(false);
  };

  return {
    value,
    setValue,
    isModalOpen,
    showModal,
    handleAddTodo,
    handleCancel,
    inputError,
  };
};
