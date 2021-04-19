/* 
    Crie um algoritmo que transforme as notas do sistema
    numérico para sistemas em caracteres tipo A B C
    
    * de 90 para cima - A
    * entre 80 e 89   - B
    * entre 70 e 79   - C
    * entre 60 e 69   - D
    * menor que 70    - F

*/
/*
let score = 79;
if (score >= 90) {
    console.log("A");
} else if (score >=80 && score <=89) {
    console.log("B")
} else if (score >= 70 && score <=79) {
    console.log("C")
} else if (score >= 60 && score <=69) {
    console.log("D")
} else {
    console.log("F")
}
*/

//let score = 100;



function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score <= 60 && score >= 0

    let scoreFinal;

    if (scoreA){
        scoreFinal = "A"
    } else if (scoreB){
        scoreFinal = "B"
    } else if (scoreC) {
        scoreFinal = "C"
    } else if (scoreD) {
        scoreFinal = "D"
    } else if (scoreF) {
        scoreFinal = "F"
    } else {
        scoreFinal = "Nota inválida"
    }

    return scoreFinal;
}

console.log(getScore(45))
console.log(getScore(61))
console.log(getScore(80))
console.log(getScore(90))