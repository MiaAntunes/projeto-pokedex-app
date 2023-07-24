import { useEffect, useState } from "react"
import { getRegionMap } from "../../Utils/getRegionMap"
import axios from "axios"
import { MapName ,MapImage, RegionCardStyle } from "./RegionCardStyle"
import { goToRegionPokemon } from "../../Router/Coordinator"
import { useNavigate } from "react-router-dom"

export const RegionCard = ({name}) => {

    const navigate = useNavigate()

    return (
        <RegionCardStyle>
            <MapImage
            width={100}
            height={100}
            src={getRegionMap(name)}
            onClick={()=> goToRegionPokemon(navigate, name)}
            />
            <MapName>{name}</MapName>
        </RegionCardStyle>
    )
}
