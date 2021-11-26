const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentian"
}

function greeting(name){
    for(let key in GUEST_LIST){
        if(key == name){
            return "Hi! I'm "+key+", and I'm from "+GUEST_LIST[key]+".";
        }
    }
    return "Hi! I'm a guest.";
}