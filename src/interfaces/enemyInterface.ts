import { attack } from "../types/types_attacks"


interface EnemyInterface{

    enemyName:string,
    enemyType:string|undefined,
    hp:number,
    atkPow:number,
    atkSets:{
        regular:attack[],
        special:attack[],
    }

}


export default EnemyInterface