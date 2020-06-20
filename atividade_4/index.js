// ## Importe a biblioteca ##

let rs = require("readline-sync")

console.log("Bem vindo(a) ao calculador de signos.")

let dia = rs.question("Digite o dia do seu aniversario.")

let mês = rs.question("Digite o mês de seu aniversario em numero")

if (mes == 1){
    if(dia <=20){
        console.log("Capricornio")
    }
    else{
        console.log("Aquario")
    }
}
else if(mes == 2){
    if(dia <=18){
        console.log("Aquario")
    }
    else{
        console.log("Peixes")
    }
}
else if(mes == 3){
    if(dia <= 20){
        console.log("Peixes")
    }
}
else{
    console.log("Aries")
}
if(mes == 4){
    if(dia <=20){
        console.log("Aries")
    }
}
else{
    console.log("Touro")
}
if (mes == 5){
    if(dia <= 21){
        console.log("Touro")
    }
}
else{
    console.log("Gemeos")
}
if (mes == 6){
    if(dia <= 21){
        console.log("Gemeos")
    }
    else{
        console.log("Cancer")
    }
    if (mes == 7){
        if(dia <= 22){
            console.log("Cancer")
        }
        else{
            console.log("Leao")
        }
        if (mes == 8){
            if(dia <= 23){
                console.log("Leao")
            }
            else{
                console.log("Virgem")
            }
            if (mes == 9){
                if(dia <= 22){
                    console.log("Virgem")
                }
                else{
                    console.log("Libra")
                }
                if (mes == 10){
                    if(dia <= 22){
                        console.log("Libra")
                    }
                    else{
                        console.log("Escorpiao")
                    }
                    if (mes == 11){
                        if(dia <= 21){
                            console.log("Escorpiao")
                        }
                        else{
                            console.log("Sagitario")
                        }
                        if (mes == 12){
                            if(dia <= 21){
                                console.log("Sagitario")
                            }
                            else{
                                console.log("Capricornio")
                            }

// ## Faça o código ##
