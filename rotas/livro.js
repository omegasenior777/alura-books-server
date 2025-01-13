import { Router } from "express"
import { getLivros, getLivro, postLivro, pacthLivro, deleteLivro } from "../controladores/livro.js"

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/:id', pacthLivro)

router.delete('/:id', deleteLivro)

export default router