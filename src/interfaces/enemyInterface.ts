import { attack } from "../types/types_attacks"


interface EnemyInterface{

    characterClass:string,
    isHeroType:boolean,
    atkSets:{
        regular:attack[],
        special:attack[],
    }

}


export default EnemyInterface