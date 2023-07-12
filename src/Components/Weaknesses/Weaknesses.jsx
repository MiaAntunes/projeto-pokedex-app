import axios from "axios";
import { useState, useEffect } from "react";
import { getPokemonType } from "../../Utils/getPokemonType";
import { useParams } from "react-router-dom";
import { warning } from "framer-motion";

export const Weaknesses = ({ type }) => {
  const [weak, setWeak] = useState({});
  
  const {name} = useParams()

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
  

  return (
    <>
      {weak.double_damage_from && <>
        <h3>Fraco</h3>
        {weak.double_damage_from.map((damage, index) => {
          return <img key={index} src={getPokemonType(damage.name)} />;
        })}
        <h3>Forte</h3>
        {weak.double_damage_to.map((damage, index)=>{
          return <img key={index} src={getPokemonType(damage.name)}/>
        })
        }
        <h3>Inume</h3> 
        {weak.no_damage_from.length !== 0?
        weak.no_damage_from.map((damage, index)=>{
          return <img key={index} src={getPokemonType(damage.name)}/>
        })
        : <></>
        }
      </>
      }
    </>
  );
};
