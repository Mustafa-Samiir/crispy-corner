export default function AboutPage() {
  return (
    <section className="card about">
      <h1>Om Crispy Corner</h1>
      <p>
        Crispy Corner är en kycklingrestaurang med fokus på krispigt, färskt och snabbt.
        Den här appen är vår interna personalkatalog där alla medarbetare och deras information visas.
      </p>
      <h2>Om appen</h2>
      <ul>
        <li>Byggd med React, TypeScript och Vite</li>
        <li>Routing med react-router-dom</li>
        <li>Datahämtning och cache med TanStack Query (useQuery)</li>
        <li>Data från ett externt API, max 100 anrop per dag – därför cachas svaren</li>
      </ul>
    </section>
  );
}
