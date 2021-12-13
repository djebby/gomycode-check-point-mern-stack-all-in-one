// https://www.codewars.com/kata/514b92a657cdc65150000006
function solution(number){
    let multiples = [];
    for(let i=1; i<number; i++){
      if(i*3 < number)
      multiples.push(i*3);
      if(i*5 <number)
        multiples.push(i*5);
    }
    return multiples.length == 0 ? 0 : ( [...new Set(multiples)].reduce((acc,ele) => acc + ele));
}

// https://www.codewars.com/kata/541c8630095125aba6000c00
function digital_root(n) {
    do{
        n = n.toString().split("").reduce( (acc,ele) => +acc + +ele );
    }while(n > 9)
  
      return +n;
}

// https://www.codewars.com/kata/5266876b8f4bf2da9b000362
function likes(names) {
    if(names.length === 0) return 'no one likes this';
    else if(names.length === 1) return `${names[0]} likes this`;
    else if(names.length === 2) return `${names[0]} and ${names[1]} like this`;
    else if(names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    else return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
}

// https://www.codewars.com/kata/5526fc09a1bbd946250002dc
function findOutlier(integers){
    let even=0; let odd = 0;
    Math.abs(integers[0] % 2) ? odd++ : even ++;
    Math.abs(integers[1] % 2) ? odd++ : even ++;
    Math.abs(integers[2] % 2) ? odd++ : even ++;
   
    if(even>odd){
        for(let i=0; i<integers.length; i++){
            if(Math.abs(integers[i] % 2) === 1) return integers[i];
        }
    }else{
        for(let i=0; i<integers.length; i++){
            if(integers[i] % 2 === 0) return integers[i];
        }
    }
}

// https://www.codewars.com/kata/5264d2b162488dc400000001
function spinWords(string){
    return string.split(" ").map(ele => ele.length < 5 ? ele : ele.split("").reverse().join("") ).join(" ");
}