import { Button, Checkbox } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { FC } from "react";

export const TodoItem: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
      }}>
      <Checkbox />
      <h3>Выучить Typescript</h3>
      <Button type="primary" shape="circle" icon={<DeleteOutlined />} />
    </div>
  );
};
