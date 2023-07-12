import axios from "axios"
import { useEffect, useState } from "react"
import { MiniImageEvolution } from "../MiniImageEvolutions/MiniImageEvolution"
import { StoneImage } from "../StoneImage/StoneImage"

export const EvolutionChain = ({ name }) => {

    const [evolutionChain, setEvolutionChain] = useState({})

    useEffect(() => {
        loadingEvolutionChain(name)
    }, [])

    const loadingEvolutionChain = async (name) => {
        try {
            const res = await axios
                .get(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
            const res2 = await axios
                .get(res.data.evolution_chain.url)
            setEvolutionChain(res2.data)
        } catch (error) {
            console.log(error.response)
        }
    }

    const evolutionLevelOne = () => {
        if (evolutionChain.chain.evolves_to[0].evolution_details[0].min_level !== null) {
            return evolutionChain.chain.evolves_to[0].evolution_details[0].min_level
        } else if (evolutionChain.chain.evolves_to[0].evolution_details[0].min_happiness !== null) {
            return "Friendship"
        } else if (evolutionChain.chain.evolves_to[0].evolution_details[0].item !== null) {
            return <StoneImage stone = {evolutionChain.chain.evolves_to[0].evolution_details[0].item.name}/>
        } else if (evolutionChain.chain.evolves_to[0].evolution_details[0].held_item !== null) {
            return <StoneImage stone = {evolutionChain.chain.evolves_to[0].evolution_details[0].held_item.name}/>
        } else if (evolutionChain.chain.evolves_to[0].evolution_details[0].known_move !== null) {
            return evolutionChain.chain.evolves_to[0].evolution_details[0].known_move.name
        } 
    }

    const evolutionLevelTwo = () => {
        if (evolutionChain.chain.evolves_to[0].evolves_to[0]){
            if (evolutionChain.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level !== null) {
                return evolutionChain.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level
            } else if (evolutionChain.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_happiness !== null) {
                return "Friendship"
            } else if (evolutionChain.chain.evolves_to[0].evolves_to[0].evolution_details[0].item !== null) {
                return <StoneImage stone = {evolutionChain.chain.evolves_to[0].evolves_to[0].evolution_details[0].item.name}/>
            } else if (evolutionChain.chain.evolves_to[0].evolves_to[0].evolution_details[0].trigger.name === "trade") {
                return "trade"
            }
            else if (evolutionChain.chain.evolves_to[0].evolves_to[0].evolution_details[0].held_item !== null) {
                return <StoneImage stone = {evolutionChain.chain.evolves_to[0].evolves_to[0].evolution_details[0].held_item.name}/>
            } else {
                return <StoneImage stone = {evolutionChain.chain.evolves_to[0].evolves_to[0].evolution_details[0].known_move.name}/>
            }
        }
    }

    const evolutionLevelTree = (evolution) => {
        const stone = evolution.map((item)=>{
            if (item.item !== null) {
                return <StoneImage stone = {item.item.name}/>
            } else if (item.held_item !== null) {
                return <StoneImage stone = {item.held_item.name}/>
            } else if (item.min_happiness !== null) {
                return `level-up in ${item.time_of_day}`
            } else if (item.known_move_type !== null) {
                return `known move ${item.known_move_type.name}`
            }
        })
        return stone
    }


    return (
        <p>
            {evolutionChain.id && evolutionChain.chain.evolves_to.length === 1 ? <>
                <MiniImageEvolution
                    name={evolutionChain.chain.species.name}
                />
                {evolutionLevelOne()}
                {<MiniImageEvolution
                    name={evolutionChain.chain.evolves_to[0].species.name}
                />}
                {evolutionLevelTwo()}
                {<MiniImageEvolution
                    name={evolutionChain.chain.evolves_to[0].evolves_to[0] ?
                        evolutionChain.chain.evolves_to[0].evolves_to[0].species.name
                        : 'evolutionoff'}
                />}
            </>
                :
                evolutionChain.id && evolutionChain.chain.evolves_to.map((poke)=>{
                    return <>
                    {evolutionLevelTree(poke.evolution_details)}
                    <MiniImageEvolution 
                    name = {poke.species.name}
                    />
                    </>
                })
            }
        </p>
    )
}
