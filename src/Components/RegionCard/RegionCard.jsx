import { useContext, useEffect, useState } from "react"
import { getRegionMap } from "../../Utils/getRegionMap"
import { globalContext } from "../../Context/globalContext"
import axios from "axios"
import { goToPokedexPage } from "../../Router/Coordinator"
import { useNavigate } from "react-router-dom"
import { MapName ,MapImage, RegionCardStyle } from "./RegionCardStyle"

export const RegionCard = ({name}) => {
    
    // const {setPokemons} = useContext(globalContext)
    // const [teste, setTeste] = useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        loadingRegionPokemon()
    },[])

    const loadingRegionPokemon = async () => {
        try {
            const res = await axios
            .get(`https://pokeapi.co/api/v2/pokedex/kanto`)
            // setPokemons(res.data.pokemon_entries.map((mapa)=>{
            //     return mapa.pokemon_species.name
            // }))
            
        } catch (error) {
            console.log(error.response)
        }
    }

    return (
        <RegionCardStyle>
            <MapImage
            width={100}
            height={100}
            src={getRegionMap(name)}/>
            <MapName>{name}</MapName>
        </RegionCardStyle>
    )
}
