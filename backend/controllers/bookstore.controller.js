const { Books, sequelize, Sequelize } = require('../models')
const { Op } = Sequelize

const listBooks = async () =>  await Books.findAll()

const searchBooks = async (filter) => (await Books.findAll({
        where: {
            [Op.or]: [
                {
                    author: {
                        [Op.like]: `%${filter}%`
                    }
                },
                {
                    title: {
                        [Op.like]: `%${filter}%`
                    }
                },
            ]
        }
    }))

const getBookByTitle = async (title) => await Books.findOne({
    where: {
        title: {
            [Op.eq]: title
        }
    }
})

const getBookByCode = async (code) => await Books.findOne({
    where: {
        code: {
            [Op.eq]: code
        }
    }
})

const addBook = async (book) => {
    if(!book.code) throw new Error('Code is required to add a new book')
    const count = Books.count({
        where: {
            code: {
                [Op.eq]: book.code
            }
        }
    })
    if(count > 0) throw new Error('Book already exists')
    return await Books.create({
        ...book
    })
}

const updateBook = async (book) => {
    if(!book.code) throw new Error('Code is required to update a book')
    return await Books.update({
            ...book
        }, {
            where: {
                code:book.code,
            }
        })
}

const sellBook = async (code) => {

    const book = await Books.findOne({
        where: {
            code: {
                [Op.eq]: code
            }
        }
    })

    if(book && book.quantity > 0) {
        await book.decrement('quantity')
        return true
    } else {
        throw new Error('Books is not available')
    }
}

const deleteBook = async (code) => {

    return await Books.destroy({
        where: {
            code: {
                [Op.eq]: code
            }
        }
    })
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
}