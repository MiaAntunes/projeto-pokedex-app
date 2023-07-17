import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, baseUrl } from "../../Constants/baseUrl";
import { Weaknesses } from "../../Components/Weaknesses/Weaknesses";
import { getPokemonType } from "../../Utils/getPokemonType";
import { EvolutionChain } from "../../Components/EvolutionChain/EvolutionChain";
import { getVector } from "../../Utils/getPokemonVector";
import { PokemonForm } from "../../Components/PokemonForm/PokemonForm";
import { PokemonMoves } from "../../Components/PokemonMoves/PokemonMoves";
import weight from "../../assets/others/weight.svg";
import height from "../../assets/others/height.svg";
import abilities from "../../assets/others/abilities.svg";
import category from "../../assets/others/category.svg";
import {
  ArticleTudo,
  DetailsMain,
  PokemonDetailsContainer,
  SectionInfoDetails,
} from "../PerfilPage/PerfilPageStyle";

export const PerfilPage = () => {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState({});
  const [description, setDescription] = useState(null);
  const [species, setSpecies] = useState({});

  useEffect(() => {
    loadPokemonData(name);
    loadDescription(name);
  }, [name]);

  const loadPokemonData = async (name) => {
    try {
      const res = await axios.get(baseUrl + name);
      setPokemon(res.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const loadDescription = async (name) => {
    try {
      const res = await axios.get(BASE_URL + name);
      setDescription(res.data.flavor_text_entries);
      setSpecies(res.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const formattedId = String(pokemon.id).padStart(3, "0");

  const renderDescription = () => {
    if (description) {
      return description[3].flavor_text.replace(/\n/, "").replace(/\f/, "");
    }
    return null;
  };

  const renderTypes = () => {
    return pokemon.types.map((type, index) => (
      <img
        className="type"
        key={index}
        src={getPokemonType(type.type.name)}
        alt={type.type.name}
      />
    ));
  };

  const renderStats = () => {
    return pokemon.stats.map((stat, index) => (
      <div key={index}>
        {stat.stat.name}: {stat.base_stat}
      </div>
    ));
  };

  const renderAbilities = () => {
    return pokemon.abilities.map((ability, index) => (
      <p className="resultContainer" key={index}>
        {ability.ability.name}
      </p>
    ));
  };

  return (
    <>
      {pokemon.id && (
        <DetailsMain type={pokemon.types[0].type.name}>
          <ArticleTudo>
            <article>
              <img
                src={getVector(pokemon.types[0].type.name)}
                alt={pokemon.types[0].type.name}
              />
              <img
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={pokemon.name}
              />
            </article>

            <SectionInfoDetails>
              <div>
                <h2>{pokemon.name}</h2>
                <p className="id">N°{formattedId}</p>
                <div>{renderTypes()}</div>
                {/* <p className="description">{renderDescription()}</p> */}
              </div>

              {/* <PokemonDetailsContainer>
                <div className="container">
                  <div className="div">
                    <div className="title">
                      <img src={weight} alt="" />
                      <p className="titleContainer">Peso</p>
                    </div>
                    <p className="resultContainer">
                      {(pokemon.weight / 10).toFixed(1)} kg
                    </p>
                  </div>
                  <div className="div">
                    <div className="title">
                      <img src={category} alt="" />
                      <p className="titleContainer">Categoria</p>
                    </div>
                    {species.id && (
                      <p className="resultContainer">
                        {species.genera[7].genus.replace(/Pokémon/, "")}
                      </p>
                    )}
                  </div>
                </div>
                <div className="container">
                  <div className="div">
                    <div className="title">
                      <img src={height} alt="" />
                      <p className="titleContainer">Altura</p>
                    </div>
                    <p className="resultContainer">
                      {(pokemon.height / 10).toFixed(1)} m
                    </p>
                  </div>
                  <div className="div">
                    <div className="title">
                      <img src={abilities} alt="" />
                      <p className="titleContainer">Habilidade</p>
                    </div>
                    <p>{renderAbilities()}</p>
                  </div>
                </div>
              </PokemonDetailsContainer> */}
            </SectionInfoDetails>
          </ArticleTudo>

          {/* <section>
            <section>
              <article>
                {pokemon.types.map((type, index) => (
                  <Weaknesses
                    key={index}
                    type={type.type.name}
                    condition="weak"
                  />
                ))}
              </article>
              <article>
                <PokemonForm name={pokemon.name} />
              </article>
            </section>

            <section>
              <article>
                <EvolutionChain name={pokemon.name} />
              </article>
              <article>
                {pokemon.moves.slice(0, 5).map((move, index) => (
                  <PokemonMoves key={index} move={move} />
                ))}
              </article>
            </section>

            <section>
              <h3>Estátisticas</h3>
              <div>{renderStats()}</div>
            </section>
          </section> */}
        </DetailsMain>
      )}
    </>
  );
};
