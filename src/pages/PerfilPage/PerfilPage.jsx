import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { baseUrl } from "../../Constants/baseUrl"
import axios from "axios"
import { Weaknesses } from "../../Components/Weaknesses/Weaknesses"
import { getPokemonType } from "../../Utils/getPokemonType"

export const PerfilPage = () => {
    const { name } = useParams()

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        loadingPerfil(name)
    }, [])

    const loadingPerfil = async (name) => {
        try {
            const res = await axios
                .get(baseUrl + name)
            setPokemon(res.data)
        } catch (error) {
            console.log(error.response)
        }
    }

    return (
        <div>
            {pokemon.id &&
                <>
                    <p>{pokemon.id}</p>
                    <img src={
                        pokemon.sprites.other["official-artwork"].front_default
                    }/>
                    <p>{pokemon.name}</p>
                    <>{pokemon.types.map((type) => {
                        return (
                            
                            <img src={getPokemonType(type.type.name)}/>
                        )
                    })}</>
                    {pokemon.weight / 2.205}
                    {pokemon.height}
                    {pokemon.abilities.map((abilitie)=>{
                        return(
                            <p>{abilitie.ability.name}</p>
                        )
                    })}
                    <>{pokemon.types.map((type) => {
                        return (
                            <Weaknesses
                                type = {type.type.name}>
                            </Weaknesses>
                        )
                    })}</>
                </>
            }
        </div>
    )
}
