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
            //newCard.innerHTML = `<div><p>${card.titulo}</p></div>`;
            newCard.innerHTML = renderCard(card.titulo, card.autor, card.parrafo, card.img, card.date)

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
    const inputAutor = document.getElementById('autor');
    const inputParrafo = document.getElementById('parrafo');
    const inputImg = document.getElementById('img');
    const inputDate = document.getElementById('date');

    // Renderizar contenido de la card seleccionada en el input
    inputTitulo.value = card.titulo;
    inputAutor.value = card.autor;
    inputParrafo.value = card.parrafo;
    inputImg.value = card.img;
    inputDate.value = card.date;

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


const renderCard = (titulo,autor,parrafo,img, fecha ) =>{

    const newDate = new Date(fecha)

return `

<section class="column card2" style="margin-top: 1em;">
${ img.length > 0 ?  `<img src=" ${img}"
width="1000" height="420" class="imgPost"></img>`: `<div 
  style="background-color:red !important; width:"1000px"; height:"420px"; "></div> ` }
<div class="row usersCard">
    <div class="avatar"><img alt="Wasp logo"
            src="https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F3369%2Fc86918f8-76a9-4b01-accf-cc257f9ee56f.png"
            class="avatar1">

            <img src="https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1126557%2Fe7f6249c-4383-4957-80b5-13f8a4eba9d8.jpeg"
                alt="martinovicdev profile" class="avatar2">
        </div>

        <div class="column userInfo">
            <p><a href="">${autor}</a></p>
            <span>${newDate.toLocaleString()}</span>
        </div>
    </div>

    <div class="column">
        <div class="column" id="padding">
            <a class="cardTitle">
                <h2>${titulo}</h2>
            </a>
            <div class="row hashtags">
                <div>
                    <a href="" class="hText hTextP"><span class="hColorP">#</span>webdev</a>
                </div>
                <div>
                    <a href="" class="hText hTextB"><span class="hColorB">#</span>hosting</a>
                </div>
                <div>
                    <a href="" class="hText hTextG"><span class="hColorG">#</span>tips</a>
                </div>
                <div>
                    <a href="" class="hText hTextR"><span class="hColorR">#</span>webdev</a>
                </div>
                <div>
                    <a href="" class="hText hTextC"><span class="hColorC">#</span>hosting</a>
                </div>
                <div>
                    <a href="" class="hText hTextY"><span class="hColorY">#</span>tips</a>
                </div>
            </div>

            <div class="row reactions alignCenter">

                <div class="row">
                    <div class=" row alignCenter reactionsBackground">
                        <img src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                            width="18" height="18">
                        <img src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                            width="18" height="18">
                        <img src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                            width="18" height="18">
                        <img src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                            width="18" height="18">
                        <img src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                            width="18" height="18">
                        <a>40 <span>reactions</span></a>
                    </div>

                    <div class="row alignCenter reactionsBackground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            role="img" aria-labelledby="ainatapmh57sccj61rdxyb6qt8if4ise"
                            class="crayons-icon">
                            <title id="ainatapmh57sccj61rdxyb6qt8if4ise">Comments</title>
                            <path
                                d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z">
                            </path>
                        </svg>
                        <a><span>Add Comment</span></a>
                    </div>
                </div>

                <div class="minRead alignCenter">
                    <span>1 min read</span>

                    <button class="save" href="#">
                        <img src="https://cdn-icons-png.freepik.com/512/494/494568.png" alt=""
                            height="15" width="18">
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>






`


}