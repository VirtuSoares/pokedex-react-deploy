export function Sobre() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🚀</span>
          <div>
            <h2 className="text-2xl font-extrabold text-white">Sobre o Projeto</h2>
            <p className="text-xs text-red-400 font-semibold uppercase tracking-wider">
              Portfólio Pessoal & Projeto Acadêmico
            </p>
          </div>
        </div>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          A <strong>Pokédex Pro</strong> nasceu como um projeto prático desenvolvido durante a disciplina de{" "}
          <strong>Desenvolvimento de Interfaces Dinâmicas e Reativas</strong> na{" "}
          <strong>Universidade CEUMA</strong> (Análise e Desenvolvimento de Sistemas / Engenharia de Software), e hoje faz parte do meu portfólio pessoal como desenvolvedor Front-End.
        </p>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          O objetivo foi consolidar na prática o ciclo completo de criação de uma Single Page Application (SPA) moderna — desde a arquitetura de componentes e consumo assíncrono da <strong>PokéAPI</strong> até o build de produção e deploy contínuo na nuvem.
        </p>

        <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 space-y-2.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Destaques Técnicos Implementados
          </h3>
          <ul className="list-disc pl-5 text-slate-300 text-sm space-y-1.5">
            <li>Consumo em tempo real da REST API pública (PokéAPI) com artes oficiais e status base.</li>
            <li>Roteamento dinâmico com <strong>React Router</strong> e configuração de SPA Fallback na Vercel (zero erro 404 ao recarregar páginas internas).</li>
            <li>Interface responsiva <em>mobile-first</em> estilizada com <strong>Tailwind CSS</strong>.</li>
            <li>Busca instantânea por nome/número e filtro dinâmico por tipo elemental.</li>
          </ul>
        </div>

        <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
          <span>Desenvolvido por <strong className="text-slate-200">Victor Hugo dos Santos Soares</strong></span>
          <a
            href="https://github.com/VirtuSoares/pokedex-react-deploy"
            target="_blank"
            rel="noreferrer"
            className="text-red-400 hover:text-red-300 font-semibold"
          >
            Ver código no GitHub →
          </a>
        </div>
      </div>
    </main>
  );
}
