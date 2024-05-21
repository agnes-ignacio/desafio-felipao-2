function calculaSaldo(vitorias, derrotas){
    const saldo = vitorias - derrotas
   
    if(saldo < 0){
    saldo = 0
   }

   return saldo;
}

function calculaRank(saldo){
   const ranks = {
    ferro: [0, 10, "Ferro"],
    bronze: [11, 20, "Bronze"],
    prata:  [21, 50, "Prata"],
    ouro: [51, 80, "Ouro"],
    diamante: [81, 90, "Diamante"],
    lendario: [91, 100, "Lendário"],
    imortal: [101, 999, "Imortal"]
   }

   let rankAtual
   let rankIterado

   for(let i = 0; i < Object.keys(ranks).length; i++){
    rankIterado = Object.values(ranks)[i]
    if(saldo >= rankIterado[0] && saldo <= rankIterado[1]){
        rankAtual = rankIterado[2]
        break;
    }
   }

   return rankAtual;
}

const saldo = calculaSaldo(100, 35)
const rank = calculaRank(saldo)

console.log("O Herói tem de saldo de " + saldo + " e está no nível de " + rank + ".")