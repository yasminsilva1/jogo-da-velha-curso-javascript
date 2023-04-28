let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#button-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;

// adicionando o evento de click aos boxes
for(i = 0; i < boxes.length; i++) {

    // quando alguem clica no box
    boxes[i].addEventListener("click", function(){

        let elemento = checkElemento(player1, player2)

        // verifica se já tem X ou O
        if(this.childNodes.length == 0) {

            let cloneElemento = elemento.cloneNode(true);
            this.appendChild(cloneElemento);

            // computar jogada
            if(player1 == player2) {
                player1++;
            } else {
                player2++;
            }
        }
    })
}

// vê quem irá jogar
function checkElemento(player1, player2) {
    if(player1 == player2) {
        // x
        elemento = x;
    } else {
        // o
        elemento = o;
    }
    return elemento;
}