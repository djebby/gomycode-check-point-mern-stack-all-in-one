// https://www.codewars.com/kata/539ee3b6757843632d00026b
var capitals = function (word) {
  let indexUpperCase = [];
  for(let i=0; i<word.length; i++)
    if(word[i] === word[i].toUpperCase())
      indexUpperCase.push(i);

  return indexUpperCase;
}

// https://www.codewars.com/kata/52ceafd1f235ce81aa00073a
function plural(n) {
    return n!==1 ;
}

// https://www.codewars.com/kata/56170e844da7c6f647000063
function peopleWithAgeDrink(old) {
    if(old < 14)
      return "drink toddy";
    else if(old<18)
      return "drink coke";
    else if(old<21)
      return "drink beer";
    else
      return "drink whisky";
}

// https://www.codewars.com/kata/56d49587df52101de70011e4
function leo(oscar){
    if(oscar === 88)
      return "Leo finally won the oscar! Leo is happy";
    else if(oscar === 86)
      return "Not even for Wolf of wallstreet?!";
    else if (oscar < 88)
      return "When will you give Leo an Oscar?";
    else 
      return  "Leo got one already!";
}

// https://www.codewars.com/kata/55c933c115a8c426ac000082
function evalObject(value){
    var result = 0;
    switch(value.operation){
      case'+': result = value.a + value.b; break;
      case'-': result = value.a - value.b; break;
      case'/': result = value.a / value.b; break;
      case'*': result = value.a * value.b; break;
      case'%': result = value.a % value.b; break;
      case'^': result = Math.pow(value.a, value.b); break;
    }    
    return result;
}