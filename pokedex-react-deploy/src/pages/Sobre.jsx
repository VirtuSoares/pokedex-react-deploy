export function Sobre() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
        <h2 className="text-2xl font-extrabold text-white">Sobre a Pokédex Pro</h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Aplicação Single Page Application (SPA) desenvolvida em <strong>React</strong>, <strong>Tailwind CSS</strong> e <strong>React Router</strong>, consumindo dados oficiais da <strong>PokéAPI</strong>.
        </p>
        <ul className="list-disc pl-5 text-slate-300 text-sm space-y-1.5">
          <li>Roteamento dinâmico com fallback SPA configurado para Vercel e Netlify (sem erro 404 ao recarregar).</li>
          <li>Interface responsiva mobile-first com artes oficiais e estatísticas em tempo real.</li>
        </ul>
      </div>
    </main>
  );
}