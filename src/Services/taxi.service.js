/* Fichero services/taxi.js */

export const recojer = () => {    
  return viaje(true);    
}

const viaje = (enDestino) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if(enDestino) resolve("¡Ha llegado a su destino!")
          else reject("Hay problemas en el camino")
      }, 2000);        
  });
}