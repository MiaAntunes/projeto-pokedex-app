import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../Constants/baseUrl";
import {
  ContainerCard,
  ContainerImage,
  Id,
  InfoCard,
  LikeImage,
  Name,
  PokemonImage,
  Type,
  VectorImage,
} from "./PokemonCardStyle";
import { getPokemonType } from "../../Utils/getPokemonType";
import { globalContext } from "../../Context/globalContext";
import { getVector } from "../../Utils/getPokemonVector";
import Like from "../../assets/others/Like.png";

export const PokemonCard = ({ pokemon }) => {
  const [pokemonCard, setPokemonCard] = useState({});
  const { pokemons } = useContext(globalContext);
  const navigate = useNavigate();

  useEffect(() => {
    loadPokemonCard();
  }, [pokemons]);

  const loadPokemonCard = async () => {
    try {
      const res = await axios.get(baseUrl + pokemon);
      setPokemonCard(res.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  if (!pokemonCard.id) {
    return null;
  }

  const handleImageClick = () => {
    goToPerfilPage(navigate, pokemonCard.name);
  };

  const typeImages = pokemonCard.types.map((type) => (
    <img
      key={type.type.name}
      src={getPokemonType(type.type.name)}
      alt={type.type.name}
    />
  ));

  const formattedId = String(pokemonCard.id).padStart(3, "0");

  return (
    <ContainerCard type={pokemonCard.types[0].type.name}>
      <InfoCard type={pokemonCard.types[0].type.name}>
        <Id>N°{formattedId}</Id>
        <Name>{pokemonCard.name}</Name>
        <Type>{typeImages}</Type>
      </InfoCard>
      <ContainerImage type={pokemonCard.types[0].type.name}>
        <LikeImage src={Like} alt="Like" />
        <PokemonImage
          src={pokemonCard.sprites.front_default}
          alt={pokemonCard.name}
          onClick={handleImageClick}
        />
        <VectorImage
          src={getVector(pokemonCard.types[0].type.name)}
          alt={pokemonCard.types[0].type.name}
        />
      </ContainerImage>
    </ContainerCard>
  );
};
