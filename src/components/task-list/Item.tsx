import styles from "./Item.module.css";
import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";
import { useState } from "react";

export function Item() {
  const [isDone, setIsDone] = useState(false);

  function handleChangeTaskStatus() {
    setIsDone(!isDone);
  }

  function renderIcon() {
    if (!isDone) {
      return <Circle size={18} weight="bold" color="#4ea8d3" />;
    }
    return <CheckCircle size={18} weight="fill" color="#5e60ce" />;
  }

  function renderText(text: string) {
    const textClassName = isDone
      ? `${styles.paragraph} ${styles["text-line-through"]}`
      : styles.paragraph;
    return <p className={textClassName}>{text}</p>;
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

        {renderText("Terminar esse projeto")}
      </div>

      <button>{<Trash size={16} color="#808080" />}</button>
    </div>
  );
}
