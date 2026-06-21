"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readLine = require('readline');
const readLineInterface = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
readLineInterface.question('What is your name?', (name) => {
    console.log('Your name is ' + name);
    readLineInterface.close();
});
readLineInterface.on('close', () => "Bye!");
//# sourceMappingURL=BattleManager.js.map