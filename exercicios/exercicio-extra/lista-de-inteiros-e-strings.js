// Crie uma funçao que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings

const lista1 = ['matheus', 'teste', 1, 22 ]
const lista2 = [ 1, 22 ]
const lista3 = ['matheus' ]

const getListaDeStrings = (lista) => {
    let listOfNonStrings = []
    lista.forEach(element => {
        if(typeof element !== 'string'){
            listOfNonStrings.push(element)
        }
    });
    return listOfNonStrings
}

console.log(getListaDeStrings(lista1))
console.log(getListaDeStrings(lista2))
console.log(getListaDeStrings(lista3))