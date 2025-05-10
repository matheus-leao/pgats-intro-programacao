const dog1 = {nome: 'Belinha', quantidadeDePetiscos: 5}

const alimentarDog = (dog) => {
    for(let i = 1; i <= dog.quantidadeDePetiscos; i++){
        console.log(`O dog acabou de receber um petisco. Ele recebeu um total de ${i} petiscos até o momento.`)
    }
    console.log(`Acabaram os petiscos!`)
}

alimentarDog(dog1)