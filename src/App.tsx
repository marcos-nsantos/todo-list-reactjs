import "./Global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header.tsx";
import { Form } from "./components/Form.tsx";

function App() {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <Form />
      </div>
    </>
  );
}

export default App;
