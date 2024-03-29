import styles from "./Header.module.css";
import logo from "../assets/img/logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo Todo List" />
    </header>
  );
};
