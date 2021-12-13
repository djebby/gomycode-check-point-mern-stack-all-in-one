// https://www.codewars.com/kata/54ff3102c1bad923760001f3
function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
}

// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
}

// https://www.codewars.com/kata/56747fd5cb988479af000028
function getMiddle(s){
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// https://www.codewars.com/kata/56dec885c54a926dcd001095
function opposite(number) {
    return(-number);
}

// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

// https://www.codewars.com/kata/54c27a33fb7da0db0100040e
function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}

// https://www.codewars.com/kata/52fba66badcd10859f00097e
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

// https://www.codewars.com/kata/554b4ac871d6813a03000035
function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// https://www.codewars.com/kata/55908aad6620c066bc00002a
function XO(str) {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

// https://www.codewars.com/kata/546e2562b03326a88e000020
function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));    
}

// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

// https://www.codewars.com/kata/554e4a2f232cdd87d9000038 
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}

// https://www.codewars.com/kata/5467e4d82edf8bbf40000155
function descendingOrder(n){
    return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
}

// https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

// https://www.codewars.com/kata/54ba84be607a92aa900000f1
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}

// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
}

// https://www.codewars.com/kata/55a2d7ebe362935a210000b2
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
}

// https://www.codewars.com/kata/558fc85d8fd1938afb000014
function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
};

// https://www.codewars.com/kata/563b662a59afc2b5120000c6
function nbYear(p0, percent, aug, p) {
    var count = 0;   
    while(p0<p){
        p0 += p0 * percent/100 + aug;
        count++;
    }
    return count;
}

// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
function repeatStr (n, s) {
    return s.repeat(n);
}