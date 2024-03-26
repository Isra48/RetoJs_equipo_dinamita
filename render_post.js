export const renderPost = () => {

    const newDiv = document.createElement('div');
    const cardsContainer = document.getElementById('cards_render_container');

    // Revisar el local storage
    let dataPost = JSON.parse(localStorage.getItem('data'));

    if (!dataPost) {
        console.log('no hay nada mano')
        newDiv.innerHTML = `
        <h2> no hay nada mano </h2>
        `
        cardsContainer.appendChild(newDiv);



    } else {
        console.log('Soy el local storage desde hook', dataPost);
            // Elementos dentro de la tarjeta
    newDiv.innerHTML = `
    <p>${dataPost[0].titulo}</p>
     `;

cardsContainer.appendChild(newDiv);


    }

    



}