import "./Global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header.tsx";
import { Form } from "./components/Form.tsx";

function App() {
  return (
    <div className={styles.content}>
      <Header />
      <Form />
    </div>
  );
}

export default App;
