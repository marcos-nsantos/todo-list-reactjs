import "./Global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header.tsx";
import { Form } from "./components/Form.tsx";
import { useState } from "react";
import {
  ITaskItem,
  ITaskItemProp,
  TaskItem,
} from "./components/task-list/TaskItem.tsx";
import { TaskListCounts } from "./components/task-list/TaskListCounts.tsx";

function App() {
  const [tasks, setTasks] = useState<ITaskItem[]>([]);

  function handleAddNewTask(text: string) {
    const newTask = {
      id: new Date().getTime(),
      text,
      status: false,
    };
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  function handleToggleTaskStatus(id: number) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const completedTasks = tasks.filter((task) => task.status);
  const incompletedTasks = tasks.filter((task) => !task.status);
  const allTasks = [...incompletedTasks, ...completedTasks];

  function renderTasks() {
    return allTasks.map((task) => {
      const itemProps: ITaskItemProp = {
        props: task,
        onChangeStatus: handleToggleTaskStatus,
        onDeleteTask: handleDeleteTask,
      };
      return <TaskItem key={task.id} {...itemProps} />;
    });
  }

  return (
    <>
      <Header />

      <main className={styles.content}>
        <Form onCreateTask={handleAddNewTask} />
        <TaskListCounts
          todoQuantity={incompletedTasks.length}
          doneQuantity={completedTasks.length}
        />
        <div className={styles.listGroup}>{renderTasks()}</div>
      </main>
    </>
  );
}

export default App;
