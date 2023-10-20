import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { TodoList } from "../components/TodoList";
import { ModalApp } from "../components/ModalApp";

import styles from "./App.module.css";

function App() {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>Список задач</Header>
      <Content className={styles.content}>
        <ModalApp />
        <TodoList />
      </Content>
    </Layout>
  );
}

export default App;
