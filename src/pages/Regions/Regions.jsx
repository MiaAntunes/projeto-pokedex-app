import axios from "axios"
import { useEffect, useState } from "react"
import { RegionCard } from "../../Components/RegionCard/RegionCard"
import { ContainerPokeList } from "../PokeList/PokeListStyle"

export const Regions = () => {
    
    const [regions, setRegions] = useState({})
    
    useEffect(() =>{
        getRegions()
    }, [])

    const getRegions = async () => {
        try {
          const res = await axios
          .get("https://pokeapi.co/api/v2/region/")
          setRegions(res.data) 
        } catch (error) {
            console.log(error.response)
        }
    }
    
    return (
        <ContainerPokeList>
        {regions.count && regions.results.map((region, index)=>{
            return <RegionCard key={index} name = {region.name}/>
        })}
        </ContainerPokeList>
    )
}
