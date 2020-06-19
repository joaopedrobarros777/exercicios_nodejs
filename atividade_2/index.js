// ## Importe a biblioteca ##

let rs = require("readline-sync")

let respostaUsuario = rs.question("Voce esta usando mascara?")

let resposta2Usuario = rs.question("Voce esta lavando as maos?")

if (respostaUsuario === "sim") {
    console.log("voce esta fazendo a coisa certa!")
} else {
    console.log("voce esta correndo riscos")
}

// ## Faça o código ##
