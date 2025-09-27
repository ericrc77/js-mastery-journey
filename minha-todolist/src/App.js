import { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([]); // lista de tarefas
  const [novaTarefa, setNovaTarefa] = useState(""); // texto do input

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;
    setTarefas([...tarefas, { texto: novaTarefa, concluida: false }]);
    setNovaTarefa("");
  };

  const removerTarefa = (index) => {
    setTarefas(tarefas.filter((_, i) => i !== index));
  };

  const alternarConcluida = (index) => {
    setTarefas(
      tarefas.map((tarefa, i) =>
        i === index ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>To-Do List Minimal React</h1>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite uma tarefa..."
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {tarefas.map((tarefa, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "300px",
              margin: "5px auto",
              padding: "10px",
              border: "1px solid #ccc",
              textDecoration: tarefa.concluida ? "line-through" : "none",
              color: tarefa.concluida ? "gray" : "black",
              cursor: "pointer",
            }}
          >
            <span onClick={() => alternarConcluida(index)}>{tarefa.texto}</span>
            <button
              onClick={() => removerTarefa(index)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                cursor: "pointer",
                padding: "5px 10px",
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
