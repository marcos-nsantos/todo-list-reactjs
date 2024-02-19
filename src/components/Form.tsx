import styles from "./Form.module.css";
import { PlusCircle } from "@phosphor-icons/react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface IFormProps {
  onCreateTask: (text: string) => void;
}

export const Form = ({ onCreateTask }: IFormProps) => {
  const [taskText, setTaskText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    onCreateTask(taskText);
    setTaskText("");
  }

  function handleNewTaskOnChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.formGroup}>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={taskText}
        onChange={handleNewTaskOnChange}
        onInvalid={handleNewTaskInvalid}
        required
      />

      <button className={styles.button}>
        Criar
        {<PlusCircle size={18} color="#f2f2f2" weight="bold" />}
      </button>
    </form>
  );
};
