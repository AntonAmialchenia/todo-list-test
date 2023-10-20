import { Button, Input, Modal } from "antd";
import { FC } from "react";
import { useModal } from "../../hooks/useModal";

import styles from "./ModalApp.module.css";

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
      <div className={styles.flex}>
        <Button type="primary" onClick={showModal}>
          Добавить новую задачу
        </Button>
      </div>
      <Modal
        title="Доавление новой задачи"
        open={isModalOpen}
        onOk={handleAddTodo}
        onCancel={handleCancel}
        cancelText="Не добавлять"
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
