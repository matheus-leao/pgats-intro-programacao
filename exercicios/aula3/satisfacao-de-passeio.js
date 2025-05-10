const dog1 = {nome: 'belinha'}

const verificarSatisfacao = (dog) => {
    const voltasAteSatisfeito = 5
    let quantidadeDeVoltas = 0

    while(quantidadeDeVoltas<voltasAteSatisfeito){
        console.log(`O(A) ${dog.nome} está na volta ${quantidadeDeVoltas}!`)
        quantidadeDeVoltas++;
    }

    console.log(`O(A) ${dog.nome} está satisfeito(a)!`)
}

verificarSatisfacao(dog1)