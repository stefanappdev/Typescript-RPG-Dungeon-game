import BattleManager from "../BattleManager/BattleManager";
import generatorHero from "../BattleManager/generators/generatorHero";

const executeBM=async()=>{
    let HERO=await generatorHero()

    let BM=new BattleManager(false,false,HERO)
    try{
        console.log(`The hero ${BM.getHero().getCharacterName()} was sucessfully generated`)
        await BM.createNewSession()
    }catch(err){
    console.log(err)
    throw new Error('failed to start battle')
    }

}

executeBM()