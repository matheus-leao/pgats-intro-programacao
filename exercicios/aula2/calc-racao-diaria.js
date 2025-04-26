const dog1 = {nome: 'Belinha', peso: 5.5, estoqueDeRacao: 3000}
const dog2 = {nome: 'Pretinha', peso: 3, estoqueDeRacao: 2000}
const dog3 = {nome: 'Hanna', peso: 15, estoqueDeRacao: 2000}

const quantidadeDiariaDeRacao = (dog) => {
    console.log(`Nome: ${dog.nome}`)
    const totalDeRacaoPorDia = dog.peso * 30
    const diasQueRacaoVaiDurar = dog.estoqueDeRacao / totalDeRacaoPorDia
    console.log(`O dog ${dog.nome} pesa ${dog.peso} kg e temos um estoque de ${dog.estoqueDeRacao} kg de racao para o mês.`)
    console.log(`Por isso, o dog pode comer ${totalDeRacaoPorDia} gramas de racao por dia!`)
    console.log(`A quantidade de estoque de racao vai durar por ${diasQueRacaoVaiDurar.toFixed()} dias.`)
    console.log('-------------------------------')
}

quantidadeDiariaDeRacao(dog1)
quantidadeDiariaDeRacao(dog2)
quantidadeDiariaDeRacao(dog3)