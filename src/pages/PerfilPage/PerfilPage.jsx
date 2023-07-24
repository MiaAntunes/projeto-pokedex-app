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
  Container,
  ContentWrapper,
  PokemonImageWrapper,
  Wrapper,
  ContainerId,
  ContainerName,
  PokemonImage,
  PokemonContainer,
  PokemonImageCircle,
  InformationWrapper,
  ButtonGroup,
  TabButton,
  DataWrapper,
  BiographyWrapper,
  DescriptionWrapper,
  TitleData,
  Description,
  ImageData,
  TitleDataPokemon,
  ResultDataPokemon,
  ResultDataTitle,
} from "../PerfilPage/PerfilPageStyle";

export const PerfilPage = () => {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState({});
  const [description, setDescription] = useState(null);
  const [species, setSpecies] = useState({});
  const [activeTab, setActiveTab] = useState("Biografia");

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

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderContent = () => {
    if (!pokemon.id) {
      return null;
    }

    return (
      <Container>
        <Wrapper type={pokemon.types[0].type.name}>
          <ContentWrapper>
            <PokemonImageWrapper>
              <ContainerId>N°{formattedId}</ContainerId>
              <ContainerName>{pokemon.name}</ContainerName>
            </PokemonImageWrapper>
            <PokemonContainer>
              <PokemonImageCircle
                type={pokemon.types[0].type.name}
                src={getVector(pokemon.types[0].type.name)}
                alt={pokemon.types[0].type.name}
              />
              <PokemonImage
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={pokemon.name}
              />
            </PokemonContainer>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                bottom: "3rem",
                gap: "3rem",
              }}
            >
              {renderTypes()}
            </div>
          </ContentWrapper>
          <InformationWrapper type={pokemon.types[0].type.name}>
            <ButtonGroup>
              <TabButton
                type={pokemon.types[0].type.name}
                className={activeTab === "Biografia" ? "active" : ""}
                onClick={() => handleTabClick("Biografia")}
              >
                Biografia
              </TabButton>
              <TabButton
                type={pokemon.types[0].type.name}
                className={activeTab === "Evoluções" ? "active" : ""}
                onClick={() => handleTabClick("Evoluções")}
              >
                Evoluções
              </TabButton>
              <TabButton
                type={pokemon.types[0].type.name}
                className={activeTab === "Estatísticas" ? "active" : ""}
                onClick={() => handleTabClick("Estatísticas")}
              >
                Estatísticas
              </TabButton>
              <TabButton
                type={pokemon.types[0].type.name}
                className={activeTab === "Movimentos" ? "active" : ""}
                onClick={() => handleTabClick("Movimentos")}
              >
                Movimentos
              </TabButton>
            </ButtonGroup>
            <DataWrapper>
              {activeTab === "Biografia" && (
                <BiographyWrapper>
                  <TitleData>Pokemon Dados</TitleData>
                  <DescriptionWrapper>
                    <Description>{renderDescription()}</Description>
                  </DescriptionWrapper>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <ImageData src={weight} alt="Peso" />
                        <TitleDataPokemon>Peso</TitleDataPokemon>
                      </div>
                      <ResultDataPokemon>
                        <ResultDataTitle>
                          {(pokemon.weight / 10).toFixed(1)} kg
                        </ResultDataTitle>
                      </ResultDataPokemon>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <ImageData src={category} alt="Categoria" />
                        <TitleDataPokemon>Categoria</TitleDataPokemon>
                      </div>
                      {species.id && (
                        <ResultDataPokemon>
                          <ResultDataTitle>
                            {species.genera[7].genus.replace(/Pokémon/, "")}
                          </ResultDataTitle>
                        </ResultDataPokemon>
                      )}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <ImageData src={height} alt="Altura" />
                        <TitleDataPokemon>Altura</TitleDataPokemon>
                      </div>
                      <ResultDataPokemon>
                        <ResultDataTitle>
                          {(pokemon.height / 10).toFixed(1)} m
                        </ResultDataTitle>
                      </ResultDataPokemon>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <ImageData src={abilities} alt="habilidades" />
                        <TitleDataPokemon>Habilidade</TitleDataPokemon>
                      </div>
                      <ResultDataPokemon>
                        <ResultDataTitle>{renderAbilities()}</ResultDataTitle>
                      </ResultDataPokemon>
                    </div>
                  </div>
                </BiographyWrapper>
              )}
              {activeTab === "Evoluções" && (
                <div>
                  <EvolutionChain name={pokemon.name} />
                </div>
              )}
              {activeTab === "Estatísticas" && (
                <div>
                  <h3>Estátisticas</h3>
                  <div>{renderStats()}</div>
                  {pokemon.types.map((type, index) => (
                    <Weaknesses
                      key={index}
                      type={type.type.name}
                      condition="weak"
                    />
                  ))}
                  <PokemonForm name={pokemon.name} />{" "}
                </div>
              )}
              {activeTab === "Movimentos" && (
                <div>
                  {pokemon.moves.slice(0, 5).map((move, index) => (
                    <PokemonMoves key={index} move={move} />
                  ))}
                </div>
              )}
            </DataWrapper>
          </InformationWrapper>
        </Wrapper>
      </Container>
    );
  };

  return <div>{renderContent()}</div>;
};
