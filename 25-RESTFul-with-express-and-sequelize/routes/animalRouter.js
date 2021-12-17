const animalController = require('../controllers/animalController.js')

const router = require('express').Router()


router.post('/hewan', animalController.addAnimal)
router.get('/hewan', animalController.getAllAnimals)
router.get('/hewan/:id', animalController.getOneAnimal)
router.put('/hewan/:id', animalController.updateAnimal)
router.delete('/hewan/:id', animalController.deleteAnimal)

module.exports = router