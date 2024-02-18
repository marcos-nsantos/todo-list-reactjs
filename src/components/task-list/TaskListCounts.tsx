import styles from "./TaskListCounts.module.css";

interface TaskCountsProps {
  todoQuantity: number;
  doneQuantity: number;
}

export function TaskListCounts({
  todoQuantity,
  doneQuantity,
}: TaskCountsProps) {
  return (
    <div className={styles.taskCounts}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{todoQuantity}</span>
      </aside>

      <aside>
        <p>Concluídas</p>
        <span>
          {doneQuantity} de {todoQuantity + doneQuantity}
        </span>
      </aside>
    </div>
  );
}
