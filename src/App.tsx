import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { TodoList } from "./componets/TodoList";
// import { Header } from "./componets/Header";

function App() {
  return (
    <Layout>
      <Header style={{ color: "white", textAlign: "center", fontSize: 40 }}>
        Список задач
      </Header>
      <Content>
        <TodoList />
      </Content>
    </Layout>
  );
}

export default App;
