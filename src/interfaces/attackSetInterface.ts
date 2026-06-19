import { attack} from "../types/types_attacks";






interface attackSetInterface{
    setAttackMoves:(attacks:attack[])=>void;
    getAttackMoves:()=>attack[]
    
}



export default attackSetInterface;