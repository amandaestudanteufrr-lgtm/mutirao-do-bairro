import CartaoTarefa from "./CartaoTarefa";

export default function ListaTarefas({ tarefas, onShowDetails, onToggle, onDelete }) {
  if (tarefas.length === 0) {
    return <p>Nenhuma tarefa encontrada.</p>;
  }

  return (
    <div className="lista-tarefas">
      {tarefas.map((tarefa) => (
        <CartaoTarefa
          key={tarefa.id}
          id={tarefa.id}
          titulo={tarefa.titulo}
          categoria={tarefa.categoria}
          voluntarios={tarefa.voluntarios}
          concluida={tarefa.concluida}
          onShowDetails={onShowDetails}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}