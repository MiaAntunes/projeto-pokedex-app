import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BASE_URL, baseUrl } from "../../Constants/baseUrl";
import axios from "axios";
import { Weaknesses } from "../../Components/Weaknesses/Weaknesses";
import { getPokemonType } from "../../Utils/getPokemonType";
import { EvolutionChain } from "../../Components/EvolutionChain/EvolutionChain";
import { SectionInfoDetails } from "./PerfilPageStyle";
import { getVector } from "../../Utils/getPokemonVector";

export const PerfilPage = () => {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState({});
  const [description, setDescription] = useState(null);

  useEffect(() => {
    loadingPerfil(name);
    descriptionPerfil(name);
  }, [name]);

  const loadingPerfil = async (name) => {
    try {
      const res = await axios.get(baseUrl + name);
      setPokemon(res.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const descriptionPerfil = async (name) => {
    try {
      const res = await axios.get(BASE_URL + name);
      setDescription(res.data.flavor_text_entries);
      console.log(res.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const formattedId = String(pokemon.id).padStart(3, "0");

  return (
    <div>
      {pokemon.id && (
        <>
          <SectionInfoDetails>
            <div>
              <img
                src={getVector(pokemon.types[0].type.name)}
                alt={pokemon.types[0].type.name}
              />
              <img
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={pokemon.name}
              />
            </div>
            <div>
              <p>{pokemon.name}</p>
              <p>N°{formattedId}</p>
              {pokemon.types.map((type, index) => {
                return (
                  <img
                    key={index}
                    src={getPokemonType(type.type.name)}
                    alt={type.type.name}
                  />
                );
              })}
              {description && (
                <p>{description[8].flavor_text.replace(/\n/, "")}</p>
              )}
              <div>
                <p>{pokemon.height}</p>
                <p>{(pokemon.weight / 2.205).toFixed(1)} KG</p>
                {pokemon.abilities.map((abilitie, index) => {
                  return <p key={index}>{abilitie.ability.name}</p>;
                })}
              </div>
            </div>
          </SectionInfoDetails>
          <>
            {pokemon.types.map((type, index) => {
              return (
                <Weaknesses key={index} type={type.type.name}></Weaknesses>
              );
            })}
          </>
          <EvolutionChain name={pokemon.name}></EvolutionChain>
        </>
      )}
    </div>
  );
};
