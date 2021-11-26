function filterArray(arr){
    let filtredArray=[];
    for(let i=0; i<arr.length; i++){
        if(typeof(arr[i]) === "number"){
            filtredArray.push(arr[i]);
        }
    }
    return filtredArray;
}