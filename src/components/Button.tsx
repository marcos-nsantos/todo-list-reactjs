import styles from "./Button.module.css";
import { PlusCircle } from "@phosphor-icons/react";

export const Button = () => {
  return (
    <button className={styles.button}>
      Criar
      {<PlusCircle size={18} color="#f2f2f2" weight="bold" />}
    </button>
  );
};
