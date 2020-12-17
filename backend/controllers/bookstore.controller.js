const { Books, sequelize, Sequelize } = require('../models')
const lib = require('../lib/bookstore.lib')
const { Op } = Sequelize

const listBooks = async (req, res) =>  await lib.listBooks()

const searchBooks = async (req, res) => {
    const { filter } = req.query
    return await lib.searchBooks(filter)
}

const getBookByTitle = async (req, res) => {
    
    const { title } = req.params
    return await lib.getBookByTitle(title)
}

const getBookByCode = async (req, res) => {

    const { code } = req.params
    return await lib.getBookByCode(code)
}

const addBook = async (req, res) => {

    const {
        code,
        title,
        author,
        quantity
    } = req.body

    const book = {
        code,
        title,
        author,
        quantity,
    }

    return await lib.addBook(book)
}

const updateBook = async (req, res) => {
    const {
        code,
        title,
        author,
        quantity
    } = req.body

    const book = {
        code,
        title,
        author,
        quantity,
    }

    return await lib.updateBook(book)
}

const sellBook = async (req, res) => {

    const { code } = req.params
    return await lib.sellBook(code)
}

const deleteBook = async (req, res) => {

    const { code } = req.params
    return await lib.deleteBook(code)
}

const getAuthors = async (req, res) => {

    const { author } = req.query
    return await lib.getAuthors(author)
}

const getBooksByAuthor = async (req, res) => {
    const { author } = req.query
    return await lib.getBooksByAuthor(author)
}

module.exports = {
    listBooks,
    searchBooks,
    getBookByTitle,
    getBookByCode,
    addBook,
    updateBook,
    sellBook,
    deleteBook,
    getAuthors,
    getBooksByAuthor,
}