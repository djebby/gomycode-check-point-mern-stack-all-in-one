// https://www.codewars.com/kata/56606694ec01347ce800001b
function isTriangle(a,b,c){
   return a + b > c && a + c > b && c + b > a;
}

// https://www.codewars.com/kata/56269eb78ad2e4ced1000013
function findNextSquare(sq) {
    return Math.sqrt(sq)%1 ? -1 : Math.pow(Math.sqrt(sq)+1,2);
}

// https://www.codewars.com/kata/5412509bd436bd33920011bc
function maskify(cc) {
    cc = cc.split("");
    for(var i = 0; i < cc.length - 4; i++)
      cc[i] = "#";

    cc = cc.join("");
    return cc
}

// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064
function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
}

// https://www.codewars.com/kata/544aed4c4a30184e960010f4
function divisors(integer) {
    var res = []
    for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
    return res.length ? res : integer + ' is prime'
}