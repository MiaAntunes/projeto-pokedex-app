import kanto from "../assets/regions/kanto.jpg"
import alola from "../assets/regions/alola.png"
import galar from "../assets/regions/galar.jpg"
import hoenn from "../assets/regions/hoenn.png"
import johto from "../assets/regions/johto.png"
import kalos from "../assets/regions/kalos.png"
import paldea from "../assets/regions/paldea.jpeg"
import sinnoh from "../assets/regions/sinnoh.png"
import unova from "../assets/regions/unova.png"
import hisui from "../assets/regions/hisui.jpg"

export const getRegionMap = (name) => {
    switch(name){
        case "kanto":
            return kanto
        case "johto":
            return johto
        case "hoenn":
            return hoenn
        case "sinnoh":
            return sinnoh
        case "unova":
            return unova
        case "hoenn":
            return hoenn
        case "kalos":
            return kalos
        case "alola":
            return alola
        case "galar":
            return galar
        case "hisui":
            return hisui
        case "paldea":
            return paldea
    }
}
