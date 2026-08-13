import EnemyInterface from "../../../interfaces/enemyInterface";
import HeroInterface from "../../../interfaces/heroInterface";
import { attack } from "../../../types/types_attacks";
import Character from "../../Character";
import Hero from "../../Heroes/hero_classes/Hero";

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

    isAHero():boolean|undefined{
          if(this.EnemyInterface){
            if(this.EnemyInterface.isHeroType){
                return true
            }else{
                return false
            }
         }
    
    }


    getCharacterClass():string{
         if(this.EnemyInterface){
            return this.EnemyInterface.characterClass
         }else{
            return "Enemy is undefined"
         }
    }


     getCharacterType():string{
         if(this.EnemyInterface){
            return this.EnemyInterface.characterType
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


     chooseRandomRegAttack=():attack|undefined=>{

            let regularAtks:attack[]=this.getRegularAtks()
            let randindex:number=Math.floor(Math.random()*regularAtks.length);
            return regularAtks[randindex]
     
    }

    chooseRandomSpecialAttack=():attack|undefined=>{

            let specialAtks:attack[]=this.getSpecialAtks()
            let randindex:number=Math.floor(Math.random()*specialAtks.length);
            return specialAtks[randindex]
     
    }


    chooseRandomAtk():attack|undefined{

        let randindex:number=Math.floor(Math.random()*2);
        if(randindex===0){
            return this.chooseRandomRegAttack()
        }
        else{
            return this.chooseRandomSpecialAttack()
        }
    }



      public recvDMG(DMG:number,H:Hero<HeroInterface>){

        //display info about received damage from enemy
        console.log(`${this.getCharacterName()} received ${DMG} damage from ${H.getCharacterName()}` )
        let newHP:number=this.getCurrentHP()-DMG
        this.setEnemyHP(newHP)


    }



    public attackHero(H:Hero<HeroInterface>,atk:attack):void{
            /*attack function of hero*/
        try{
            if(H){
                {`${this.getCharacterName()} attacked ${H.getCharacterName()} with ${atk.attackName}`}
            }else{
                throw new Error('The hero does not not exist')
            }
        }catch(err){
            if(err instanceof Error){
                console.log(err.message)
            }
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