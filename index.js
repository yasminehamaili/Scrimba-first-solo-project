let resultHome=0
let resultGuest=0
let home= document.getElementById("result-home")
let guest= document.getElementById("result-guest")
function add1Home(){
    resultHome+=1
    home.textContent= resultHome
}
function add2Home(){
    resultHome+=2
    home.textContent= resultHome
}
function add3Home(){
    resultHome+=3
    home.textContent= resultHome
}

function add1Guest(){
    resultGuest+=1
    guest.textContent= resultGuest
}
function add2Guest(){
    resultGuest+=2
    guest.textContent= resultGuest
}
function add3Guest(){
    resultGuest+=3
    guest.textContent= resultGuest
}