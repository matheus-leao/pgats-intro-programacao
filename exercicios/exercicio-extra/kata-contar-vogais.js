/* 
Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para 
este Kata. O texto de entrada conterá apenas letras minúsculas e/ou espaços. Letras acentuadas 
não fazem parte desse desafio.
*/

const texto1 = 'matheus souza leao teste'
const texto2 = 'matheus'
const texto3 = 'tr'
const listVogais = ['a', 'e', 'i', 'o', 'u']

const getQuantasVogaisExistemNaLista = (texto) => {
    let textoTratado = texto.toLowerCase().trim().split('');
    let quantidadeVogaisTotais = 0
    textoTratado.forEach((letter, index) => {
        if(listVogais.includes(letter)){
            quantidadeVogaisTotais++
        }
    });
    return quantidadeVogaisTotais

}

console.log(`O texto 1 contem ${getQuantasVogaisExistemNaLista(texto1)} vogais.`)
console.log(`O texto 2 contem ${getQuantasVogaisExistemNaLista(texto2)} vogais.`)
console.log(`O texto 3 contem ${getQuantasVogaisExistemNaLista(texto3)} vogais.`)