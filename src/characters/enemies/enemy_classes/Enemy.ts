import EnemyInterface from "../../../interfaces/enemyInterface";
import { attack } from "../../../types/types_attacks";
import Character from "../../Character";

class Enemy <T extends EnemyInterface> extends Character{


    /* Class to create new enmeies */

public  characterType:string|undefined;
protected EnemyInterface:EnemyInterface|undefined;
public  characterClass:string|undefined;

constructor(
    
    characterName:string,
    hp:number,
    atkPow:number,
    characterType?:string|undefined,
    EnemyInterface?:EnemyInterface|undefined,
    characterClass?:string|undefined

)
{
    super(characterName,hp,atkPow);
    this.EnemyInterface=EnemyInterface;
    this.characterType=characterType;
    this.characterClass=characterClass
}


  setEnemyInterface(characterClass:string,characterType:string,isHeroType:boolean,atkSets:{regular:attack[],special:attack[]}):void{
            this.EnemyInterface===undefined?this.EnemyInterface={
                characterType,
                characterClass,
                isHeroType,
                atkSets,
            }:undefined
    }

    isAHero():string{
          if(this.EnemyInterface){
            if(this.EnemyInterface.isHeroType===true){
                return "Yes"
            }else{
                return "No"
            }
         }else{
            return "Enemy is undefined"
         }
    
    }


    getCharacterClass():string{
         if(this.EnemyInterface){
            return this.EnemyInterface.characterClass
         }else{
            return "Enemy is undefined"
         }
    }

    setEnemyHP(hp:number){
        super.setHP(hp)
    }


    getRegularAtks():attack[]{
        if(this.EnemyInterface){
            return this.EnemyInterface.atkSets.regular
        }else{
            let empty:attack[]=[]
            return empty
        }
    }


     getSpecialAtks():attack[]{
        if(this.EnemyInterface){
            return this.EnemyInterface.atkSets.special
        }else{
            let empty:attack[]=[]
            return empty
        }
    }



}

export default Enemy;