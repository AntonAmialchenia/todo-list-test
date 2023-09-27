import { Button, Input, Modal } from "antd";
import dayjs from "dayjs";
import { FC, useState } from "react";
import { Todo } from "../types";
import { useAppDispatch } from "../hooks/redux";
import { addTodo } from "../store/sliceTodo";

export const ModalApp: FC = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
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
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Добавить новую задачу
      </Button>
      <Modal
        title="Добовление новой задачи"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="Не добовлять"
        okText="Добавить">
        <Input
          placeholder="Добавить задачу"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Modal>
    </>
  );
};
