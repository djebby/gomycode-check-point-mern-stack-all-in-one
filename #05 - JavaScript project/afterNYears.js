function afterNYears(names, n){
    let arr = Object.entries(names);
    for(let i=0; i<arr.length; i++){
        arr[i][1] += Math.abs(n);
    }
    return Object.fromEntries(arr);
}