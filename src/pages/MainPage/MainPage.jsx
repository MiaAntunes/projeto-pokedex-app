import { globalContext } from "../../Context/globalContext"
import {useContext} from "react"
// import {useNavigate} from "react-router-dom"
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"
import { LoadingMorePokemons } from "../../Components/LoadingMorePokemons/LoadingMorePokemons"


export const MainPage = () => {
    const {pokemons} = useContext(globalContext)
    
    return(
        <div
        style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}
        >
            {pokemons.count && pokemons.results.map((poke)=>{
                return(
                    <PokemonCard
                    pokemon = {poke.name}
                    />
                )
            })}
            <LoadingMorePokemons
            more = {pokemons.next}
            ><p>More Pokemons</p></LoadingMorePokemons>
        </div>
    )
}