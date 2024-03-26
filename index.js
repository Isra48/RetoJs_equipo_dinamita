/// importaciones ///
import { renderPost } from "./render_post.js";



renderPost()

//funcion del btn//
document.getElementById('btn').addEventListener('click', function() {
///listeners de cada input///
const autorValue = document.getElementById('autor').value;
const tituloValue = document.getElementById('titulo').value;
const parrafoValue = document.getElementById('parrafo').value;
const imgValue = document.getElementById('img').value;


//////acciones al dar click




                    //Local Storage//

    //funcion para revisar si hay datos existentes//
let localStorageData = JSON.parse(localStorage.getItem('data'));

if (!localStorageData) {
    localStorageData = [];

}

            // creacion de obj con valores //
            const post = {
                autor: autorValue,
                titulo: tituloValue,
                parrafo: parrafoValue,
                img: imgValue
            }

            console.log( post)

//Agregar nuevo objeto como indice del array//
localStorageData.push(post)    


// Guardar array actualizado en localStorage
localStorage.setItem('data', JSON.stringify(localStorageData));
location.reload()

console.log('datos local storage', localStorageData)

})



///// Funcion para seleccionar 









