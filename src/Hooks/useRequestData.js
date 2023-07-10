import axios from "axios"
import { useState, useEffect } from "react"


export const useRequestData = (url, initialState) => {
    const [data, setData] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        loadingPokemons()
    }, [])

    const loadingPokemons = async () => {
        try {
            const res = await axios
                .get(url)
            setData(res.data)
        } catch (error) {
            console.log(error.response)
        }
    }

    return [data, setData, loadingPokemons]
}

