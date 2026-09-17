export default function CartaoTarefa({ titulo, categoria, voluntarios, concluida }) {
  return (
    <article className={`cartao-tarefa ${concluida ? "is-complete" : ""}`}>
      <div>
        <h3>{titulo}</h3>
        <p>Categoria: {categoria}</p>
        <p>Voluntários: {voluntarios}</p>
      </div>
      <span>{concluida ? "Concluída" : "Pendente"}</span>
    </article>
  );
}