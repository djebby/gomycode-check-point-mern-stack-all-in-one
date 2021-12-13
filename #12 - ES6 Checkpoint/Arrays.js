// https://www.codewars.com/kata/54edbc7200b811e956000556
function countSheeps(arrayOfSheep) {
    let i=0;
    for(el of arrayOfSheep)
      if(el) i++;
    
    return i;
}

// https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = arr => {

    return parseInt(arr.join(""), 2);
}

// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
function findNeedle(haystack) {
    return "found the needle at position "+haystack.indexOf("needle");
}

// https://www.codewars.com/kata/563cf89eb4747c5fb100001b
function removeSmallest(numbers) {
    if(numbers.length===0) return [];
    let min = Math.min(...numbers);
    return [...numbers.slice(0,numbers.indexOf(min)), ...numbers.slice(numbers.indexOf(min)+1)];
}

// https://www.codewars.com/kata/5583090cbe83f4fd8c000051
function digitize(n) {
    return n.toString().split("").reverse().map(ele => +ele);
}