import "./App.css";
import Painel from "./components/Painel";
import ListaTarefas from "./components/ListaTarefas";
import { tarefasIniciais } from "./data/tarefas";

export default function App() {
  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">MUTIRÃO DO BAIRRO</p>
        <h1>Painel comunitário</h1>
      </header>

      <Painel title="Tarefas do Mutirão">
        <ListaTarefas tarefas={tarefasIniciais} />
      </Painel>
    </main>
  );
}