import { attack } from "../types/types_attacks"


interface HeroInterface{

    characterClass:string,
    isHeroType:boolean,
    atkSets:{
        regular:attack[],
        special:attack[],
    },
    
}

export default HeroInterface