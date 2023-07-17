import axios from "axios"
import { useContext } from "react"
import { globalContext } from "../../Context/globalContext"
import { ButtonLoadingMore } from "./LoadingMorePokemonsStyled"

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
            <ButtonLoadingMore
            onClick={()=>{
                loadingMorePokemon(more)
            }}
            >{text}</ButtonLoadingMore>
        </>
    )
}
