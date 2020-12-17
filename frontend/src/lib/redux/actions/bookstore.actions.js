import actionKeys from './keys'

const keys = actionKeys()
/** 
 * @typedef {Object} Book
 * @property {string} code
 * @property {string} title
 * @property {string} author
 * @property {number} price
 */

export const listBooks = () => ({
    type: keys.LIST_BOOKS,
})

/**
 * 
 * @param {string} filter
 */
export const searchBooks = (filter) => ({
    type: keys.SEARCH_BOOK,
    payload: {
        filter
    }
})

/**
 * 
 * @param {string} id 
 * @param {string} code 
 */
export const getBook = (id, code) => ({
    type: keys.GET_BOOK,
    payload: {
        id,
        code
    }
})

/**
 * 
 * @param {string} id 
 * @param {number} quantity
 */
export const sellBook = (id, quantity) => ({
    type: keys.SELL_BOOK,
    payload: {
        id,
        quantity
    }
})

/**
 * @param {Book} book
 * @param {number} quantity
 */
export const addBook = (book) => ({
    type: keys.ADD_BOOK,
    payload: {
        ...book,
        quantity,
    }
})

/**
 * @param {Book} book
 * @param {number} quantity
 */
export const updateBook = (book) => ({
    type: keys.UPDATE_BOOK,
    payload: {
        ...book,
        quantity,
    }
})

/**
 * @param void
 */
export const getIncome = () => ({
    type: keys.GET_INCOME,
})

export const getBookByTitle = (title) => ({
    type: keys.GET_BOOK_BY_TITLE,
    payload: {
        title,
    }
})

export const getBookByCode = (code) => ({
    type: keys.GET_BOOK_BY_CODE,
    payload: {
        code,
    }
})

export const getBooksByAuthor = (author) => ({
    type: keys.GET_BOOKS_BY_AUTHOR,
    payload: {
        author,
    }
})

export const getAuthors = (author) => ({
    type: keys.GET_AUTHORS,
    payload: {
        author,
    }
})