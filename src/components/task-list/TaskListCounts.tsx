import styles from "./TaskListCounts.module.css";

interface TaskCountsProps {
  todoQuantity: number;
  doneQuantity: number;
}

export function TaskListCounts({
  todoQuantity,
  doneQuantity,
}: TaskCountsProps) {
  function showDoneTasksCounts() {
    if (doneQuantity + todoQuantity > 0) {
      return (
        <span>
          {doneQuantity} de {todoQuantity + doneQuantity}
        </span>
      );
    }
    return <span>0</span>;
  }

  return (
    <div className={styles.taskCounts}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{todoQuantity}</span>
      </aside>

      <aside>
        <p>Concluídas</p>
        <span>{showDoneTasksCounts()}</span>
      </aside>
    </div>
  );
}
