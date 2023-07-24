import { useRequestData } from "../Hooks/useRequestData"
import {globalContext} from "./globalContext"
import {baseUrl} from "../Constants/baseUrl"
import { useState } from "react"

export const GlobalState = ({children}) => {
    
    const [pokemons, setPokemons ] = useRequestData(baseUrl, [])
    const [favorite, setFavorite] = useState([])

    const context = {
        pokemons,
        setPokemons,
        favorite,
        setFavorite
    }

    return (
        <globalContext.Provider value={context}>
            {children}
        </globalContext.Provider>
    )
}