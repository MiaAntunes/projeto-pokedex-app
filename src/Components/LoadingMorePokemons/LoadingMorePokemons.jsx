import axios from "axios"
import { useContext } from "react"
import { globalContext } from "../../Context/globalContext"

export const LoadingMorePokemons = ({ more, text }) => {

    const { setPokemons } = useContext(globalContext)

    const loadingMorePokemon = async (more) => {
        try {
            const res = await axios
                .get(more)
            setPokemons(res.data)
            
        } catch (error) {
            console.log(error.response)
        }
    }
    
    return (
        <>
            <button
            onClick={()=>{
                loadingMorePokemon(more)
            }}
            >{text}</button>
        </>
    )
}
