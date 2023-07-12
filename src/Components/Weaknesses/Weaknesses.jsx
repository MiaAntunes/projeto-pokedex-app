import axios from "axios";
import { useState, useEffect } from "react";
import { getPokemonType } from "../../Utils/getPokemonType";
import { useParams } from "react-router-dom";


export const Weaknesses = ({ type, condition }) => {
  const [weak, setWeak] = useState({});

  const { name } = useParams()

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

  const returnData = (condition) => {
    if (condition === 'weak') {
      const res = weak.double_damage_from && weak.double_damage_from.map((damage, index) => {
        return <img key={index} src={getPokemonType(damage.name)} />
      })
      return res
    } else if (condition === 'strong') {
      const res = weak.double_damage_from && weak.double_damage_to.map((damage, index) => {
        return <img key={index} src={getPokemonType(damage.name)} />
      })
      return res
    } else if (condition === 'immune') {
      const res = weak.double_damage_from && weak.no_damage_from.map((damage, index) => {
        return <img key={index} src={getPokemonType(damage.name)} />
      })
      return res
  } 
}

  return (
    <>
        {returnData(condition)}
    </>
  );
};
