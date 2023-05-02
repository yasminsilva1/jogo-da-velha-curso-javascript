let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll(".button-container button");
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

                if(secondPlayer == "ia-player") {
                    // função para executar jogada
                    computerPlay();
                    player2++;
                }
            } else {
                player2++;
            }

            // verifica quem venceu
            checkWinCondition();
        }
    })
}

// evento para saber se é 2 players ou IA
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        secondPlayer = this.getAttribute("id");

        // sumindo com os botões após o click e mostrando o jogo
        for(let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = "none";
        }

        setTimeout(() => {
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        }, 100);
    });
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

// verificação de quem venceu
function checkWinCondition() {

    let b1 = document.querySelector("#block-1");
    let b2 = document.querySelector("#block-2");
    let b3 = document.querySelector("#block-3");
    let b4 = document.querySelector("#block-4");
    let b5 = document.querySelector("#block-5");
    let b6 = document.querySelector("#block-6");
    let b7 = document.querySelector("#block-7");
    let b8 = document.querySelector("#block-8");
    let b9 = document.querySelector("#block-9");

    // horizontal - possibilidade 1
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == "x" && b2Child == "x" && b3Child == "x") {
            // x venceu
            declareWinner("x");
        } else if(b1Child == "o" && b2Child == "o" && b3Child == "o") {
            // o venceu
            declareWinner("o");
        }
    }

    // HORIZONTAL - possibilidade 2
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == "x" && b5Child == "x" && b6Child == "x") {
            // x venceu
            declareWinner("x");
        } else if(b4Child == "o" && b5Child == "o" && b6Child == "o") {
            // o venceu
            declareWinner("o");
        }
    }

    // HORIZONTAL - possibilidade 3
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == "x" && b8Child == "x" && b9Child == "x") {
            // x venceu
            declareWinner("x");
        } else if(b7Child == "o" && b8Child == "o" && b9Child == "o") {
            // o venceu
            declareWinner("o");
        }
    }

    // VERTICAL - possibilidade 1
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == "x" && b4Child == "x" && b7Child == "x") {
            // x venceu
            declareWinner("x");
        } else if(b1Child == "o" && b4Child == "o" && b7Child == "o") {
            // o venceu
            declareWinner("o");
        }
    }

    // VERTICAL - possibilidade 2
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {

        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == "x" && b5Child == "x" && b8Child == "x") {
            // x venceu
            declareWinner("x");
        } else if(b2Child == "o" && b5Child == "o" && b8Child == "o") {
            // o venceu
            declareWinner("o");
        }
    }

    // VERTICAL - possibilidade 3
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == "x" && b6Child == "x" && b9Child == "x") {
            // x venceu
            declareWinner("x");
        } else if(b3Child == "o" && b6Child == "o" && b9Child == "o") {
            // o venceu
            declareWinner("o");
        }
    }

    // DIAGONAL - possibilidade 1
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == "x" && b5Child == "x" && b9Child == "x") {
            // x venceu
            declareWinner("x");
        } else if(b1Child == "o" && b5Child == "o" && b9Child == "o") {
            // o venceu
            declareWinner("o");
        }
    }

    // DIAGONAL - possibilidade 2
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child == "x" && b5Child == "x" && b7Child == "x") {
            // x venceu
            declareWinner("x");
        } else if(b3Child == "o" && b5Child == "o" && b7Child == "o") {
            // o venceu
            declareWinner("o");
        }
    }

    // deu velha (empate)
    let counter = 0;

    for(i = 0; i < boxes.length; i++) {
        if(boxes[i].childNodes[0] != undefined) {
            counter++;
        }
    }

    if(counter == 9) {
        declareWinner("deu velha");
    }
}

// limpar o jogo, declarar o vencerdor e atualizar o placar
function declareWinner(winner) {
    let scoreBoardX = document.querySelector("#scoreboard-1");
    let scoreBoardO = document.querySelector("#scoreboard-2");
    let msg = "";

    if(winner == "x") {
        scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1;
        msg = "O jogador 1 venceu!"
    } else if(winner == "o"){
        scoreBoardO.textContent = parseInt(scoreBoardO.textContent) + 1;
        msg = "O jogador 2 venceu!"
    } else {
        msg = "Deu velha!";
    }

    // exibir a msg
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    // esconder a msg
    setTimeout(() => {
        messageContainer.classList.add("hide");
    }, 1500);

    // zerando as jogadas
    player1 = 0;
    player2 = 0;

    // removendo o X e O
    let boxesToRemove = document.querySelectorAll(".box div");
    for(let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
};

// executar a lógica da jogada da CPU
function computerPlay() {
    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for(let i = 0; i < boxes.length; i++) {
        let randomNumber = Math.floor(Math.random() * 5);
        // só preencher se o elemento filho estiver vazio
        if(boxes[i].childNodes[0] == undefined) {
            if(randomNumber <= 1) {
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
        // checagem de quantas estão preenchidas
        } else {
            filled++;
        }
    }

    if(counter == 0 && filled < 9) {
        computerPlay();
    }
}