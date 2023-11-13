//al caricamento della pagina voglio inserire delle immagini
const btndx=document.getElementById("btn-right");
const btnsx=document.getElementById("btn-left");
const container=document.getElementById("carousel");

let foto=document.getElementsByClassName("photos");
let foto0 =0;
let finalfoto=foto.length -1;

foto[foto0].classList.remove("invisible");


btndx.addEventListener("click",function(){
    if(foto0 < finalfoto){
        foto[foto0].classList.add("invisible");
        foto0++
        foto[foto0].classList.remove("invisible");
    }
    else{
        alert("Torna indietro!!")
    }
})

btnsx.addEventListener("click", function () {
    if(foto0 > 0){
        foto[foto0].classList.add("invisible");
        foto0--;
        foto[foto0].classList.remove("invisible");
    }
});




















































