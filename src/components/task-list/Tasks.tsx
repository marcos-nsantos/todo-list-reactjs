import { TaskListCounts } from "./TaskListCounts.tsx";
import { Item } from "./Item.tsx";
import styles from "./Tasks.module.css";

export function Tasks() {
  return (
    <>
      <TaskListCounts />

      <div className={styles.listaGroup}>
        <Item />
        <Item />
        <Item />
      </div>
    </>
  );
}
