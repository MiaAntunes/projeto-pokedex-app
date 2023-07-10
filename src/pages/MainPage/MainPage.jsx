import { globalContext } from "../../Context/globalContext"
import {useContext} from "react"
// import {useNavigate} from "react-router-dom"
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"

export const MainPage = () => {
    const {pokemons} = useContext(globalContext)
    
    return(
        <div
        style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}
        >
            {pokemons.map((poke)=>{
                return(
                    <PokemonCard
                    pokemon = {poke.name}
                    />
                )
            })}
        </div>
    )
}