import styles from "./Form.module.css";
import { PlusCircle } from "@phosphor-icons/react";

export const Form = () => {
  return (
    <form className={styles.formGroup}>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />

      <button className={styles.button}>
        Criar
        {<PlusCircle size={18} color="#f2f2f2" weight="bold" />}
      </button>
    </form>
  );
};
