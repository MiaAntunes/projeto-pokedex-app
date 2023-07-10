import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokeList } from "../pages/PokeList/PokeList";
import { PerfilPage } from "../pages/PerfilPage/PerfilPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { Header } from "../Components/Header/Header"

export const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokelist" element={<PokeList />} />
        <Route path="/perfil/:name" element={<PerfilPage />} />
      </Routes>
    </BrowserRouter>
  );
};
