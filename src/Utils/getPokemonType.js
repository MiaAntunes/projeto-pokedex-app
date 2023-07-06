import bug from "../assets/Img/Types/bug.png";
import dark from "../assets/Img/Types/dark.png";
import dragon from "../assets/Img/Types/dragon.png";
import electric from "../assets/Img/Types/electric.png";
import fairy from "../assets/Img/Types/fairy.png";
import fighting from "../assets/Img/Types/fighting.png";
import fire from "../assets/Img/Types/fire.png";
import flying from "../assets/Img/Types/flying.png";
import ghost from "../assets/Img/Types/ghost.png";
import grass from "../assets/Img/Types/grass.png";
import ground from "../assets/Img/Types/ground.png";
import ice from "../assets/Img/Types/ice.png";
import normal from "../assets/Img/Types/normal.png";
import poison from "../assets/Img/Types/poison.png";
import psychic from "../assets/Img/Types/psychic.png";
import rock from "../assets/Img/Types/rock.png";
import steel from "../assets/Img/Types/steel.png";
import water from "../assets/Img/Types/water.png";

export const getPokemonType = (type) => {
    switch(type){
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
}
