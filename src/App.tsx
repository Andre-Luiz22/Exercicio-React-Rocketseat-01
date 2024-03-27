import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { PlusCircle } from "phosphor-react";
import { Tarefa } from "./components/Tarefa";
import { ChangeEvent, FormEvent, useState } from "react";

export function App() {
  const [newTaskText, setNewTaskText] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [concludedTasks, setConcludedTasks] = useState(0);

  function handleNewTaskText(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, newTaskText]);
    setNewTaskText("");
  }

  function deleteTask(taskToDelete: string){
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete
    })

    setTasks(tasksWithoutDeletedOne)
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <form
          onSubmit={handleCreateNewTask}
          className={styles.inputButtonContainer}
        >
          <input
            onChange={handleNewTaskText}
            value={newTaskText}
            type="text"
            placeholder="Adicione uma nova tarefa"
            required
          />
          <button>
            Criar <PlusCircle size={22} weight="bold" />
          </button>
        </form>

        <div className={styles.tarefasContainer}>
          <header>
            <p>
              Tarefas criadas <span>{tasks.length}</span>
            </p>
            <p>
              Concluídas{" "}
              <span>
                {concludedTasks} de {tasks.length}
              </span>
            </p>
          </header>
          <div className={styles.tarefasWrapper}>
            <div className={styles.tarefas}>
              {tasks.map((task) => (
                <Tarefa
                  content={task}
                  onChecked={setConcludedTasks}
                  totalCheckeds={concludedTasks}
                  onDeletedTask={deleteTask}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
