import { globalContext } from "../../Context/globalContext";
import { useContext, useState } from "react";
// import {useNavigate} from "react-router-dom"
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { Input, Select } from "./PokeListStyle";
import { LoadingMorePokemons } from "../../Components/LoadingMorePokemons/LoadingMorePokemons";

export const PokeList = () => {
  const { pokemons } = useContext(globalContext);

  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");

  const handleOpcaoChange = (event) => {
    setOpcaoSelecionada(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Input type="text" placeholder="Procurar Pókemon..." />
      <Select id="opcoes" value={opcaoSelecionada} onChange={handleOpcaoChange}>
        <option value="">Menor número</option>
      </Select>
      <Select id="opcoes" value={opcaoSelecionada} onChange={handleOpcaoChange}>
        <option value="">Todos os tipos</option>
      </Select>
      {pokemons.count && pokemons.results.map((poke) => {
        return <PokemonCard pokemon={poke.name} />;
      })}
      {pokemons.previous === null ?
      <LoadingMorePokemons
        more={pokemons.next}
        text = {"Mais"}
      ></LoadingMorePokemons>
      : <div>
        <LoadingMorePokemons
        more={pokemons.previous}
        text = {"Menos"}
      ></LoadingMorePokemons>
      <LoadingMorePokemons
        more={pokemons.next}
        text = {"Mais"}
      ></LoadingMorePokemons>
      </div>
    }
    </div>
    );
};
