import axios from "axios"
import { useContext } from "react"
import { globalContext } from "../../Context/globalContext"

export const LoadingMorePokemons = ({ more }) => {

    const { setPokemons, pokemons } = useContext(globalContext)

    const loadingMorePokemon = async (more) => {
        try {
            const res = await axios
                .get(more)
            setPokemons(res.data)
        } catch (error) {
            console.log(error.response)
        }
    }
    
    console.log(more)

    return (
        <>
            <button
            onClick={()=> 
                {loadingMorePokemon(more)}
            }
            >Next</button>
        </>
    )
}
