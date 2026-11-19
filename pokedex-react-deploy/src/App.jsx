import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Detalhes } from "./pages/Detalhes";
import { Sobre } from "./pages/Sobre";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:name" element={<Detalhes />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <footer className="border-t border-slate-800 text-slate-500 text-center text-xs py-4 mt-10">
          Pokédex Pro • React, Tailwind CSS & React Router
        </footer>
      </div>
    </BrowserRouter>
  );
}