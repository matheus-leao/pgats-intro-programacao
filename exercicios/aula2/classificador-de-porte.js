const dog1 = {nome: 'Belinha', peso: 5.5, estoqueDeRacao: 3000}
const dog2 = {nome: 'Pretinha', peso: 3, estoqueDeRacao: 2000}
const dog3 = {nome: 'Hanna', peso: 15, estoqueDeRacao: 2000}

const classificarPorte = (dog) => {
    console.log(`Porte:  ${dog.nome}`)
    console.log(`Peso: ${dog.peso}`)
    console.log(`Porte: ${(dog.peso <= 10) ? "Pequeno" : "Medio"}`)
    console.log("----------------")
}

classificarPorte(dog1)
classificarPorte(dog2)
classificarPorte(dog3)
