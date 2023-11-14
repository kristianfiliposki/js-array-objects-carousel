



/* scrivo le mie variabili */
const buttonLeft=document.getElementById("btn-left");
const buttonRight=document.getElementById("btn-right");
let galleries=[];
const images = [
    {
        image: "./img 4/01.webp",
        title: 'Marvels Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image:"./img 4/02.webp",
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: "./img 4/03.webp",
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: "./img 4/04.webp",
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: "./img 4/05.webp",
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let container=document.getElementById("carousel")


/* per ognuno degli elementi presenti nelle images,sposto i dati nell'HTML */
/* voglio aggiungere le card nell'html */
let i=0;
while ( i < images.length) {
    let immagine = images[i];
    container.innerHTML+= 
    `
    <div class="card">
    <div class="foto-wrapper">
    <img src="${images[i].image}" class="foto">
    </div>
    <div class="text-foto">${images[i].title}</div>
    <p class="text-foto">${images[i].text}</p>
    </div>
    `
    
    /* aumentanto l'indice dell'arrey in cui la card risiede */
    i++;
}    

/* invoco la funzione PULSANTI */
pulsanti();


/* funzione che fa funzionare il pulsante di sinistra e di destra */
function pulsanti(){

    /* creo una variabile che possa crescere e indicare il valore della posizione dell'arrey */
    let foto0 =0;
    /* creo un arrey di cards,chiamando tutti gli alementi della stessa classe */
    let immagini= document.getElementsByClassName("card");
    /* rendo tutti invisibili tranne il primo (i=0)*/
    for (let i = 1; i < immagini.length; i++) {
        immagini[i].classList.add("invisible");
    }
    /* dichiaro il limite,per lo spostamento futuro delle cards */
    let finalfoto=immagini.length -1;
    



    /* pulsante destro */
    buttonRight.addEventListener("click",function(){
        /* se la foto corrente(indicata dall'indice "foto0") non è l'ultima.. */
        if(foto0 < finalfoto){
            /* nascondi la foto corrente */
            immagini[foto0].classList.add("invisible");
            /* seleziona la foto seguente */
            foto0++
            /* mostrala */
            immagini[foto0].classList.remove("invisible");
        }
        /* altrimenti se la foto corrente è l'ultima */
        else{
            /* nascondi la foto corrente  */
            immagini[foto0].classList.add("invisible");
            /* riparti da capo */
            foto0 = 0;
            /* rendi visibile la foto iniziale */
            immagini[foto0].classList.remove("invisible");
        }
      
        
    })
    /* pulsante sinistro */
    buttonLeft.addEventListener("click", function () {
        if(foto0 > 0){    
            /* nascondi la foto corrente */
            immagini[foto0].classList.add("invisible");
            /* seleziona la foto seguente */
            foto0--
            /* mostrala */
            immagini[foto0].classList.remove("invisible");
        }
        else {
            /* nascondi la foto corrente  */
            immagini[foto0].classList.add("invisible");
            /* riparti da capo */
            foto0 = finalfoto ;
            /* rendi visibile la foto iniziale */
            immagini[foto0].classList.remove("invisible");
        }
    });
}


let gallery=document.getElementById("gallery");
/* creo una galleria di card laterale */
for (let i=0; i < images.length;i++){
    let immagine = images[i];
    gallery.innerHTML+= `
    <div class="foto-gallery"><img src="${images[i].image}" class="foto" alt="foto"></div>
`
    galleries.push(gallery.innerHTML);
}    
/* ***************** */
let sideCard=document.getElementsByClassName("foto-gallery")

sideCard[0].addEventListener("click",function () {
     container.innerHTML= `
     <div class="card">
     <div class="foto-wrapper">
     <img src="${images[0].image}" class="foto">
     </div>
     <div class="text-foto">${images[0].title}</div>
     <p class="text-foto">${images[0].text}</p>
     </div>
     `
})
sideCard[1].addEventListener("click",function () {
    container.innerHTML= `
     <div class="card">
     <div class="foto-wrapper">
     <img src="${images[1].image}" class="foto">
     </div>
     <div class="text-foto">${images[1].title}</div>
     <p class="text-foto">${images[1].text}</p>
     </div>
     `
})
sideCard[2].addEventListener("click",function () {
    container.innerHTML= `
     <div class="card">
     <div class="foto-wrapper">
     <img src="${images[2].image}" class="foto">
     </div>
     <div class="text-foto">${images[2].title}</div>
     <p class="text-foto">${images[2].text}</p>
     </div>
     `
    console.log(this);
})
sideCard[3].addEventListener("click",function () {
    container.innerHTML= `
     <div class="card">
     <div class="foto-wrapper">
     <img src="${images[3].image}" class="foto">
     </div>
     <div class="text-foto">${images[3].title}</div>
     <p class="text-foto">${images[3].text}</p>
     </div>
     `
    console.log(this);
})
sideCard[4].addEventListener("click",function () {
    container.innerHTML= `
     <div class="card">
     <div class="foto-wrapper">
     <img src="${images[4].image}" class="foto">
     </div>
     <div class="text-foto">${images[4].title}</div>
     <p class="text-foto">${images[4].text}</p>
     </div>
     `
    console.log(this);
})