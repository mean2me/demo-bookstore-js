/**
 * Book store API client
 * @module bookstore.api
 */

import { jsonCall } from './gateway'

export const listBooks = async () => await jsonCall('/book/get/list', 'GET')

export const searchBooks = async (filter) => await jsonCall('/book/search', 'GET', {
    filter
})

export const getBookByTitle = async (title) => await jsonCall(`/book/get/title/${encodeURIComponent(title)}`, 'GET')

export const getBookByCode = async (code) => await jsonCall(`/book/get/code/${encodeURIComponent(code)}`, 'GET')

/** 
 * @typedef {Object} Book
 * @property {string} code
 * @property {string} title
 * @property {string} author
 * @property {number} price
 */

export const sellBook = async (code, id, quantity) => await jsonCall(`/book/sell/${encodeURIComponent(code)}`, 'PUT', {
    code,
    id,
    quantity,
})

/**
 * Adds a book in the inventory
 * @param {Book} book 
 * @param {number} quantity
 */
export const addBook = async (book, quantity) => await jsonCall('/book', 'POST', {
    ...book,
    quantity,
})

/**
 * Updates a book in the inventory
 * @param {Book} book 
 * @param {number} quantity
 */
export const updateBook = async (book) => await jsonCall('/book', 'PUT', {
    ...book,
    quantity,
})

/**
 * Gets book selling total income
 */
export const getIncome = async () => await jsonCall('/book/income', 'GET')

/**
 * Gets a list of authors available
 * 
 * @param {string} author optional text filter
 */
export const getAuthors = async (author) => await jsonCall(`/authors/list${author ? '?author=' + encodeURIComponent(author) : ''}`, 'GET')

/**
 * Gets a lits of book for a specific author
 * 
 * @param {string} author 
 */
export const getBooksByAuthor = async (author) => await jsonCall(`/book/get/author/${encodeURIComponent(author)}`, 'GET')