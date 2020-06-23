// ## Importe a biblioteca ##

let rs = require("readline-sync")

let mes = parseInt (rs.question("Digite o mes de seu aniversario em numero\n"))

let dia = parseInt (rs.question("Digite o dia do seu aniversario\n"))

if (mes == 1) {
    if(dia <=20) {
        console.log("Capricornio")
    }
    else{
        console.log("Aquario")
    }
}
else if(mes == 2) {
    if(dia <=18) {
        console.log("Aquario")
    }
    else{
        console.log("Peixes")
    }
}
else if(mes == 3) {
    if(dia <= 20) {
        console.log("Peixes")
    }
else{
    console.log("Aries")
}
}
else if(mes == 4) {
    if(dia <=20) {
        console.log("Aries")
    }
else{
    console.log("Touro")
}
}
else if (mes == 5) {
    if(dia <= 21) {
        console.log("Touro")
    }
else{
    console.log("Gemeos")
}
}
else if (mes == 6) {
    if(dia <= 21) {
        console.log("Gemeos")
    }
    else{
        console.log("Cancer")
    }
    if (mes == 7) {
        if(dia <= 22) {
            console.log("Cancer")
        }
        else{
            console.log("Leao")
        }
        if (mes == 8) {
            if(dia <= 23) {
                console.log("Leao")
            }
            else{
                console.log("Virgem")
            }
            if (mes == 9) {
                if(dia <= 22) {
                    console.log("Virgem")
                }
                else{
                    console.log("Libra")
                }
                if (mes == 10) {
                    if(dia <= 22) {
                        console.log("Libra")
                    }
                    else{
                        console.log("Escorpiao")
                    }
                    if (mes == 11) {
                        if(dia <= 21) {
                            console.log("Escorpiao")
                        }
                        else{
                            console.log("Sagitario")
                        }
                        if (mes == 12) {
                            if(dia <= 21) {
                                console.log("Sagitario")
                            }
                            else{
                                console.log("Capricornio")
                            }

// ## Faça o código ##
