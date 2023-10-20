import { Input } from "antd";
import { Dispatch, FC, SetStateAction } from "react";

import styles from "./TodoBody.module.css";

interface TodoBodyProps {
  body: string;
  value: string;
  isEdit: boolean;
  setValue: Dispatch<SetStateAction<string>>;
  checked: boolean;
}

export const TodoBody: FC<TodoBodyProps> = ({
  body,
  value,
  isEdit,
  setValue,
  checked,
}) => {
  return (
    <>
      {isEdit ? (
        <Input
          className={styles.font}
          placeholder="Редактировать задачу"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <h3 className={checked ? styles.decoration : styles.decorationNone}>
          {body}
        </h3>
      )}
    </>
  );
};
