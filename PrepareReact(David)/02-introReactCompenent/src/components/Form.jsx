import { useState } from "react";

export default function Form() {
  const [inputtarefa, setInputName] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function hendleInputTarefa(e) {
    setInputName(e.target.value);
  }

  function hendleAddTarefas(e) {
    e.preventDefault();
    setTarefas([...tarefas, inputtarefa]);
  }
  console.log(tarefas);

  return (
    <div>
      <form>
        <label htmlFor="Name">Tarefa: </label>
        <input
          className="inputTarefaText"
          type="text"
          onChange={hendleInputTarefa}
          value={inputtarefa}
        />
        <input type="submit" value="Send" onClick={hendleAddTarefas} />
      </form>
      <ul>
        {tarefas.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </ul>
    </div>
  );
}
