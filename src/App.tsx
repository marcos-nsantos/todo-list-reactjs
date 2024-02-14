import "./Global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header.tsx";
import { Input } from "./components/Input.tsx";

function App() {
  return (
    <div className={styles.content}>
      <Header />
      <Input />
    </div>
  );
}

export default App;
