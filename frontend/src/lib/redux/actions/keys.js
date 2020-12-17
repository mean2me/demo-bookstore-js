'use strict'

const keys = {}
const labels = [
    'AUTH_LOGIN','AUTH_LOGIN_SUCCESS','AUTH_LOGIN_FAILURE',
    'AUTH_LOGOUT','AUTH_LOGOUT_SUCCESS','AUTH_LOGOUT_FAILURE',
    'LIST_BOOKS', 'LIST_BOOK_SUCCESS', 'LIST_BOOK_FAILURE',
    'SEARCH_BOOK', 'SEARCH_BOOK_SUCCESS', 'SEARCH_BOOK_FAILURE',
    'GET_BOOK', 'GET_BOOK_SUCCESS', 'GET_BOOK_FAILURE',
    'SELL_BOOK', 'SELL_BOOK_SUCCESS', 'SELL_BOOK_FAILURE',
    'ADD_BOOK', 'ADD_BOOK_SUCCESS', 'ADD_BOOK_FAILURE',
    'UPDATE_BOOK', 'UPDATE_BOOK_SUCCESS', 'UPDATE_BOOK_FAILURE',
    'GET_INCOME', 'GET_INCOME_SUCCESS', 'GET_INCOME_FAILURE',
    'GET_BOOK_BY_TITLE','GET_BOOK_BY_TITLE_SUCCESS', 'GET_BOOK_BY_TITLE_FAILURE',
    'GET_BOOK_BY_CODE','GET_BOOK_BY_CODE_SUCCESS','GET_BOOK_BY_CODE_FAILURE',
    'GET_BOOKS_BY_AUTHOR','GET_BOOKS_BY_AUTHOR_SUCCESS','GET_BOOKS_BY_AUTHOR_FAILURE',
    'GET_AUTHORS','GET_AUTHORS_SUCCESS','GET_AUTHORS_FAILURE',
]
const propertyModel = {
        configurable: false,
        enumerable: true,
        writable: false,
    }

Object.defineProperties(keys, {
    ...labels
        .map(label => ({[label]:{...propertyModel, value: label}}))
        .reduce((prev, curr,) => ({...prev, ...curr}), {})
})

/**
 * @typedef {Object} ActionKey
 * @property {string} AUTH_LOGIN
 * @property {string} AUTH_LOGIN_SUCCESS
 * @property {string} AUTH_LOGIN_FAILURE
 * @property {string} AUTH_LOGOUT
 * @property {string} AUTH_LOGOUT_SUCCESS
 * @property {string} AUTH_LOGOUT_FAILURE
 * @property {string} LIST_BOOKS
 * @property {string} LIST_BOOKS_SUCCESS
 * @property {string} LIST_BOOKS_FAILURE
 * @property {string} SEARCH_BOOK
 * @property {string} SEARCH_BOOK_SUCCESS
 * @property {string} SEARCH_BOOK_FAILURE
 * @property {string} GET_BOOK
 * @property {string} GET_BOOK_SUCCESS
 * @property {string} GET_BOOK_FAILURE
 * @property {string} SELL_BOOK
 * @property {string} SELL_BOOK_SUCCESS
 * @property {string} SELL_BOOK_FAILURE
 * @property {string} ADD_BOOK
 * @property {string} ADD_BOOK_SUCCESS
 * @property {string} ADD_BOOK_FAILURE
 * @property {string} UPDATE_BOOK
 * @property {string} UPDATE_BOOK_SUCCESS
 * @property {string} UPDATE_BOOK_FAILURE
 * @property {string} GET_INCOME
 * @property {string} GET_INCOME_SUCCESS
 * @property {string} GET_INCOME_FAILURE
 * 
 * @property {string} GET_BOOK_BY_TITLE
 * @property {string} GET_BOOK_BY_TITLE_SUCCESS
 * @property {string} GET_BOOK_BY_TITLE_FAILURE
 * 
 * @property {string} GET_BOOK_BY_CODE
 * @property {string} GET_BOOK_BY_CODE_SUCCESS
 * @property {string} GET_BOOK_BY_CODE_FAILURE
 * 
 * @property {string} GET_BOOKS_BY_AUTHOR
 * @property {string} GET_BOOKS_BY_AUTHOR_SUCCESS
 * @property {string} GET_BOOKS_BY_AUTHOR_FAILURE
 * 
 * @property {string} GET_AUTHORS
 * @property {string} GET_AUTHORS_SUCCESS
 * @property {string} GET_AUTHORS_FAILURE
 * 
 * 
 * 
 * @return {ActionKey}
 */
export default () => keys