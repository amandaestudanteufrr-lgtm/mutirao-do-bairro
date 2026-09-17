import { useState } from "react";

export default function FormularioTarefa({ onAdicionarTarefa }) {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("limpeza");
  const [voluntarios, setVoluntarios] = useState(1);
  const [erro, setErro] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (titulo.trim().length < 3) {
      setErro("O título deve ter pelo menos 3 caracteres.");
      return;
    }

    if (Number(voluntarios) <= 0) {
      setErro("A quantidade de voluntários deve ser maior que 0.");
      return;
    }

    onAdicionarTarefa({
      id: crypto.randomUUID(),
      titulo: titulo.trim(),
      categoria,
      voluntarios: Number(voluntarios),
      concluida: false,
    });

    setTitulo("");
    setCategoria("limpeza");
    setVoluntarios(1);
    setErro("");
  }

  return (
    <form onSubmit={handleSubmit} className="formulario-tarefa">
      {erro && <p style={{ color: "red" }}>{erro}</p>}

      <div>
        <label htmlFor="titulo">Título da tarefa:</label>
        <input
          id="titulo"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="categoria">Categoria:</label>
        <select
          id="categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="limpeza">Limpeza</option>
          <option value="pintura">Pintura</option>
          <option value="jardim">Jardim</option>
        </select>
      </div>

      <div>
        <label htmlFor="voluntarios">Voluntários necessários:</label>
        <input
          id="voluntarios"
          type="number"
          min="1"
          value={voluntarios}
          onChange={(e) => setVoluntarios(e.target.value)}
        />
      </div>

      <button type="submit">Cadastrar Tarefa</button>
    </form>
  );
}