import { globalContext } from "../../Context/globalContext";
import { useContext, useState } from "react";
// import {useNavigate} from "react-router-dom"
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { Input, Select } from "./PokeListStyle";

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
      {pokemons.map((poke) => {
        return <PokemonCard pokemon={poke.name} />;
      })}
    </div>
  );
};
