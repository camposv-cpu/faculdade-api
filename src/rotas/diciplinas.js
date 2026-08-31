import { Router } from "express"
import * as controlador from '../controlador/diciplina-controlador.js'

const router = Router ()
 router.get('/diciplinas', controlador.listar)
 router.post('/diciplinas',controlador.criar)
 router.put('/diciplinas/:id' ,controlador.editar)
 router.delete('/diciplinas/:id', controlador.deletar)

 export const diciplinasRoutes = router