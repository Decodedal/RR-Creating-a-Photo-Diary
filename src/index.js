
// import {koalas} from './koalas.js'
// import{render}from './render.js'
// import koalaCard from './koalaCard'
// import{renderActiveKoala} from './renderBig'
// import renderCard from './renderCard'
// let activeKoala = null


// Changes the active koala, then re-renders the page to display that koala
// let selectKoala = koala => {
//     activeKoala = koala
//     render()
// }



// Renders a list of koalas
// let renderKoalaList = koalas => {
//     let koalaContainer = document.createElement('div')

//     koalaContainer.setAttribute('class', 'ui items')

//     koalas.forEach( koala => {
//         let koalaCard = renderKoalaCard(koala)
//         koalaContainer.append(koalaCard)
//     })

//     return koalaContainer
// }



// Renders the image of a koala card
let renderKoalaCardImage = koala => {
    let imageContainer = document.createElement('div')
    let koalaImage = document.createElement('img')

    imageContainer.setAttribute('class', 'image')

    koalaImage.setAttribute('src', koala.imageURL)

    imageContainer.append(koalaImage)

    return imageContainer
}



// Render the page after all functions are defined
render()