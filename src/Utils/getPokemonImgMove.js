import physical from "../assets/pokemonMoves/move-physical.png"
import special from "../assets/pokemonMoves/move-special.png"
import status from "../assets/pokemonMoves/move-status.png"


export const getPokemonImgMove = (move) => {
    switch(move) {
        case 'physical':
            return physical
        case 'special':
            return special
        case 'status':
            return status
    }
}
