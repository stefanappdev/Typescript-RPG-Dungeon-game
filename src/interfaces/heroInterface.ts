import { attack } from "../types/types_attacks"


interface HeroInterface{

    heroClass:string,
    atkSets:{
        regular:attack[],
        special:attack[],
    }

}

export default HeroInterface