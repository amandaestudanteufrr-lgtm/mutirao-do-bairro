export default function Painel({ title, children }) {
  return (
    <section className="panel">
      {title && (
        <header className="panel-header">
          <h2>{title}</h2>
        </header>
      )}
      <div className="panel-content">
        {children}
      </div>
    </section>
  );
}