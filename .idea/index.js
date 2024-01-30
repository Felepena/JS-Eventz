

function myfunctionn() {
   return  console.log("ahoj");
}
function myfunction() {
   return  console.log("ahoooooj");
}
function returnelemet(){
    var x = document.getElementById("objekt");
    x.value = x.value.toUpperCase();
}

document.getElementById("objekt").onchange = function() {returnelemet()};



const button = document.getElementById("tlacitko");
button.addEventListener("click", myfunction);



const onhover = document.getElementById("onhover");
onhover.addEventListener("mouseover", myfunctionn);
