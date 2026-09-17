export default function CartaoTarefa({
    id,
    titulo,
    categoria,
    voluntarios,
    concluida,
    onShowDetails,
    onToggle,
    onDelete,
}) {
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
            <button type="button" onClick={() => onToggle(id)}>
                {concluida ? "Marcar como pendente" : "Marcar como concluída"}
            </button>
            <button type="button" onClick={() => onDelete(id)}>
                Excluir
            </button>
        </article>
    );
}