const { get } = require('config')
const products = require('../models/products')

const addNewProducts = async (req, res, next ) => {
    console.log(req.body)

    const addProducts = new products(req.body)
    await addProducts.save()
    return res.status(201).json({ success : true })
}

const getProducts = async (req, res, next) => {

    const getProducts = await products.find().lean()
    return res.status(200).json({ data : getProducts })
}

const editProducts = async (req, res, next) => {
    const { id } = req.params
    const updateProducts = req.body
    const getProducts = await products.findByIdAndUpdate(id, updateProducts)
    return res.status(200).json({ success : true })
}

const deleteProducts = async (req, res, next) => {

    const { id } = req.params
    const deleteProducts = await products.findByIdAndRemove(id)
    return res.status(200).json({ success : true })
}

const getProductsByID = async (req, res, next) => {
    const { id } = req.params
    const productsByID = await products.findById(id)
    return res.status(200).json({ data : productsByID })
}

module.exports = {
    addNewProducts,
    getProducts,
    editProducts,
    deleteProducts,
    getProductsByID
}