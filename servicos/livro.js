import { readFileSync, writeFileSync } from "fs"

export function getTodosLivros() {
    return JSON.parse( readFileSync("livros.json") )
}
export function getLivroPorId(id) {
    const livros = JSON.parse(readFileSync("livros.json"))
    const livroFiltrado = livros.filter( livro => livro.id === id )
    return livroFiltrado
}
export function insereLivro(livroNovo) {
    const livros = JSON.parse(readFileSync("livros.json"))
    const novaListaDeLivros = [ ...livros, LivroNovo ]
    writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}
export function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findindex(livro => livro.id === id)

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }
    livrosAtuais[indiceModificado] = conteudoMudado
    writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}
export function deletaLivroPorId(id) {
    const livros = JSON.parse(readFileSync("livros.json"))

    const livrosFiltrados = livros.filter( livro => livro.id!== id )
    writeFileSync("livros.json", JSON.stringfy(livrosFiltrados))
}
// export default  {
//     getTodosLivros,
//     getLivroPorId,
//     insereLivro,
//     modificaLivro,
//     deletaLivroPorId
// }
