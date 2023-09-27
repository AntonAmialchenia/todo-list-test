import { Button, Input, Modal } from "antd";
import { FC } from "react";
import { useModal } from "../hooks/useModal";

export const ModalApp: FC = () => {
  const {
    value,
    setValue,
    showModal,
    isModalOpen,
    handleAddTodo,
    handleCancel,
  } = useModal();

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 15 }}>
        <Button type="primary" onClick={showModal}>
          Добавить новую задачу
        </Button>
      </div>
      <Modal
        title="Добовление новой задачи"
        open={isModalOpen}
        onOk={handleAddTodo}
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
