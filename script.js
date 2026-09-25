let victoriasUsuario = 0;
let victoriasMaquina = 0;


while (victoriasUsuario < 3 && victoriasMaquina < 3) {                 

  let jugada = prompt("Elige: Piedra, Papel o Tijera");
    jugada = jugada.toLowerCase();                                     
  let azar = Math.random();
  let jugadaMaquina = "";

  if (azar < 0.33) {
    jugadaMaquina = "piedra";
  } else if (azar < 0.66) {
    jugadaMaquina = "papel";
  } else {
    jugadaMaquina = "tijera";
  }


  console.log(`La máquina eligió: ${jugadaMaquina}`);                      

  if (jugada === "piedra" && jugadaMaquina === "tijera") {                
    victoriasUsuario++;
    alert(`¡Ganaste la ronda! La máquina eligió ${jugadaMaquina}.\nMarcador: Tú ${victoriasUsuario} - ${victoriasMaquina} Máquina`);
  } else if (jugada === "papel" && jugadaMaquina === "piedra") {
    victoriasUsuario++;
    alert(`¡Ganaste la ronda! La máquina eligió ${jugadaMaquina}.\nMarcador: Tú ${victoriasUsuario} - ${victoriasMaquina} Máquina`);
  } else if (jugada === "tijera" && jugadaMaquina === "papel") {
    victoriasUsuario++;
    alert(`¡Ganaste la ronda! La máquina eligió ${jugadaMaquina}.\nMarcador: Tú ${victoriasUsuario} - ${victoriasMaquina} Máquina`);
  } else if (jugada === jugadaMaquina) {
    console.log("Empate");
    alert(`Empate. La máquina eligió ${jugadaMaquina}.\nMarcador: Tú ${victoriasUsuario} - ${victoriasMaquina} Máquina`);
  } else {
    victoriasMaquina++;
    alert(`Gana la máquina. Eligió ${jugadaMaquina}.\nMarcador: Tú ${victoriasUsuario} - ${victoriasMaquina} Máquina`);
  }
}

let mensajeFinal = victoriasUsuario === 3 ? "Ganó el usuario el juego" : "Ganó la máquina el juego";
console.log(mensajeFinal);
alert(mensajeFinal);
