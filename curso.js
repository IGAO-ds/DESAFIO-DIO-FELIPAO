let HEROI = {
    nome: "DIO-HERO",
    xp: 2000,
    rank: "indeterminado"
}
const Ranked = {
    loss: true,
    win: true,
    lossPoints: 750,
    winPoints: 500

}




if(Ranked.loss === true){
    HEROI.xp -= Ranked.lossPoints ,
    
}

else if(Ranked.win === true){
    HEROI.xp += Ranked.winPoints
}



switch(true){
    case (HEROI.xp<= 1000):
     HEROI.rank = "ferro"
     console.log("Parabens, seu novo rank 'e: " + HEROI.rank + ", Pratique mais")
    break
    
    case (HEROI.xp>= 1001 && HEROI.xp <= 2000):
     HEROI.rank = "bronze"
     console.log("Parabens, seu novo rank 'e: " + HEROI.rank + ", a carroagem ta comecando a andar")
    break

    case (HEROI.xp>= 2001 && HEROI.xp <= 5000):
     HEROI.rank = "Prata Ouro"
     console.log("Parabens, seu novo rank 'e: " + HEROI.rank + ", nao se iluda, ainda tem chao")
    break

    case (HEROI.xp>= 5001 && HEROI.xp <= 8000):
     HEROI.rank = "Platina Diamante"
     console.log("Parabens, seu novo rank 'e: " + HEROI.rank + ", pode comecar a se gabar")
    break

    case (HEROI.xp>= 8001 && HEROI.xp <= 9000):
     HEROI.rank = "Ascendente"
     console.log("Parabens, seu novo rank 'e: " + HEROI.rank + ", melhor que muitos")
    break

    case (HEROI.xp>= 9001 && HEROI.xp <= 10000):
     HEROI.rank = "Imortal"
     console.log("Parabens, seu novo rank 'e: " + HEROI.rank + ", destruidor de lares")
    break

    case (HEROI.xp>= 10001):
     HEROI.rank = "Radiante"
     console.log("Parabens, seu novo rank 'e: " + HEROI.rank + ", TU E MAIS QUANTOS?")
    break

}
 