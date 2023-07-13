import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BASE_URL, baseUrl } from "../../Constants/baseUrl";
import axios from "axios";
import { Weaknesses } from "../../Components/Weaknesses/Weaknesses";
import { getPokemonType } from "../../Utils/getPokemonType";
import { EvolutionChain } from "../../Components/EvolutionChain/EvolutionChain";
import { SectionInfoDetails } from "./PerfilPageStyle";
import { getVector } from "../../Utils/getPokemonVector";
import { PokemonForm } from "../../Components/PokemonForm/PokemonForm";
import { PokemonMoves } from "../../Components/PokemonMoves/PokemonMoves";

export const PerfilPage = () => {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState({});
  const [description, setDescription] = useState(null);
  const [species, setSpecies] = useState({});

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
      setSpecies(res.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const formattedId = String(pokemon.id).padStart(3, "0");

  const [weaknessCondition, setWeaknessCondition] = useState("weak");

  const handleWeaknessConditionChange = (event) => {
    setWeaknessCondition(event.target.value);
  };

  return (
    <div>
      {pokemon.id && (
        <>
          <SectionInfoDetails>
            <div>
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
              {species.id && <p>{species.genera[7].genus}</p>}
              <div>
                <p>{pokemon.height}</p>
                <p>{(pokemon.weight / 2.205).toFixed(1)} KG</p>
                {pokemon.abilities.map((abilitie, index) => {
                  return <p key={index}>{abilitie.ability.name}</p>;
                })}
              </div>
            </div>
          </SectionInfoDetails>
          <div>
            {pokemon.types.map((type, index) => (
              <Weaknesses
                key={index}
                type={type.type.name}
                condition={weaknessCondition}
              />
            ))}
          </div>
          <PokemonForm name={pokemon.name} />

          <EvolutionChain name={pokemon.name}></EvolutionChain>

          {/* defini por enquanto em 5 golpes até a estilização AHAHAH */}
          {pokemon.moves.map((move, index) => {
            return index < 5 && <PokemonMoves key={index} move={move} />;
          })}
          <h1>Estátisticas</h1>
          {pokemon.stats.map((stat, index) => {
            return (
              <div key={index}>
                {stat.stat.name}
                {stat.base_stat}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
