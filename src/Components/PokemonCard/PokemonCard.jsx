import axios from "axios";
import { baseUrl } from "../../Constants/baseUrl";
import { useEffect, useState, useContext } from "react";
import { goToPerfilPage } from "../../Router/Coordinator";
import { useNavigate } from "react-router-dom";
import { ContainerCard, Id, InfoCard, Name } from "./PokemonCardStyle";
import { getPokemonType } from "../../Utils/getPokemonType";
import { globalContext } from "../../Context/globalContext";


export const PokemonCard = ({ pokemon }) => {
  const [pokemonCard, setPokemonCard] = useState({});

  const {pokemons} = useContext(globalContext)

  const navigate = useNavigate();

  useEffect(() => {
    loadingCards();
  }, [pokemons]);

  const loadingCards = async () => {
    try {
      const res = await axios.get(baseUrl + pokemon);
      setPokemonCard(res.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <ContainerCard>
      {pokemonCard.id && (
        <>
          <InfoCard>
            <Id>N°{pokemonCard.id}</Id>
            <Name>{pokemonCard.name}</Name>
            <div>
              {pokemonCard.types.map((type)=>{
                return<img
                style={{display: "flex"}}
                src={getPokemonType(type.type.name)}
                />
              })}
            </div>
          </InfoCard>
          <img
            width={100}
            src={pokemonCard.sprites.other["official-artwork"].front_default}
            onClick={() => goToPerfilPage(navigate, pokemonCard.name)}
          />
        </>
      )}
    </ContainerCard>
  );
};
