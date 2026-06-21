const readLine=require('readline');


const readLineInterface=readLine.createInterface({
    input:process.stdin, 
    output:process.stdout
})



readLineInterface.question('What is your name?',(name:string)=>{
    console.log('Your name is '+name);
    readLineInterface.close()
})

readLineInterface.on('close',()=>"Bye!");


