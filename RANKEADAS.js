let jogo = {
     win: 115,
     lose: 22
}
let saldo = jogo.win - jogo.lose
var  Rank = "undefined"
function rank(){

     function saldoPartidas(win, lose){
          saldo
          return saldo
     
     }

 let number = saldoPartidas(jogo.win, jogo.lose)
 let Rank = "undefined"

  switch(true){
     case (number < 10):
      Rank = "ferro"
      break
    
     case (number > 11 && number < 20):
      Rank = "Bronze"
      break

     case (number > 21 && number < 50):
      Rank = "prata"
      break

     case (number > 51 && number < 80):
      Rank = "Ouro"
      break

     case (number > 81 && number < 90):
      Rank = "Diamante"
      break

     case (number > 91 && number < 100):
      Rank = "Lendário"
      break
     
     case (number > 101):
      Rank = "imortal"
      break
  }
  return Rank

}
 
 let result = rank() 
 let saldoVitorias = 
 function main(result, saldo){
     
 }
 console.log(`O Herói tem de saldo de ${saldo} está no nível de ${result}`)



