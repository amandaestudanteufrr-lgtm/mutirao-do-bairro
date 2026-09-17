import { useState } from "react";
import "./App.css";
import Painel from "./components/Painel";
import ListaTarefas from "./components/ListaTarefas";
import { tarefasIniciais } from "./data/tarefas";

export default function App() {
  const [tarefas, setTarefas] = useState(tarefasIniciais);

  const totalConcluidas = tarefas.filter((t) => t.concluida).length;

  function handleToggle(id) {
    setTarefas(
      tarefas.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t))
    );
  }

  function handleDelete(id) {
    setTarefas(tarefas.filter((t) => t.id !== id));
  }

  function handleShowDetails(tarefaId) {
    const tarefa = tarefas.find((item) => item.id === tarefaId);
    if (tarefa) {
      window.alert(`${tarefa.titulo} | Voluntários: ${tarefa.voluntarios}`);
    }
  }
  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">MUTIRÃO DO BAIRRO</p>
        <h1>Painel comunitário</h1>
      </header>

      <Painel title="Orientações do Dia">
        <p>Confira as tarefas atribuídas e os voluntários necessários.</p>
      </Painel>

      <Painel title={`Tarefas do Mutirão (${totalConcluidas} concluídas)`}>
        <ListaTarefas
          tarefas={tarefas}
          onShowDetails={handleShowDetails}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </Painel>
    </main>
  );
}