const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()

router.get('/niveis', NivelController.pegaTodosOsNiveis)
router.get('/niveis/:id', NivelController.pegaUmNivel)
router.post('/niveis', NivelController.criaNiveis)
router.put('/niveis/:id', NivelController.atualizaNiveis)
router.delete('/niveis/:id', NivelController.apagaNivel)
 

module.exports = router