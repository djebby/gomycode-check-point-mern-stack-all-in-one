function inkLevels(inks){
    let minColorValue = inks["cyan"];

    for(let key in inks){
        if(minColorValue > inks[key]){
            minColorValue=inks[key];
        }
    }
    return minColorValue;
}