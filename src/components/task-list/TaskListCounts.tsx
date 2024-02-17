import styles from "./TaskListCounts.module.css";

export function TaskListCounts() {
  return (
    <div className={styles.taskCounts}>
      <aside>
        <p>Tarefas criadas</p>
        <span>5</span>
      </aside>

      <aside>
        <p>Concluídas</p>
        <span>2</span>
      </aside>
    </div>
  );
}
