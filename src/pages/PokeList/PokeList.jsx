import { globalContext } from "../../Context/globalContext";
import { useContext, useState } from "react";
// import {useNavigate} from "react-router-dom"
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import {
  ContainerInputs,
  ContainerPokeList,
  Input,
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
    <div>
      <ContainerInputs>
        <Input type="text" placeholder="Procurar Pókemon..." />
        <Select
          id="opcoes"
          value={opcaoSelecionada}
          onChange={handleOpcaoChange}
        >
          <option value="Menor número<">Menor número</option>
          <option value="Maior número">Maior número</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </Select>
        <Select
          id="opcoes"
          value={opcaoSelecionada}
          onChange={handleOpcaoChange}
        >
          <option value="Todos os tipos">Todos os tipos</option>
        </Select>
      </ContainerInputs>
      {pokemons.previous === null ? (
        <LoadingMorePokemons
          more={pokemons.next}
          text={"Mais"}
        ></LoadingMorePokemons>
      ) : (
        <div>
          <LoadingMorePokemons
            more={pokemons.previous}
            text={"Menos"}
          ></LoadingMorePokemons>
          <LoadingMorePokemons
            more={pokemons.next}
            text={"Mais"}
          ></LoadingMorePokemons>
        </div>
      )}
      <ContainerPokeList>
        {pokemons.count &&
          pokemons.results.map((poke, index) => {
            return <PokemonCard key={index} pokemon={poke.name} />;
          })}
      </ContainerPokeList>
    </div>
  );
};
