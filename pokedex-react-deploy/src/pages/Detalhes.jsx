import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { buscarPokemonPorNomeOuId, CORES_TIPO } from "../services/pokeApi";

export function Detalhes() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    setCarregando(true);
    setErro(false);
    buscarPokemonPorNomeOuId(name)
      .then((dados) => {
        setPokemon(dados);
        setCarregando(false);
      })
      .catch(() => {
        setErro(true);
        setCarregando(false);
      });
  }, [name]);

  if (carregando) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-slate-400">Buscando ficha na PokéAPI...</p>
      </div>
    );
  }

  if (erro || !pokemon) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-white">Pokémon não encontrado</h2>
        <Link to="/" className="inline-block mt-4 px-5 py-2.5 bg-red-600 text-white rounded-xl font-bold text-sm">
          Voltar à Pokédex
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center gap-1 text-sm font-bold text-red-400 hover:text-red-300 mb-6">
        ← Voltar para o catálogo
      </Link>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="bg-gradient-to-r from-slate-950 to-red-950/50 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 border-b border-slate-800">
          <img
            src={pokemon.imagem}
            alt={pokemon.nome}
            className="w-40 h-40 object-contain drop-shadow-2xl"
          />
          <div className="text-center sm:text-left">
            <span className="text-sm font-mono font-bold text-slate-400">
              #{String(pokemon.id).padStart(3, "0")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold capitalize text-white mt-1">
              {pokemon.nome}
            </h2>
            <div className="flex justify-center sm:justify-start gap-2 mt-3">
              {pokemon.tipos.map((tipo) => (
                <span
                  key={tipo}
                  className={`text-xs font-bold uppercase px-3 py-1 rounded-full ${
                    CORES_TIPO[tipo] || "bg-slate-700 text-white"
                  }`}
                >
                  {tipo}
                </span>
              ))}
            </div>
            <div className="flex justify-center sm:justify-start gap-6 mt-4 text-sm text-slate-300">
              <span><strong>Altura:</strong> {pokemon.altura} m</span>
              <span><strong>Peso:</strong> {pokemon.peso} kg</span>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Habilidades
            </h3>
            <div className="flex flex-wrap gap-2">
              {pokemon.habilidades.map((hab) => (
                <span key={hab} className="px-3 py-1 bg-slate-800 text-slate-200 rounded-lg text-xs font-semibold capitalize">
                  {hab}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Estatísticas Base
            </h3>
            <div className="space-y-3">
              {pokemon.stats.map((st) => (
                <div key={st.nome}>
                  <div className="flex justify-between text-xs font-bold uppercase mb-1">
                    <span className="text-slate-300">{st.nome}</span>
                    <span className="text-red-400">{st.valor}</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-500 to-amber-400 rounded-full"
                      style={{ width: `${Math.min(100, (st.valor / 150) * 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}