function countTrue(arr){
    let numberOfTrue = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] === true){
            numberOfTrue++;
        }
    }
    return numberOfTrue;
}