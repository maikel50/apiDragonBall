//import axios from "axios";

import { getPersonajes, getPersonajesByKi } from './modules/api.js';

// function mostrarPersonajes(){
//     getPersonajes().then(c =>{
//         console.log("Todos los personajes");
//         console.log(c);

//         getPersonajesByKi(30000).then(ki =>{
//             console.log("\nPersonajes con minimo de 30000 de ki");
//             console.log(ki);

//         })
//     })
// }

// mostrarPersonajes();

function mostrarPersonajes(){
    getPersonajes()
        .then(personajes => {
            console.log("Todos los personajes:");
            console.log(personajes);

            return getPersonajesByKi(30000);
        })
        .then(personajesConKi => {
            console.log("\nPersonajes con mínimo de 30000 de ki:");
            console.log(personajesConKi);
        })
        .catch(error => {
            console.error("Error al obtener los personajes:", error);
        });
}

mostrarPersonajes();