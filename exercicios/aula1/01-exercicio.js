// Gerador de Tags para Animais de Estimação
const tagRex = {
    nome: "Rex",
    idade: 5,
    peso: 20,
    raca: "Labrador",
    isAdotado: false,
}

const tagBelinha = {
    nome: "Belinha",
    idade: 3,
    peso: 5,
    raca: "pincher",
    isAdotado: true,
}

gerarTag(tagRex)
gerarTag(tagBelinha)

function gerarTag(tag) {
    console.log(`Nome: ${tag.nome.toUpperCase()}`);
    console.log(`Idade: ${tag.idade} anos`);
    console.log(`Peso: ${tag.peso} kg`);
    console.log(`Raça: ${String(tag.raca).charAt(0).toUpperCase() + String(tag.raca).slice(1)}`);
    console.log(`Adotado: ${tag.isAdotado ? "Sim" : "Não"}`);
    console.log("===================================");
}

