function minMax(arr){

    let minMaxArray = [arr[0], arr[0]];

    for(let i=0; i<arr.length; i++){
        if(minMaxArray[0] > arr[i]){
            minMaxArray[0] = arr[i];
        }
    }

    for(let i=0; i<arr.length; i++){
        if(minMaxArray[1] < arr[i]){
            minMaxArray[1] = arr[i];
        }
    }

    return minMaxArray;
}