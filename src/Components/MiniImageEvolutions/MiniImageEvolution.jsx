import axios from "axios"
import { useEffect, useState } from "react"
import { baseUrl } from "../../Constants/baseUrl"
import {goToPerfilPage} from "../../Router/Coordinator"
import { useNavigate } from "react-router-dom"

export const MiniImageEvolution = ({ name }) => {
    const [miniImage, setMiniImage] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        loadingImage(name)
    }, [])

    const loadingImage = async (name) => {
        try {
            const res = await axios
                .get(baseUrl + name)
            setMiniImage(res.data.sprites.other["official-artwork"].front_default)
        } catch (error) {
            console.log(error.response)
        }
    }

    return (
        <img
            width={50}
            height={50}
            src={miniImage}
            onClick={()=>
                goToPerfilPage(navigate, name)
            }
        />
    )
}
