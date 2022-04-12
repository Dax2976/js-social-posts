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
    contenuto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, modi aliquid', 
    immage: 'https://i.picsum.photos/id/0/300/300.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ',
    avatar: 'https://i.picsum.photos/id/1003/300/300.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk',
    autore: 'Davide Ferraro',
    numberlikes: 80,
    creation: '02/21/2022'
    },
    {
        id:2, 
        contenuto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, modi aliquid', 
        immage: 'https://i.picsum.photos/id/3/300/300.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ',
        avatar: 'https://i.picsum.photos/id/10/300/300.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk',
        numberlikes: 180,
        autore: 'Naruto Uzumaki',
        creation: '02/23/2022'
    }
]

const likes = []

//dom

const domElement = document.getElementsByClassName('likes')

// array degli oggetti nel dom

