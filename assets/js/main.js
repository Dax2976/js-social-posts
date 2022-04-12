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


//inserisco Element nel html

document.querySelector('.container').insertAdjacentHTML('beforeend',cardElement)
}