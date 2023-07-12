import MegaForm from "../assets/pokemonForm/mega.png"
import DynamaxForm from "../assets/pokemonForm/dynamax.png"
import AlolaForm from "../assets/pokemonForm/alola.png"

export const getPokemonForm = (form) => {
    if (form.includes('mega')) {
        return MegaForm
    } else if (form.includes('gmax')) {
        return DynamaxForm
    } else if (form.includes('alola')) {
        return AlolaForm
    }
}
