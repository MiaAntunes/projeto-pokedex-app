import { useRequestData } from "../Hooks/useRequestData"
import {globalContext} from "./globalContext"
import {baseUrl} from "../Constants/baseUrl"

export const GlobalState = ({children}) => {
    
    const [pokemons, setPokemons] = useRequestData(baseUrl, [])

    const context = {
        pokemons,
        setPokemons
    }

    return (
        <globalContext.Provider value={context}>
            {children}
        </globalContext.Provider>
    )
}