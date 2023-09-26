import { Button, Input, Layout, Modal } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { TodoList } from "./componets/TodoList";
import { useState } from "react";
// import { Header } from "./componets/Header";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ color: "white", textAlign: "center", fontSize: 40 }}>
        Список задач
      </Header>
      <Content>
        <Button type="primary" onClick={showModal}>
          Добавить новую задачу
        </Button>

        <TodoList />
      </Content>
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
    </Layout>
  );
}

export default App;
