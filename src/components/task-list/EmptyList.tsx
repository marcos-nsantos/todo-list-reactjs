import styles from "./EmptyList.module.css";
import clipboard from "../../assets/img/clipboard.svg";

export function EmptyList() {
  return (
    <div className={styles.emptyList}>
      <img src={clipboard} alt="Lista vazia" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
