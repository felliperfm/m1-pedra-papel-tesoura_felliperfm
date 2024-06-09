/* Desenvolva seu código abaixo */
function playRockPaperScissor(player1, player2) {
    let empate = "Empate!";
    let player1Venceu = "Jogador 1 venceu!";
    let player2Venceu = "Jogador 2 venceu!";

    if (player1 == player2) {
        return empate
    } else if ((player1 == "Pedra" && player2 == "Tesoura") || (player1 == "Tesoura" && player2 == "Papel") || (player1 == "Papel" && player2 == "Pedra")) {
        return player1Venceu
    } return player2Venceu;
}

const resultado = playRockPaperScissor("Tesoura", "Tesoura");
console.log(resultado)