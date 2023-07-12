import axios from "axios"
import { useEffect, useState } from "react"
import { move_url } from "../../Constants/baseUrl"
import { getPokemonImgMove } from "../../Utils/getPokemonImgMove"
import { getPokemonType } from "../../Utils/getPokemonType"

export const PokemonMoves = ({ move }) => {

    const [moveType, setMoveType] = useState('')
    const [moveCategory, setMoveCategory] = useState('')

    useEffect(() => {
        loadingPokemonMoves()
    }, [])

    const loadingPokemonMoves = async () => {
        try {
            const res = await axios
                .get(move_url + move.move.name)
            setMoveType(res.data.type.name)
            setMoveCategory(res.data.damage_class.name)
        } catch (error) {
            console.log(error.response)
        }
    }
    return (
        <div>
            {move.move.name}
            <img src={getPokemonType(moveType)} />
            <img src={getPokemonImgMove(moveCategory)} />
        </div>
    )
}
