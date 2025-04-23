import axios from "axios";

export function obtenerTodosLosPersonajesYSuKi() {
  axios.get("https://dragonball-api.com/api/characters")
    .then(respuesta => {
      console.log("Personajes obtenidos:", respuesta.data.items);
      return respuesta.data.items;
    })
    .then(personajes => {
      const kiMinimo = 0;
      const personajesFiltrados = personajes.filter(personaje => Number.parseInt(personaje.ki) > kiMinimo);
      console.log(`Personajes con ki mínimo de ${kiMinimo}:`, personajesFiltrados);
      return personajesFiltrados;
    })
    .catch(error => {
      console.log("Error al obtener los personajes:", error);
    }

    );
}
