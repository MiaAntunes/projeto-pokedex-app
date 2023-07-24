import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokeList } from "../pages/PokeList/PokeList";
import { PerfilPage } from "../pages/PerfilPage/PerfilPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { Header } from "../Components/Header/Header"
import { Regions } from "../pages/Regions/Regions";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { RegionPokemon } from "../pages/RegionPokemon/RegionPokemon";

export const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokelist" element={<PokeList />} />
        <Route path="/perfil/:name" element={<PerfilPage />} />
        <Route path="/region" element={<Regions/>}/>
        <Route path="/region-pokemon/:name" element={<RegionPokemon/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/cadastro" element={<SignUpPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};
