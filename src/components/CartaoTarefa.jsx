export default function CartaoTarefa({ id, titulo, categoria, voluntarios, concluida, onShowDetails }) {
  return (
    <article className={`cartao-tarefa ${concluida ? "is-complete" : ""}`}>
      <div>
        <h3>{titulo}</h3>
        <p>Categoria: {categoria}</p>
        <p>Voluntários: {voluntarios}</p>
      </div>
      <span>{concluida ? "Concluída" : "Pendente"}</span>
      <button type="button" onClick={() => onShowDetails(id)}>
        Ver detalhes
      </button>
    </article>
  );
}