import { globalContext } from "../../Context/globalContext";
import { useContext, useState } from "react";
// import {useNavigate} from "react-router-dom"
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import {
  ContainerButton,
  ContainerInputs,
  ContainerPokeList,
  ContainerSelect,
  Input,
  Option,
  SectionPokeList,
  Select,
} from "./PokeListStyle";
import { LoadingMorePokemons } from "../../Components/LoadingMorePokemons/LoadingMorePokemons";

export const PokeList = () => {
  const { pokemons } = useContext(globalContext);

  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");

  const handleOpcaoChange = (event) => {
    setOpcaoSelecionada(event.target.value);
  };

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
        <Select
          id="opcoes"
          value={opcaoSelecionada}
          onChange={handleOpcaoChange}
        >
          <Option value="Todos os tipos">Todos os tipos</Option>
        </Select>
        </ContainerSelect>
      </ContainerInputs>
      {pokemons.previous === null ? (
        <LoadingMorePokemons
          more={pokemons.next}
          text={"Mostrar mais"}
        ></LoadingMorePokemons>
      ) : (
        <ContainerButton>
          <LoadingMorePokemons
            more={pokemons.previous}
            text={"Mostrar menos"}
          ></LoadingMorePokemons>
          <LoadingMorePokemons
            more={pokemons.next}
            text={"Mostrar mais"}
          ></LoadingMorePokemons>
        </ContainerButton>
      )}
      <ContainerPokeList>
        {pokemons.count &&
          pokemons.results.map((poke, index) => {
            return <PokemonCard key={index} pokemon={poke.name} />;
          })}
      </ContainerPokeList>
    </SectionPokeList>
  );
};
