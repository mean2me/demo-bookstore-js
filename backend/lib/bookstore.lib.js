const { Books, sequelize, Sequelize } = require('../models')
const { Op } = Sequelize

const listBooks = async () =>  await Books.findAll()

const searchBooks = async (filter) => (await Books.findAll({
        where: {
            [Op.or]: [
                {
                    author: {
                        [Op.like]: filter ?`%${filter}%` : '%%'
                    }
                },
                {
                    title: {
                        [Op.like]: filter ?`%${filter}%` : '%%'
                    }
                },
            ]
        },
        order:[['title','ASC']]
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

    try {
        const result = await sequelize.transaction((async (t,) => {

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
        }))
        return result
    } catch (error) {
        throw new Error('Error in lib.addBook')
    }

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

    try {
        const result = await sequelize.transaction(async t => {
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
            })
        return result
    } catch (error) {
        throw new Error(`Error in lib.sellBook ${error.message}`)
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

const getAuthors = async (author) => {

    const filter = {
        ...author ? {
            where: {
                author: {
                    [Op.like]: `%${author}%`
                }
            }} : {},
        attributes: { exclude: ['id','title','code','quantity','createdAt','updatedAt']},
        group: ['author'],
        order: [['author', 'ASC']]
    }

    const authors = await Books.findAll(filter)
    return authors.map(row => row.author)
}

const getBooksByAuthor = async (author) => await Books.findAll({
    where: {
        author: {
            [Op.eq]: author
        }
    }
})

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