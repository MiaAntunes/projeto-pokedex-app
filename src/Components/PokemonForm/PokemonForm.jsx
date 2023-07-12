import axios from "axios"
import { BASE_URL } from "../../Constants/baseUrl"
import { useEffect, useState } from "react"
import { getPokemonForm } from "../../Utils/getPokemonForm"
import { goToPerfilPage } from "../../Router/Coordinator"
import { useNavigate } from "react-router-dom"

export const PokemonForm = ({name}) => {
    
    const [pokemonForm, setPokemonForm] = useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        getPokemonVarieties(name)
    },[name])

    const getPokemonVarieties = async (name) => {
        try {
            const res = await axios
            .get(BASE_URL + name)
            setPokemonForm(res.data)
        } catch (error) {
            console.log(error.response)
        }
    }
    
    const filterPokemon = pokemonForm.id && pokemonForm.varieties.filter((pokemon)=>pokemon.is_default === false)

    return (
        <div
        style={{display: "flex"}}
        >
        {pokemonForm.id && filterPokemon.map((pokemon, index)=>{
            return <img
            key={index}
            src={getPokemonForm(pokemon.pokemon.name)}
            style={{width: 50}}
            onClick={() => goToPerfilPage(navigate, pokemon.pokemon.name)}
            />
        })}
        </div>
    )
}
