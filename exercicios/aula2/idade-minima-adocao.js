const dog1 = {nome: 'Belinha', idade: 3, porte: 'pequeno'}
const dog2 = {nome: 'Pretinha', idade: 1, porte: 'medio'}
const dog3 = {nome: 'Hanna', idade: 8, porte: 'grande'}

const mostrarTag = (dog) => {
    console.log(`Nome: ${dog.nome}`)
    console.log(`Idade: ${dog.idade}`)
    if(dog.porte === 'pequeno'){
        console.log(`Está apto a adoção: Está apto`)
    }else {
        console.log(`Está apto a adoção: ${dog.idade >= 2 ? "Está apto" : "Não está apto"}`)
    }
    console.log('-------------------------------------')
}

mostrarTag(dog1)
mostrarTag(dog2)
mostrarTag(dog3)

