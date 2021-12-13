// https://www.codewars.com/kata/53dc23c68a0c93699800041d
function smash (words) {
    return words.join(" ");
};

// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
var countSheep = function (num){
    let result="";
    for(let i=1;i<=num;i++)
      result += `${i} sheep...`;
    return result;
}

// https://www.codewars.com/kata/56b1f01c247c01db92000076
function doubleChar(str) {
    return str.split("").map((ele)=> ele+ele).join("");
}

// https://www.codewars.com/kata/55c28f7304e3eaebef0000da
function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
}

// https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763
var SequenceSum = (function() {
    function SequenceSum() {}
    SequenceSum.showSequence = function(count) {
      if(count > 0){
        let str="";
        let sum=0;
        for(let i=0; i<=count; i++){
          sum+=i;
          str += (i!=count ? `${i}+` : `${i} = ${sum}`);
        }
        return str;
      }else if (count == 0) return "0=0";
      else return `${count}<0`;
    };
    return SequenceSum;
})();