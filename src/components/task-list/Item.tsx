import styles from "./Item.module.css";
import { Circle, Trash } from "@phosphor-icons/react";

export function Item() {
  return (
    <div className={styles.item}>
      <div>
        <label htmlFor="item">
          <input type="checkbox" />
          <span className={styles.checkbox}>
            <Circle size={18} weight="bold" color="#4ea8d3" />
          </span>
        </label>

        <p className={styles.paragraph}>Terminar esse projeto</p>
      </div>

      <button>{<Trash size={16} color="#808080" />}</button>
    </div>
  );
}
