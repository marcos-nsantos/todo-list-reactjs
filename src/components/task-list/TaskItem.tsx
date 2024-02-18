import styles from "./Item.module.css";
import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";

export interface ITaskItem {
  id: number;
  text: string;
  status: boolean;
}

export interface ITaskItemProp {
  props: ITaskItem;
  onChangeStatus: (id: number, status: boolean) => void;
  onDeleteTask: (id: number) => void;
}

export function TaskItem({
  props,
  onChangeStatus,
  onDeleteTask,
}: ITaskItemProp) {
  function handleChangeTaskStatus() {
    onChangeStatus(props.id, !props.status);
  }

  function handleDeleteTask() {
    onDeleteTask(props.id);
  }

  function renderIcon() {
    if (!props.status) {
      return <Circle size={18} weight="bold" color="#4ea8d3" />;
    }
    return <CheckCircle size={18} weight="fill" color="#5e60ce" />;
  }

  function renderText() {
    const textClassName = props.status
      ? `${styles.paragraph} ${styles["text-line-through"]}`
      : styles.paragraph;
    return <p className={textClassName}>{props.text}</p>;
  }

  return (
    <div className={styles.item}>
      <div>
        <label htmlFor="item">
          <input type="checkbox" />
          <span className={styles.checkbox} onClick={handleChangeTaskStatus}>
            {renderIcon()}
          </span>
        </label>

        {renderText()}
      </div>

      <button onClick={handleDeleteTask}>
        {<Trash size={16} color="#808080" />}
      </button>
    </div>
  );
}
