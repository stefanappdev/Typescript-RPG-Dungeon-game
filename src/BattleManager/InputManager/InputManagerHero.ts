import HeroInterface from "../../interfaces/heroInterface";
import Hero from "../../characters/Heroes/hero_classes/Hero";
import dictionary_heroes from "../../dictionaries/dictionary_heroes"
const readLine=require('readline/promises')


const RLI=readLine.createInterface({
            input:process.stdin,
            output:process.stdout
        })

/*manages input data to create a hero*/

const initializeHero=async():Promise<Hero<HeroInterface>> =>{


        

        const name=await RLI.question(`Enter your hero's name:`);
        console.log(`Class options\n1.Warrior\n2.Mage\n3.Archer\n`)
        const classChoice=await RLI.question("Choose you hero's class:");
        const choice:number=parseInt(classChoice);
         let H:Hero<HeroInterface>|undefined;





        if(choice===1){
    
        H=new Hero(name,dictionary_heroes.WARRIOR.hp,dictionary_heroes.WARRIOR.hp,dictionary_heroes.WARRIOR.atkPow);

        H.setHeroInterface(
            dictionary_heroes.WARRIOR.characterClass,
            dictionary_heroes.WARRIOR.isHero,
            dictionary_heroes.WARRIOR.atkSets
        )

        
        
        }else if (choice===2){
        
        H=new Hero(name,dictionary_heroes.MAGE.hp,dictionary_heroes.MAGE.hp,dictionary_heroes.MAGE.atkPow);

        H.setHeroInterface(
            dictionary_heroes.MAGE.characterClass,
            dictionary_heroes.MAGE.isHero,
            dictionary_heroes.MAGE.atkSets
        )


        }else if (choice===3){
            
        H=new Hero(name,dictionary_heroes.ARCHER.hp,dictionary_heroes.ARCHER.hp,dictionary_heroes.ARCHER.atkPow);

        H.setHeroInterface(
            dictionary_heroes.ARCHER.characterClass,
            dictionary_heroes.ARCHER.isHero,
            dictionary_heroes.ARCHER.atkSets
        )

        

        }

        RLI.close()

        return new Promise<Hero<HeroInterface>>((resolve,reject)=>{
            if (H!=undefined){
                resolve(H)
            }else{
                reject(()=>{
                    
                })
            }
        })

 

}

export default initializeHero;