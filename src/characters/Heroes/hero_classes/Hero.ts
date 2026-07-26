import EnemyInterface from "../../../interfaces/enemyInterface";
import HeroInterface from "../../../interfaces/heroInterface";
import { attack } from "../../../types/types_attacks";
import Character from "../../Character";
import Enemy from "../../enemies/enemy_classes/Enemy";


class Hero <T  extends HeroInterface> extends Character{

    /*class to create new Heroes */

    protected heroInterface:HeroInterface|undefined;
    public isHero:boolean|undefined;
    public characterClass:string|undefined;

    constructor(
        characterName:string,
        hp:number,
        atkPow:number,
        heroInterface?:T|undefined,
        isHero?:boolean|undefined,
        characterClass?:string|undefined,
    ){
        super(characterName,atkPow,hp);
        this.heroInterface=heroInterface;
        this.isHero=isHero;
        this.characterClass=characterClass

    }

    
    setHeroInterface(characterClass:string,isHero:boolean,atkSets:{regular:attack[],special:attack[]}):void{
            
        
        this.heroInterface===undefined?this.heroInterface={
                characterClass,
                isHero,
                atkSets,
            }:undefined
    }

    public isAHero():boolean|undefined{
          if(this.heroInterface){
            if(this.heroInterface.isHero){
                return true
            }else{
                return false
            }
         }
    
    }


   public getCharacterClass():string{
         if(this.heroInterface){
            return this.heroInterface.characterClass
         }else{
            return "hero is undefined"
         }
    }


    public getRegularAtks():attack[]{
        if(this.heroInterface){
            return this.heroInterface.atkSets.regular
        }else{
            let empty:attack[]=[]
            return empty
        }
    }


     public getSpecialAtks():attack[]{
        if(this.heroInterface){
            return this.heroInterface.atkSets.special
        }else{
            let empty:attack[]=[]
            return empty
        }
    }


    public recvDMG(DMG:number,E:Enemy<EnemyInterface>){

        //display info about received damage from enemy
        console.log(`${this.getCharacterName()} received ${DMG} damage from ${E.getCharacterName()}` )
        let newHP:number=this.getCurrentHP()-DMG
        this.setHeroHP(newHP)
    }



    public attackEnemy(E:Enemy<EnemyInterface>|undefined,atk:attack):void{
            
        try{
            if(E){
                console.log(`${this.getCharacterName()} attacked the ${E.getCharacterName()} with ${atk.attackName}`)
            } else{
                throw new Error('The enemy does not not exist')
            }
            
        }catch(Err){
            if(Err instanceof Error){
                console.log(Err.message)
            }
        }

    }


    public setHeroHP(hp:number){
        //set Hp of Hero
        super.setHP(hp);
    }

}



export default Hero