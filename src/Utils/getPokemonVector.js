import bug from "../assets/vector/bug.svg";
import dark from "../assets/vector/dark.svg";
import dragon from "../assets/vector/dragon.svg";
import electric from "../assets/vector/electric.svg";
import fairy from "../assets/vector/fairy.svg";
import fighting from "../assets/vector/fighting.svg";
import fire from "../assets/vector/fire.svg";
import flying from "../assets/vector/flying.svg";
import ghost from "../assets/vector/ghost.svg";
import grass from "../assets/vector/grass.svg";
import ground from "../assets/vector/ground.svg";
import ice from "../assets/vector/ice.svg";
import normal from "../assets/vector/normal.svg";
import poison from "../assets/vector/poison.svg";
import psychic from "../assets/vector/psychic.svg";
import rock from "../assets/vector/rock.svg";
import steel from "../assets/vector/steel.svg";
import water from "../assets/vector/water.svg";

export const getVector = (type) => {
    switch (type) {
      case "bug":
        return bug;
      case "dark":
        return dark;
      case "dragon":
        return dragon;
      case "electric":
        return electric;
      case "fairy":
        return fairy;
      case "fighting":
        return fighting;
      case "fire":
        return fire;
      case "flying":
        return flying;
      case "ghost":
        return ghost;
      case "grass":
        return grass;
      case "ground":
        return ground;
      case "ice":
        return ice;
      case "normal":
        return normal;
      case "poison":
        return poison;
      case "psychic":
        return psychic;
      case "rock":
        return rock;
      case "steel":
        return steel;
      case "water":
        return water;
      default:
        return water;
    }
  };