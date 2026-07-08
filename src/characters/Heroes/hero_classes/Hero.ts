import HeroInterface from "../../../interfaces/heroInterface";
import { attack } from "../../../types/types_attacks";
import Character from "../../Character";


class Hero <T  extends HeroInterface> extends Character{

    private heroInterface:T|undefined;
    public isHeroType:boolean|undefined;
    public characterClass:string|undefined;

    constructor(
        characterName:string,
        hp:number,
        atkPow:number,
        heroInterface?:T|undefined,
        isHeroType?:boolean|undefined,
        characterClass?:string|undefined,
    ){
        super(characterName,atkPow,hp);
        this.heroInterface=heroInterface;
        this.isHeroType=isHeroType;
        this.characterClass=characterClass

    }

    
    setHeroInterface(characterClass:string,isHeroType:boolean,atkSets:{regular:attack[],special:attack[]}):void{
            this.heroInterface===undefined?{
                characterClass,
                isHeroType,
                atkSets,
            }:undefined
    }

    isAHero():string{
          if(this.heroInterface){
            if(this.heroInterface.isHeroType===true){
                return "Yes"
            }else{
                return "No"
            }
         }else{
            return "hero is undefined"
         }
    
    }


    getCharacterClass():string{
         if(this.heroInterface){
            return this.heroInterface.characterClass
         }else{
            return "hero is undefined"
         }
    }


    getRegularAtks():attack[]{
        if(this.heroInterface){
            return this.heroInterface.atkSets.regular
        }else{
            let empty:attack[]=[]
            return empty
        }
    }


     getSpecialAtks():attack[]{
        if(this.heroInterface){
            return this.heroInterface.atkSets.special
        }else{
            let empty:attack[]=[]
            return empty
        }
    }

}



export default Hero