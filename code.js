//card info
let card_number = document.querySelector(".card-number");
let full_name = document.querySelector(".name");
let exMM = document.getElementById("ex-mm");
let exYY = document.getElementById("ex-yy");
let cvcf = document.querySelector(".cvc");

//inputs variables
let Name = document.getElementById("name");
let cardNumber = document.getElementById("card-number");
let w_format = document.getElementById("w-format");
let ex_mm = document.getElementById("mm");
let ex_yy = document.getElementById("yy");
let w_blank = document.getElementById("w-blank");
let cvc = document.getElementById("cvc");
let w_blankc = document.getElementById("w-blankc");


//valiud var 

// dispaly cart number
cardNumber.onkeyup = displayCNumber ;
function displayCNumber(){  
    if (cardNumber.value.length != 0){
        card_number.innerHTML = cardNumber.value ;
    }
}
//display name
Name.onkeyup = displayName ;
function displayName(){
    full_name.innerHTML = Name.value ;
}
//display ex-mm date
ex_mm.onkeyup = displayMM ;
function displayMM(){
    exMM.innerHTML = ex_mm.value ;
    vEndDate() ;
}
//display ex-yy date
ex_yy.onkeyup = displayYY ;
function displayYY(){
    exYY.innerHTML = ex_yy.value ; 
    vEndDate() ;  
}
// display cvc 
cvc.onkeyup = displayCvc;
function displayCvc() {
    cvcf.innerHTML = cvc.value ;
    w_blankc.innerHTML = "" ;
    if (cvc.value == 0 ){
        w_blankc.innerHTML = "Can't be blank" ;
    }
}

//validate inpputs
//validate card number
cardNumber.onkeyup = validateCNumber ;
function validateCNumber(){
    let valid = 1 ;
    for(let i= 0 ;i < cardNumber.value.length ; i++){
        if(cardNumber.value[i].match(/^[A-Za-z]$/)){
            valid = 0 ;
        }
    } 
 
    if (valid == 0){
        w_format.innerHTML = "Wrong format, numbers only" ;
    }else {
        w_format.innerHTML = "" ;
        card_number.innerHTML = cardNumber.value ;
    }
}
// validate exp date 
if(ex_mm.value == 0 || exYY == 0){
    w_blank.innerHTML = "Can't be blank"
}
function vEndDate(){
    if (ex_yy.value == 0 && ex_yy.value == 0){
        w_blank.innerHTML = "Can't be blank" ;         
    }else if ( ex_yy.value != 0 && ex_yy.value != 0) {
        w_blank.innerHTML = "" ;
    }
}
//validate cvc
if (cvc.value == 0 ){
    w_blankc.innerHTML = "Can't be blank" ;
}
if(cvc.value != 0){
    w_blankc.innerHTML = "" ;
}
// think page 
x = 0 ;
let formp = document.querySelector("form");
let thinkpage = document.querySelector("figure");
// confirm button
let sbtn = document.getElementById("submit");
sbtn.onclick = dispalyThink ;
function dispalyThink() {
    if(cardNumber.value.length >15 && Name.value != ""  /* other conditions*/ ){
        formp.style.display = "none";
        thinkpage.style.display = "block" ;
    }
}
