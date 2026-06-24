import { attack } from "../types/types_attacks"


interface HeroInterface{

    characterName:string,
    heroClass:string,
    hp:number,
    atkPow:number,
    atkSets:{
        regular:attack[],
        special:attack[],
    }

}

export default HeroInterface