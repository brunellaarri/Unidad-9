let victoriasUsuario = 0;
let victoriasMaquina = 0;


while (victoriasUsuario < 3 && victoriasMaquina < 3) {                 //tiene que ser and asi cuando uno de los dos llega a 3 se termina el juego

  let jugada = prompt("Elige: Piedra, Papel o Tijera");
    jugada = jugada.toLowerCase();                                     // lo pongo en lowercase para que no haya problemas con el input del usuario
  let azar = Math.random();
  let jugadaMaquina = "";

  if (azar < 0.33) {
    jugadaMaquina = "piedra";
  } else if (azar < 0.66) {
    jugadaMaquina = "papel";
  } else {
    jugadaMaquina = "tijera";
  }


  console.log(`La máquina eligió: ${jugadaMaquina}`);                      //uso Interpolación de variables

  if (jugada === "piedra" && jugadaMaquina === "tijera") {                 // uso los acumuladores para sumar las victorias y que en algun momento termine el while
    victoriasUsuario++;
  } else if (jugada === "papel" && jugadaMaquina === "piedra") {
    victoriasUsuario++;
  } else if (jugada === "tijera" && jugadaMaquina === "papel") {
    victoriasUsuario++;
  } else if (jugada === jugadaMaquina) {
    console.log("Empate");
  } else {
    victoriasMaquina++;
  }
}

console.log(victoriasUsuario === 3 ? "Ganó el usuario" : "Ganó la máquina");        //uso operador ternario en vez de if o else 

