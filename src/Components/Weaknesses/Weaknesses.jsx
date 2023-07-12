import React, { useState, useEffect } from "react";
import axios from "axios";
import { getPokemonType } from "../../Utils/getPokemonType";
import { useParams } from "react-router-dom";

export const Weaknesses = ({ type }) => {
  const [weak, setWeak] = useState({});
  const [condition, setCondition] = useState("weak");

  const { name } = useParams();

  useEffect(() => {
    loadingWeak(type);
  }, [name]);

  const loadingWeak = async (type) => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
      setWeak(res.data.damage_relations);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleChange = (event) => {
    setCondition(event.target.value);
  };

  const getWeaknesses = (condition) => {
    if (condition === "weak") {
      return weak.double_damage_from?.map((damage, index) => (
        <img key={index} src={getPokemonType(damage.name)} alt={damage.name} />
      ));
    } else if (condition === "strong") {
      return weak.double_damage_to?.map((damage, index) => (
        <img key={index} src={getPokemonType(damage.name)} alt={damage.name} />
      ));
    } else if (condition === "immune") {
      return weak.no_damage_from?.map((damage, index) => (
        <img key={index} src={getPokemonType(damage.name)} alt={damage.name} />
      ));
    }
  };

  return (
    <div>
      <select value={condition} onChange={handleChange}>
        <option value="weak">Fraco</option>
        <option value="strong">Forte</option>
        <option value="immune">Imune</option>
      </select>
      <div>{getWeaknesses(condition)}</div>
    </div>
  );
};
