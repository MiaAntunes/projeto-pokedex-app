import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ContainerButton, ContainerInputs, ContainerPokeList, ContainerSelect, Input, Option, SectionPokeList, Select } from "../PokeList/PokeListStyle"
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"
import { LoadingMorePokemons } from "../../Components/LoadingMorePokemons/LoadingMorePokemons"

export const RegionPokemon = () => {

    const { region } = useParams()

    const [opcaoSelecionada, setOpcaoSelecionada] = useState("")

    const handleOpcaoChange = (event) => {
        setOpcaoSelecionada(event.target.value);
      };
    
    const [pokedexRegion, setPokedexregion] = useState({})

    useEffect(() => {
        loadingRegionPokedex()
    }, [])

    const loadingRegionPokedex = async () => {
        try {
            const res = await axios
                .get(`https://pokeapi.co/api/v2/region/${region}`)
            const res2 = await axios
                .get(res.data.pokedexes[0].url)
            setPokedexregion(res2.data)
        } catch (error) {
            console.log(error.response)
        }
    }

    return (
    <SectionPokeList>
      <ContainerInputs>
        <Input type="text" placeholder="Procurar Pókemon..." />
        <ContainerSelect>
        <Select
          id="opcoes"
          value={opcaoSelecionada}
          onChange={handleOpcaoChange}
        >
          <Option value="Menor número<">Menor número</Option>
          <Option value="Maior número">Maior número</Option>
          <Option value="A-Z">A-Z</Option>
          <Option value="Z-A">Z-A</Option>
        </Select>
        </ContainerSelect>
      </ContainerInputs>
        <Select
          id="opcoes"
          value={opcaoSelecionada}
          onChange={handleOpcaoChange}
        >
          <Option value="Todos os tipos">Todos os tipos</Option>
        </Select>
        <ContainerButton>
          <LoadingMorePokemons
  
            text={"Mostrar menos"}
          ></LoadingMorePokemons>
          <LoadingMorePokemons

            text={"Mostrar mais"}
          ></LoadingMorePokemons>
        </ContainerButton>
            <ContainerPokeList>
                {pokedexRegion.pokemon_entries?.map((poke, index) => {
                    return index < 40 &&
                    <PokemonCard key={index} pokemon={poke.pokemon_species.name} />
                })}
            </ContainerPokeList>
        
        </SectionPokeList>
    )
}
