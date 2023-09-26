import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React from "react";
import { TodoItem } from "./componets/TodoItem";
// import { Header } from "./componets/Header";

function App() {
  return (
    <Layout>
      <Header style={{ color: "white", textAlign: "center", fontSize: 40 }}>
        Список задач
      </Header>
      <Content>
        <TodoItem />
      </Content>
    </Layout>
  );
}

export default App;
