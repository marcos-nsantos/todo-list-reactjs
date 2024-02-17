import "./Global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header.tsx";
import { Form } from "./components/Form.tsx";
import { Tasks } from "./components/task-list/Tasks.tsx";

function App() {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <Form />
        <Tasks />
      </main>
    </>
  );
}

export default App;
