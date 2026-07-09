import HeroInterface from "../../../interfaces/heroInterface";
import { attack } from "../../../types/types_attacks";
import Character from "../../Character";


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

    public isAHero():string{
          if(this.heroInterface){
            if(this.heroInterface.isHero===true){
                return "Yes"
            }else{
                return "No"
            }
         }else{
            return "hero is undefined"
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


    public setHeroHP(hp:number){
        super.setHP(hp);
    }

}



export default Hero