import "./App.css";
import Painel from "./components/Painel";
import ListaTarefas from "./components/ListaTarefas";
import { tarefasIniciais } from "./data/tarefas";

export default function App() {
  function handleShowDetails(tarefaId) {
    const tarefa = tarefasIniciais.find((item) => item.id === tarefaId);
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

      <Painel title="Tarefas do Mutirão">
        <ListaTarefas
          tarefas={tarefasIniciais}
          onShowDetails={handleShowDetails}
        />
      </Painel>
    </main>
  );
}