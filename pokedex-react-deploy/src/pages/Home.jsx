import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CORES_TIPO, listarPokemons } from "../services/pokeApi";

export function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [busca, setBusca] = useState("");
  const [tipoFiltro, setTipoFiltro] = useState("all");
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    listarPokemons(24)
      .then((dados) => {
        setPokemons(dados);
        setCarregando(false);
      })
      .catch(() => {
        setErro("Não foi possível conectar à PokéAPI.");
        setCarregando(false);
      });
  }, []);

  const filtrados = pokemons.filter((p) => {
    const bateNome =
      p.nome.includes(busca.toLowerCase()) || String(p.id) === busca.trim();
    const bateTipo = tipoFiltro === "all" || p.tipos.includes(tipoFiltro);
    return bateNome && bateTipo;
  });

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <section className="bg-gradient-to-br from-slate-900 via-slate-900 to-red-950/60 border border-slate-800 rounded-3xl p-6 sm:p-8 mb-8 shadow-xl">
        <span className="inline-block text-xs font-bold uppercase tracking-wider bg-red-500/20 text-red-300 border border-red-500/30 px-3 py-1 rounded-full">
          Consumo em Tempo Real • PokéAPI
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
          Catálogo Oficial de Pokémon
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
          Pesquise por nome ou número da Pokédex, filtre por tipo elemental e abra a ficha técnica completa de cada criatura.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar por nome ou número (ex: pikachu, 25, charizard)..."
            className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500"
          />
          <select
            value={tipoFiltro}
            onChange={(e) => setTipoFiltro(e.target.value)}
            className="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 text-sm focus:outline-none focus:border-red-500"
          >
            <option value="all">Todos os Tipos</option>
            <option value="grass">Planta (Grass)</option>
            <option value="fire">Fogo (Fire)</option>
            <option value="water">Água (Water)</option>
            <option value="electric">Elétrico (Electric)</option>
            <option value="bug">Inseto (Bug)</option>
            <option value="normal">Normal</option>
            <option value="poison">Venenoso (Poison)</option>
          </select>
        </div>
      </section>

      {carregando ? (
        <div className="text-center py-20">
          <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-slate-400 font-medium">Carregando dados da PokéAPI...</p>
        </div>
      ) : erro ? (
        <div className="text-center py-16 bg-red-950/30 border border-red-800 rounded-2xl">
          <p className="text-red-300 font-bold">{erro}</p>
        </div>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtrados.map((p) => (
            <Link
              key={p.id}
              to={`/pokemon/${p.nome}`}
              className="group bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 hover:border-red-500/60 rounded-2xl p-5 transition shadow-md flex flex-col items-center text-center"
            >
              <span className="self-end text-xs font-mono font-bold text-slate-500">
                #{String(p.id).padStart(3, "0")}
              </span>
              <img
                src={p.imagem}
                alt={p.nome}
                className="w-32 h-32 object-contain my-2 group-hover:scale-110 transition-transform duration-200 drop-shadow-lg"
                loading="lazy"
              />
              <h3 className="text-lg font-extrabold capitalize text-white mt-1">
                {p.nome}
              </h3>
              <div className="flex gap-2 mt-3">
                {p.tipos.map((tipo) => (
                  <span
                    key={tipo}
                    className={`text-xs font-bold uppercase px-2.5 py-0.5 rounded-full ${
                      CORES_TIPO[tipo] || "bg-slate-700 text-white"
                    }`}
                  >
                    {tipo}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </section>
      )}
    </main>
  );
}