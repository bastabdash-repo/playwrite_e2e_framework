import readline from 'readline';
import assert from 'assert';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question('Enter the name ', (name) => {

    assert.strictEqual(name, 'Bastab');
    console.log('Assertion Passed ✅');


    rl.close();



})