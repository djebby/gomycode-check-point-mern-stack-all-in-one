function getBudgets(arr){
    let sumOfBudget = 0;
    for(let i=0; i<arr.length; i++){
        sumOfBudget += arr[i].budget;
    }
    return sumOfBudget;
}