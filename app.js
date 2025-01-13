import express, { json } from "express"
import rotaLivro from "./rotas/livro.js"
import rotaFavorito from "./rotas/favoritos.js"
import cors from "cors"

const app = express()

app.use(json())

app.use(cors({origin: "*"}))

app.use('/livros', rotaLivro)
app.use('/favoritos', rotaFavorito)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
  })