import { Trash } from "phosphor-react";
import styles from "./Tarefa.module.css";
import { ChangeEvent } from "react";

interface TarefaProps {
  content: string;
  onChecked: (number: number) => void;
  totalCheckeds: number;
  onDeletedTask: (task: string) => void;
}

export function Tarefa({
  content,
  onChecked,
  totalCheckeds,
  onDeletedTask,
}: TarefaProps) {
  function handleIsChecked(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      onChecked(totalCheckeds + 1);
    } else {
      onChecked(totalCheckeds - 1);
    }
  }

  function handleDeletedTask() {
    onDeletedTask(content);
  }

  return (
    <div className={styles.tarefa}>
      <input onChange={handleIsChecked} type="checkbox" name="" id="" />
      <p>{content}</p>
      <button onClick={handleDeletedTask}>
        <Trash />
      </button>
    </div>
  );
}
