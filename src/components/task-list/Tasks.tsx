import { TaskListCounts } from "./TaskListCounts.tsx";
import styles from "./Tasks.module.css";
import { ITaskItem, ITaskItemProp, TaskItem } from "./TaskItem.tsx";
import { useState } from "react";

const items: ITaskItem[] = [
  {
    id: new Date().getTime(),
    text: "Finalizar esse projeto",
    status: false,
  },
  {
    id: new Date().getTime() + 1,
    text: "Estudar React",
    status: false,
  },
];

export function Tasks() {
  const [tasks, setTasks] = useState(items);

  function handleChangeTaskStatus(id: number, status: boolean) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.status = status;
      }
      return task;
    });
    setTasks(newTasks);
  }

  function handleDeleteTask(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  const completedTasks = tasks.filter((task) => task.status);
  const incompletedTasks = tasks.filter((task) => !task.status);
  const allTasks = [...incompletedTasks, ...completedTasks];

  function renderTasks() {
    return allTasks.map((task) => {
      const itemProps: ITaskItemProp = {
        props: task,
        onChangeStatus: handleChangeTaskStatus,
        onDeleteTask: handleDeleteTask,
      };
      return <TaskItem key={task.id} {...itemProps} />;
    });
  }

  return (
    <>
      <TaskListCounts />
      <div className={styles.listaGroup}>{renderTasks()}</div>
    </>
  );
}
