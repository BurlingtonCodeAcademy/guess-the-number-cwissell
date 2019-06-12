const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  let min = 1;
  let max = 100;
  let guessArray = []
  let guess = Math.floor((min + max) / 2);
  console.log(
    "Let's play a game. Think of a number between 1-100 and I will try to guess it.\nNow I want you to let me know if I am higher or lower than your number when I guess it.\nPlease respond with H for higher,\nand L for lower for me to understand, Thanks!\nOK now lets begin!"
  );

  let hiLow = await ask("Is your number " + guess + "? H/L or Yes?");
  console.log(hiLow);

  while (hiLow.toUpperCase() !== "YES") {
    if (min + 1 >= max) { 
      console.log('No cheating! answer with H/L or Yes') }
     else if (hiLow.toUpperCase() === "L") {
      max = guess;
      guessArray.push(guess)
      guess = Math.floor((min + max) / 2);
    } else if (hiLow.toUpperCase() === "H") {
      min = guess;
      guessArray.push(guess)
      guess = Math.floor((min + max) / 2);
  }
    hiLow = await ask("Is your number " + guess + "? H/L or Yes?");
   
  }
  console.log("Awesome! Thank You for playing with me.");
  process.exit();
}
