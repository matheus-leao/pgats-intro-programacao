const nomePantera = "   Pantera Negra   ";
const nomePeggy = " peggy carter  ";
const nomeBelinha = "   Belinha  Bergamini ";


function limparNomeParaTag(nome) {
    let nomeTratado;
    let nomeNaTag;
    nomeTratado = nome.trim().toLowerCase().split(" ")
    nomeNaTag = String(nomeTratado[0]).charAt(0).toUpperCase() + String(nomeTratado[0]).slice(1)

    return nomeNaTag
}

console.log(`A funcao retornou: ${limparNomeParaTag(nomePantera)}  e deveria retornar Pantera`) // pantera
console.log(`A funcao retornou: ${limparNomeParaTag(nomePeggy)}  e deveria retornar Peggy`) // pantera
console.log(`A funcao retornou: ${limparNomeParaTag(nomeBelinha)}  e deveria retornar Belinha`) // pantera