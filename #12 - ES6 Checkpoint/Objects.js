// https://www.codewars.com/kata/583f158ea20cfcbeb400000a
function arithmetic(a, b, operator){
    //your code here!
    switch(operator){
        case "add":
            return a+b;
        break;
        case "subtract":
            return a-b;
        break;
        case "multiply":
            return a*b;
        break;
        case "divide":
            return a/b;
        break;
        default :
        break;
    }
}

// https://www.codewars.com/kata/53f0f358b9cb376eca001079
class Ball  {
    constructor(ballType){
      this.ballType = ballType || "regular";
    }
}

// https://www.codewars.com/kata/5535572c1de94ba2db0000f6




// https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1
for(ele of questions){
    ele.usersAnswer = null;
}

// https://www.codewars.com/kata/597c684822bc9388f600010f
class Dinglemouse{
    constructor( firstName, lastName ){
      this._firstName=firstName;
      this._lastName=lastName;
    }
    
    getFullName(){
      return `${this._firstName} ${this._lastName}`.trim();
    }
}