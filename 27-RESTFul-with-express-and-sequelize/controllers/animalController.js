'use strict';

const db = require('../models')

const Animal = db.animals

const addAnimal = async (req, res) => {
    let info = {
        nama: req.body.nama,
        namaSpesies: req.body.namaSpesies,
        umur: req.body.umur
    }
    const animal = await Animal.create(info)
    res.status(200).send(animal)
    console.log(animal)
}

const getAllAnimals = async (req, res) => {
    let animals = await Animal.findAll({})
    res.status(200).send(animals)
}

const getOneAnimal = async (req, res) => {
    let id = req.params.id
    let animal = await Animal.findOne({ where: { id: id }})
    res.status(200).send(animal)
}

const updateAnimal = async (req, res) => {
    let id = req.params.id
    const animal = await Animal.update(req.body, { where: { id: id }})
    res.status(200).send(animal)
}

const deleteAnimal = async (req, res) => {
    let id = req.params.id
    await Animal.destroy({ where: { id: id }} )
    res.status(200).send('Hewan was deleted successfully!')
}

module.exports = {
    addAnimal,
    getAllAnimals,
    getOneAnimal,
    updateAnimal,
    deleteAnimal
}