import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainPage } from "../pages/MainPage/MainPage"
import { PerfilPage } from "../pages/PerfilPage/PerfilPage"

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<MainPage />}/>
            <Route path="/perfil/:name" element={<PerfilPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}