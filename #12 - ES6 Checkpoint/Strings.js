// https://www.codewars.com/kata/5168bb5dfe9a00b126000018
function solution(str){
    return str.split("").reverse().join("");
}

// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
function solution(str, ending){
    return str.endsWith(ending);
}

// https://www.codewars.com/kata/56f6ad906b88de513f000d96
function bonusTime(salary, bonus) {
    return bonus ? "£"+salary*10 :"£"+salary;
}

// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
function abbrevName(name){
    return name.toUpperCase().split(" ")[0][0]+"."+name.toUpperCase().split(" ")[1][0];
}

// https://www.codewars.com/kata/5556282156230d0e5e000089
function DNAtoRNA(dna) {
    return dna.split("T").join("U");
}