// Variable global para almacenar los datos de los posts
let dataPost = [];
// Variable global para almacenar el índice del objeto de la card que se está editando
let currentEditingIndex = null;

// Función para renderizar los posts
export const renderPost = () => {
    const cardsContainer = document.getElementById('cards_render_container');
    cardsContainer.innerHTML = ''; // Limpiar el contenedor antes de renderizar

    // Revisar el local storage
    const storedData = localStorage.getItem('data');
    if (storedData) {
        dataPost = JSON.parse(storedData);
        dataPost.forEach((card, i) => {
            const newCard = document.createElement("div");
            newCard.innerHTML = `<div><p>${card.titulo}</p></div>`;
            newCard.addEventListener("click", () => editPost(i, card));
            cardsContainer.appendChild(newCard);
        });
    } else {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `<h2>No hay nada mano</h2>`;
        cardsContainer.appendChild(newDiv);
    }
}

// Función para editar un post
const editPost = (i, card) => {
    console.log("Post número", i, card);
    // Almacenar el índice de la card seleccionada
    currentEditingIndex = i;

    // Rastreadores de inputs
    const inputTitulo = document.getElementById('titulo');

    // Renderizar contenido de la card seleccionada en el input
    inputTitulo.value = card.titulo;

    // Agregar un evento al botón de guardar para actualizar el objeto
    const guardarBtn = document.getElementById('btn');
    guardarBtn.removeEventListener('click', guardarCambios); // Evitar múltiples eventos
    guardarBtn.addEventListener('click', guardarCambios);

    // Agregar evento al botón de borrar
    const borrarBtn = document.getElementById('btn_borrar');
    borrarBtn.addEventListener('click', borrarPost);
}

// Función para guardar los cambios
const guardarCambios = () => {
    // Obtener los nuevos valores desde los inputs
    const newTitulo = document.getElementById('titulo').value;
    // Actualizar el objeto en el array dataPost con los nuevos valores
    dataPost[currentEditingIndex].titulo = newTitulo;

    // Actualizar el local storage
    localStorage.setItem('data', JSON.stringify(dataPost));

    // Limpiar la referencia al post en edición
    currentEditingIndex = null;

    // Volver a renderizar los posts para reflejar los cambios
    renderPost();
}

// Función para borrar un post
const borrarPost = () => {
    // Eliminar el objeto seleccionado del array dataPost
    dataPost.splice(currentEditingIndex, 1);

    // Actualizar el local storage
    localStorage.setItem('data', JSON.stringify(dataPost));

    // Limpiar la referencia al post en edición
    currentEditingIndex = null;

    // Volver a renderizar los posts para reflejar los cambios
    renderPost();
    window.location.reload();
}
