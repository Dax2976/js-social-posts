// Milestone 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// id del post, numero progressivo da 1 a n
// nome autore,
// foto autore,
// data in formato americano (mm-gg-yyyy),
// testo del post,
// immagine (non tutti i post devono avere una immagine),
// numero di likes.
// Non è necessario creare date casuali
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)


// creazione dei post

const post = [
    {
    id:1, 
    descrizione: 'Io che sono pronto a combattere contro il male', 
    immage: 'https://pbs.twimg.com/media/DeC3pNsX0AAPb-F?format=jpg&name=large',
    avatar: 'https://www.mytechnology.eu/wp-content/uploads/2014/11/ken.jpg',
    autore: 'Ken Shiro',
    numberlikes: 80,
    creation: '02/21/2022'
    },
    {
        id:2, 
        descrizione: 'Io e il mio amico del cuore Kurama ', 
        immage: 'https://images.everyeye.it/img-notizie/naruto-hokage-kurama-partner-micidiali-figure-600-euro-v3-548591.jpg',
        avatar: 'https://mangahelpers.com/forum/data/xfmg/thumbnail/0/876-370eb318b5488756721727b917ecd35d.jpg?1546896362',
        numberlikes: 180,
        autore: 'Naruto Uzumaki',
        creation: '02/23/2022'
    }
]

const likes = []
// Milestone 2
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
//dom

const domElement = document.getElementsByClassName('likes')

// array degli oggetti nel dom

for(let i = 0; i<post.length;i++){
    const single = post[i]
    let numberlikes = single.numberlikes
    //console.log(numberlikes)
    const id = single.id
    //console.log(id)
    const cardElement = `<div class="cards">
    <div class="profile">
        <img id="profile_img"
            src="${single.avatar}"
            alt="">
        <div>
            <h3>${single.autore}</h3>
            <p>${single.creation}</p>
        </div>
    </div>
    <div class="mid">
        <p>${single.descrizione}</p>
        <div class="mid_img">
            <img
                src="${single.immage}"
                alt="">
        </div>
        <div>
        </div>
    </div>
    <div class="like">
        <button class="addLike" id="btn_like ${single.id}"> <i class="fa-solid fa-thumbs-up"></i> Mi piace</button>
        <p>Piace a <span id="number_like ${single.id}" class="likes">${single.numberlikes}</span> persone</p>
    </div>
</div>
`


// Milestone 3
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

document.querySelector('.container').insertAdjacentHTML('beforeend',cardElement)
document.getElementById('btn_like '+ single.id).addEventListener("click",function() {

    if (!likes.includes(single.id)) {

        let addNewLike = single.numberlikes + 1;
        let spanlikeElement = document.getElementById('number_like ' + single.id);
        
        Likeplus(spanlikeElement, addNewLike);
        likes.push(single.id)
    }
 });
}

//funzione per aumentare il numero dei like
function Likeplus (spanlikeElement, PlusLike){
    return spanlikeElement.innerHTML = PlusLike
}