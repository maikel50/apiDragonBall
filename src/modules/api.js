import axios from "axios";

export function getPersonajes() {
    return axios.get("https://dragonball-api.com/api/characters")
    .then(response => {
        return response.data.items;
    })
    .catch(error => {
        console.log(error);
    });
}

export function getPersonajesByKi(minKi) {
    return getPersonajes().then(personajes => {
        if (Array.isArray(personajes)) {
            return personajes.filter(personaje => {
                if (typeof personaje.ki === "string") {
                    const kiNumerico = parseInt(personaje.ki.replace(/\./g, ""));
                    return kiNumerico < minKi;
                }
                return false;
            });
        } else {
            console.error('La respuesta no es un arreglo', personajes);
            return [];
        }
    });
}


