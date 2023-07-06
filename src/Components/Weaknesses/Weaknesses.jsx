import axios from "axios"
import { useState, useEffect } from "react"
import { getPokemonType } from "../../Utils/getPokemonType"

export const Weaknesses = ({ type }) => {

    const [weak, setWeak] = useState()

    useEffect(() => {
        loadingWeak(type)
    }, [])

    const loadingWeak = async (type) => {
        try {
            const res = await axios
                .get(`https://pokeapi.co/api/v2/type/${type}`)
            setWeak(res.data)
        } catch (error) {
            console.log(error.response)
        }
    }

    return (
        <div>
            {weak && weak.damage_relations.double_damage_from.map((damage) => {
                return (
                    <img src={getPokemonType(damage.name)} />
                )
            })}
        </div>
    )
}
