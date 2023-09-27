import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { TodoList } from "./componets/TodoList";
import { ModalApp } from "./componets/ModalApp";

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ color: "white", textAlign: "center", fontSize: 40 }}>
        Список задач
      </Header>
      <Content style={{ padding: 20 }}>
        <ModalApp />

        <TodoList />
      </Content>
    </Layout>
  );
}

export default App;
