import styles from "./Form.module.css";
import { Input } from "./Input.tsx";
import { Button } from "./Button.tsx";

export const Form = () => {
  return (
    <div className={styles.wrapper}>
      <Input />
      <Button />
    </div>
  );
};
