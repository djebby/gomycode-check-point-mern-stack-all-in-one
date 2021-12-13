// https://www.codewars.com/kata/55d24f55d7dd296eb9000030
var summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
      result += i;
    }
    return result;
}

// https://www.codewars.com/kata/55225023e1be1ec8bc000390
function greet(name){
    if(name === "Johnny")
      return "Hello, my love!";
    return "Hello, " + name + "!";
}

// https://www.codewars.com/kata/523b4ff7adca849afe000035
let greet = _ => "hello world!";

// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7
function monkeyCount(n) {
    let result = [];
    for(let i=1;i<=n;i++)
        result.push(i);
    return result;
}

// https://www.codewars.com/kata/53af2b8861023f1d88000832
function areYouPlayingBanjo(name) {
  
    return name + (name[0].toUpperCase() === "R" ? " plays banjo" :  " does not play banjo");
}