import { useState } from "react";

export default App;


function App() {
  const [tarefas, setTarefas] = useState([]); // lista de tarefas
  const [novaTarefa, setNovaTarefa] = useState(""); // texto do input

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return; // não adiciona vazio
    setTarefas([...tarefas, novaTarefa]); // adiciona a nova tarefa
    setNovaTarefa(""); // limpa o input
  };

  return (
    <div>
      <h1>To-do Minimal</h1>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite uma tarefa..."
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}


