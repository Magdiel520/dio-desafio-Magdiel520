let nome = "Magdiel"
let nivelEntrada = 0
let nivelClassificacao = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

if(nivelEntrada <= 1000 ){
    console.log("o herói de nome " + nome + " está no nível de "+nivelClassificacao[0])
}else if(nivelEntrada <= 2000){
    console.log("o herói de nome " + nome + " está no nível de "+nivelClassificacao[1])
}else if(nivelEntrada <= 5000){
    console.log("o herói de nome " + nome + " está no nível de "+nivelClassificacao[2])
}else if(nivelEntrada <= 7000){
    console.log("o herói de nome " + nome + " está no nível de "+nivelClassificacao[3])
}else if(nivelEntrada <= 8000){
    console.log("o herói de nome " + nome + " está no nível de "+nivelClassificacao[4])
}else if(nivelEntrada <= 9000){
    console.log("o herói de nome " + nome + " está no nível de "+nivelClassificacao[5])
}else if(nivelEntrada <= 10001){
    console.log("o herói de nome " + nome + " está no nível de "+nivelClassificacao[6])
}else if(nivelEntrada >= 10001){
    console.log("o herói de nome " + nome + " está no nível de "+nivelClassificacao[7])
}