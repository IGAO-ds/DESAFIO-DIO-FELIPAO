let pontos = 7000
let lista = [5, 8, 9, 10, 6, 6, 5, 4]
let kills = 50
let pontosAdicionados = 0
let partida = {
    win: false,
    loss: false
}
console.log("media: " + (lista.reduce / lista.length))

  if(kills >= 40){
     partida.win = true
     partida.loss = false

  }else if(kills < 40) {
    partida.loss = true
    partida.win = false
  }


function win(){
    if (kills >= 72) {
        pontosAdicionados += 750
    } else if (kills >= 50) {
        pontosAdicionados += 450
    } else if (kills >= 40) {
        pontosAdicionados += 300
    }
 
    console.log("Pontos adicionados:", pontosAdicionados); // Verificar pontos adicionados

    console.log("Seus pontos são: " + (pontos + pontosAdicionados) + "!")
}

win()

luta("conriga")
luta("penguim")
function luta(vilao){
    console.log("houve uma luta entre batman e " + vilao)
}

//outra parte

function main(user, password, dataBaseInstalationSapp = 1099){
    console.log(`connect:SappConnect;user=${user};password=${password};dataBaseInstalationSapp=${dataBaseInstalationSapp}`)

     
}

main ("igor", 941942, 1230)


//segudna parte


function numeros(numA, numB){
    let lista = [numA, numB] //soma e guarda na variavel

   return lista//retorna pra quando precisar chama-lo, so retorna um valor ou um array

}

let result = numeros(19, 20, 65, 99)
console.log("RESULTADO: " + result)

//terceira parte

function getName(name, splitChar){
   let = firstName = name.split(splitChar)[0]
  
  
   return firstName
}
   let nomeCliente = getName("Igor Doria de Sousa", " ")
   console.log("Welcome " + nomeCliente)
       nomeCliente = getName("IGOR_DORIA_DE_SOUSA", "_")
   console.log("Welcome " + nomeCliente)
