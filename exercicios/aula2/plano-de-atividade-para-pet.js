const dog1 = {nome: 'Belinha', porte: 'pequeno', tempoDisponivel: 15}
const dog2 = {nome: 'Nala', porte: 'medio',  tempoDisponivel: 30}
const dog3 = {nome: 'Hanna', porte: 'grande',  tempoDisponivel: 45}
const dog4 = {nome: 'Pantera', porte: 'gigante',  tempoDisponivel: 45}

const definirQualTipoDeAtividade = (dog) =>{
    switch(dog.porte){
        case 'pequeno':
            return 'brincar dentro de casa'
        break;
        case 'medio':
            return 'caminhada no quarteirão'
            break;
        case 'grande':
            return 'correr no parque'
            break;
        default:
            return 'porte inválido' 
    }
}

const definirMensagemDoTempo = (dog) => {
    if(dog.tempoDisponivel <= 15)
        return 'Atividade rápida'
    else if(dog.tempoDisponivel <= 30)
        return 'Tempo ideal'
    else {
        return 'Hora da diversão'
    }
}

const imprimirMensagem = (dog) => {
    console.log(`Nome:  ${dog.nome}`)
    console.log(`Porte: ${dog.porte}`)
    console.log(`${definirMensagemDoTempo(dog)}: ${definirQualTipoDeAtividade(dog)}`)
    console.log("----------------")
}

imprimirMensagem(dog1)
imprimirMensagem(dog2)
imprimirMensagem(dog3)
imprimirMensagem(dog4)