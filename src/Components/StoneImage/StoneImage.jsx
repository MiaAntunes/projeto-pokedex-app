import axios from "axios"
import { useEffect, useState } from "react"

export const StoneImage = ({stone}) => {
    
    const [evolutionStone, setEvolutionStone] = useState()
    
    useEffect(()=>{
        loadingStone(stone)
    },[])

    const loadingStone = async (stone) => {
        try {
            const res = await axios
            .get(`https://pokeapi.co/api/v2/item/${stone}`)
            setEvolutionStone(res.data.sprites.default)
        } catch (error) {
            console.log(error.response)
        }
    }

    return (
        <>
        {evolutionStone &&
        <img src={evolutionStone}/>
        }
        </>
    )
}

