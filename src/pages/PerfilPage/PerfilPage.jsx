import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { baseUrl } from "../../Constants/baseUrl"
import axios from "axios"
import { Weaknesses } from "../../Components/Weaknesses/Weaknesses"
import { getPokemonType } from "../../Utils/getPokemonType"
import { EvolutionChain } from "../../Components/EvolutionChain/EvolutionChain"

export const PerfilPage = () => {
    const { name } = useParams()

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        loadingPerfil(name)
    }, [pokemon])

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
                    } />
                    <p>{pokemon.name}</p>
                    <>{pokemon.types.map((type) => {
                        return (

                            <img src={getPokemonType(type.type.name)} />
                        )
                    })}</>
                    {(pokemon.weight / 2.205).toFixed(1) + " KG"}
                    <p>{pokemon.height}</p>
                    {pokemon.abilities.map((abilitie) => {
                        return (
                            <p>{abilitie.ability.name}</p>
                        )
                    })}
                    <>{pokemon.types.map((type) => {
                        return (
                            <Weaknesses
                                key={type.id}
                                type={type.type.name}>
                            </Weaknesses>
                        )
                    })}</>
                    <EvolutionChain
                    name = {pokemon.name}
                    >
                    </EvolutionChain>

                </>
            }
        </div>
    )
}
