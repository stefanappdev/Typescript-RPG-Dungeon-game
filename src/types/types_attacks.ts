
//ENUM for type of attacks
enum attackTypes{
    REGULAR="REGULAR", SPECIAL='SPECIAL'
};


//define type for attack
type attack={
    attackName:string,
    attackType:attackTypes.REGULAR|attackTypes.SPECIAL,
    description:string,
    damage:number;
};






export{attack,attackTypes}