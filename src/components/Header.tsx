import logoRocket from "../assets/rocket.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoRocket} alt="Logo do Foguete" />
      <h1>
        <span>to</span>do
      </h1>
    </header>
  );
}
