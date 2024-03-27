import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { PlusCircle } from "phosphor-react";
import { Tarefa } from "./components/Tarefa";

export function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <form className={styles.inputButtonContainer}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button>
            Criar <PlusCircle size={22} weight="bold" />
          </button>
        </form>

        <div className={styles.tarefasContainer}>
          <header>
            <p>
              Tarefas criadas <span>5</span>
            </p>
            <p>
              Concluídas <span>2 de 5</span>
            </p>
          </header>
          <div className={styles.tarefas}>
            <Tarefa />
            <Tarefa />
          </div>
        </div>
      </main>
    </>
  );
}
