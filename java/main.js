/* scrivo le mie variabili */
const buttonLeft=document.getElementById("btn-left");
const buttonRight=document.getElementById("btn-right");


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
    let i=0;
    while ( i < images.length) {
    let immagine = images[i];
    container.innerHTML+= `
        <div class="card">
        <div class="foto-wrapper">
            <img src="${images[i].image}" class="foto">
        </div>
            <div class="text-foto">${images[i].title}</div>
            <p class="text-foto">${images[i].text}</p>
        </div>`
        i++;
    }    



    /*     for (let i=0; i < images.lengthi;i++) {
        let immagine = images[i];
        container.innerHTML= 
        `
        <div class="card">
            <div class="foto-wrapper">
            <img src="${immagine.image}" class="foto">
            </div>
            <div class="text-foto">${immagine.title}</div>
            <p class="text-foto">${immagine.text}</p>
        </div>
        `;
    }     */