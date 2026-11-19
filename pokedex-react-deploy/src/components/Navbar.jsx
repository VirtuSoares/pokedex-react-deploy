import { Link, NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-b from-red-500 via-red-600 to-slate-100 border-2 border-slate-700 flex items-center justify-center shadow">
            <div className="w-3 h-3 rounded-full bg-white border-2 border-slate-900" />
          </div>
          <div>
            <h1 className="font-extrabold text-lg tracking-tight text-white">Pokédex Pro</h1>
            <p className="text-xs text-slate-400">PokéAPI • React SPA</p>
          </div>
        </Link>

        <nav className="flex items-center gap-2 text-sm font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3.5 py-1.5 rounded-lg transition ${
                isActive ? "bg-red-600 text-white" : "text-slate-300 hover:bg-slate-800"
              }`
            }
          >
            Explorar
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              `px-3.5 py-1.5 rounded-lg transition ${
                isActive ? "bg-red-600 text-white" : "text-slate-300 hover:bg-slate-800"
              }`
            }
          >
            Sobre o Projeto
          </NavLink>
        </nav>
      </div>
    </header>
  );
}