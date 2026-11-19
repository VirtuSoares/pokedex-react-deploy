const BASE_URL = "https://pokeapi.co/api/v2";

export const CORES_TIPO = {
  fire: "bg-orange-500 text-white",
  water: "bg-sky-500 text-white",
  grass: "bg-emerald-500 text-white",
  electric: "bg-amber-400 text-slate-950",
  psychic: "bg-pink-500 text-white",
  ice: "bg-cyan-300 text-slate-950",
  dragon: "bg-indigo-600 text-white",
  dark: "bg-slate-700 text-white",
  fairy: "bg-rose-400 text-slate-950",
  normal: "bg-stone-400 text-slate-950",
  fighting: "bg-red-700 text-white",
  flying: "bg-violet-400 text-slate-950",
  poison: "bg-purple-600 text-white",
  ground: "bg-yellow-700 text-white",
  rock: "bg-stone-600 text-white",
  bug: "bg-lime-500 text-slate-950",
  ghost: "bg-indigo-900 text-white",
  steel: "bg-slate-400 text-slate-950",
};

function formatarPokemon(dados) {
  return {
    id: dados.id,
    nome: dados.name,
    imagem:
      dados.sprites.other["official-artwork"].front_default ||
      dados.sprites.front_default,
    tipos: dados.types.map((t) => t.type.name),
    altura: (dados.height / 10).toFixed(1),
    peso: (dados.weight / 10).toFixed(1),
    habilidades: dados.abilities.map((a) => a.ability.name),
    stats: dados.stats.map((s) => ({
      nome: s.stat.name,
      valor: s.base_stat,
    })),
  };
}

export async function listarPokemons(limite = 24) {
  const res = await fetch(`${BASE_URL}/pokemon?limit=${limite}`);
  if (!res.ok) throw new Error("Erro ao carregar lista da PokéAPI");
  const json = await res.json();

  const detalhes = await Promise.all(
    json.results.map(async (item) => {
      const r = await fetch(item.url);
      const d = await r.json();
      return formatarPokemon(d);
    })
  );

  return detalhes;
}

export async function buscarPokemonPorNomeOuId(termo) {
  const res = await fetch(`${BASE_URL}/pokemon/${String(termo).toLowerCase().trim()}`);
  if (!res.ok) throw new Error("Pokémon não encontrado");
  const d = await res.json();
  return formatarPokemon(d);
}