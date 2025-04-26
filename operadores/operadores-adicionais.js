// incremento

let idade = 10
idade++

//decremento
let pesoDoDog = 10
pesoDoDog--

// ternario
pesoDoDog = 10
const porteSimples = pesoDoDog <= 10 ? 'pequeno' : 'medio'
console.log('porte simples:' + porteSimples)

// ternario aninhado
const pesoDoDogTernario = 9
const porte = pesoDoDogTernario <= 10
              ? 'pequeno'
              : pesoDoDogTernario <= 20
              ? 'medio'
              : 'grande'

console.log('pesoDogTernario: ' + porte)