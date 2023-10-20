import { Button } from "antd";
import { DeleteOutlined, EditOutlined, CheckOutlined } from "@ant-design/icons";
import { Dispatch, FC, SetStateAction } from "react";

import styles from "./TodoActions.module.css";

interface TodoActionsProps {
  isEdit: boolean;
  handleUdateTodo: () => void;
  handleDeleteTodo: () => void;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}

export const TodoActions: FC<TodoActionsProps> = ({
  isEdit,
  handleUdateTodo,
  handleDeleteTodo,
  setIsEdit,
}) => {
  return (
    <div className={styles.buttons}>
      <Button
        onClick={() => handleDeleteTodo()}
        type="primary"
        shape="circle"
        icon={<DeleteOutlined />}
      />
      {isEdit ? (
        <Button
          onClick={handleUdateTodo}
          type="default"
          shape="circle"
          icon={<CheckOutlined />}
        />
      ) : (
        <Button
          onClick={() => setIsEdit(true)}
          type="default"
          shape="circle"
          icon={<EditOutlined />}
        />
      )}
    </div>
  );
};
