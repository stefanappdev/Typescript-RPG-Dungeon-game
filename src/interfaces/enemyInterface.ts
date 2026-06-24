import { attack } from "../types/types_attacks"


interface EnemyInterface{

    enemyClass:string,
    
    atkSets:{
        regular:attack[],
        special:attack[],
    }

}


export default EnemyInterface