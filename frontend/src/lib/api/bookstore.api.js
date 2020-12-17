/**
 * Book store API client
 * @module bookstore.api
 */

import { jsonCall } from './gateway'

export const listBooks = async () => await jsonCall('/book/list', 'GET')

export const searchBooks = async (filter) => await jsonCall('/book/search', 'GET', {
    filter
})

export const getBookByTitle = async (title) => await jsonCall('/book/get/:title', 'GET')

export const getBookByCode = async (code) => await jsonCall('/book/get/:code', 'GET')

/** 
 * @typedef {Object} Book
 * @property {string} code
 * @property {string} title
 * @property {string} author
 * @property {number} price
 */

export const sellBook = async (code, id, quantity) => await jsonCall('/book/sell', 'PUT', {
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