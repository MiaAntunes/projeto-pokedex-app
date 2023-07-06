import axios from "axios"
import { baseUrl } from "../../Constants/baseUrl"
import { useEffect, useState } from "react"
import {goToPerfilPage } from "../../Router/Coordinator"
import {useNavigate} from "react-router-dom"

export const PokemonCard = ({ pokemon }) => {

    const [pokemonCard, setPokemonCard] = useState({})

    const navigate = useNavigate()
    
    useEffect(() => {
        loadingCards()
    }, [])

    const loadingCards = async () => {
        try {
            const res = await axios
                .get(baseUrl + pokemon)
            setPokemonCard(res.data)
        } catch (error) {
            console.log(error.response)
        }
    }

    return (
        <div>
            {pokemonCard.id && <>
                <div>{pokemonCard.id}</div>
                <img width={100}
                    src={pokemonCard.sprites.other["official-artwork"].front_default}
                    onClick={()=>goToPerfilPage(navigate, pokemonCard.name)}
                />
                <div>{pokemonCard.name}</div>
            </>
            }
        </div>
    )
}
