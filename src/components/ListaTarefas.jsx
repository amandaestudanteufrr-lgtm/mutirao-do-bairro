import CartaoTarefa from "./CartaoTarefa";

export default function ListaTarefas({ tarefas }) {
  if (tarefas.length === 0) {
    return <p>Nenhuma tarefa encontrada.</p>;
  }

  return (
    <div className="lista-tarefas">
      {tarefas.map((tarefa) => (
        <CartaoTarefa
          key={tarefa.id}
          titulo={tarefa.titulo}
          categoria={tarefa.categoria}
          voluntarios={tarefa.voluntarios}
          concluida={tarefa.concluida}
        />
      ))}
    </div>
  );
}