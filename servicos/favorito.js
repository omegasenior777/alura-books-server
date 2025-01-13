import { readFileSync, writeFileSync } from "fs"

export function getTodosFavoritos() {
    return JSON.parse( readFileSync("favoritos.json") )
}

export function deletaFavoritoPorId(id) {
    const livros = JSON.parse( readFileSync("favoritos.json") )
    const livrosFiltrados = livros.filter( livro => livro.id !== id)    
    writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados))
}

export function insereFavorito(id) {
    const livros = JSON.parse( readFileSync("livros.json") )
    const favoritos = JSON.parse( readFileSync("favoritos.json") )

    const livroInserido = livros.find( livro => livro.id === id)
    const novaListaDeLivrosFavoritos = [...favoritos, livroInserido]
    writeFileSync("favoritos.json", JSON.stringify(novaListaDeLivrosFavoritos))
}

// export default {
//     getTodosFavoritos,
//     deletaFavoritoPorId,
//     insereFavorito
// }