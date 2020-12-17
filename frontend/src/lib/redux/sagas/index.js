import { all, takeEvery, call, put } from 'redux-saga/effects'
import { login, logout } from '../../api/auth.api'
import { 
    listBooks, 
    searchBooks,
    getAuthors,
    getBookByTitle,
    getBooksByAuthor,
    getBookByCode,
    addBook, 
    updateBook, 
    sellBook, 
    getIncome 
} from '../../api/bookstore.api'
import actionKeys from '../actions/keys'

const actions = actionKeys()

function* loginCall(action) {
    const { username, password } = action.payload
    try {
        const resp = yield call(login, username, password)
        if (resp.success) {
            yield put({ type: actions.AUTH_LOGIN_SUCCESS, payload: resp })
        } else {
            yield put({ type: actions.AUTH_LOGIN_FAILURE, payload: resp })
        }
    } catch (err) {
        yield put({ type: actions.AUTH_LOGIN_FAILURE, payload: err })
    }
}

function* logoutCall() {
    const resp = yield call(logout)
    yield put({
        type: actions.AUTH_LOGOUT_SUCCESS,
        payload: resp,
    })
}

function* watchAuth() {
    yield takeEvery([actions.AUTH_LOGIN, actions.AUTH_LOGOUT], function* (
        action
    ) {
        switch (action.type) {
            case actions.AUTH_LOGIN:
                yield loginCall(action)
                break
            case actions.AUTH_LOGOUT:
                yield logoutCall()
                break
            default:
                break
        }
    })
}

function* listBooksCall(action) {
    try {
        const resp = yield call(listBooks)
        if(resp.success) {
            yield put({ type: actions.LIST_BOOKS_SUCCESS, payload: resp })
        } else {
            yield put({ type: actions.LIST_BOOKS_FAILURE, payload: resp})
        }
    } catch (error) {
        yield put({ type: actions.LIST_BOOKS_FAILURE, payload: {
            success: false,
            reason: error
        }})
    }
}

function* searchBooksCall(action) {
    try {
        const { filter } = action.payload
        const resp = yield call(searchBooks, filter)
        if(resp.success) {
            yield put({ type: actions.SEARCH_BOOK_SUCCESS, payload: resp })
        } else {
            yield put({ type: actions.SEARCH_BOOK_FAILURE, payload: resp })
        }
    } catch (error) {
        yield put({ type: actions.SEARCH_BOOKS_FAILURE, payload: {
            success: false,
            reason: error
        }})
    }
}

function* getBooksByAuthorCall(action) {
    try {
        const { author } = action.payload
        const resp = yield call(getBooksByAuthor, author)
        if(resp.success) {
            yield put({ type: actions.GET_BOOKS_BY_AUTHOR_SUCCESS, payload: resp })
        } else {
            yield put({ type: actions.GET_BOOKS_BY_AUTHOR_FAILURE, payload: resp })
        }
    } catch (error) {
        yield put({ type: actions.GET_BOOKS_BY_AUTHOR_FAILURE, payload: {
            success: false,
            reason: error
        }})
    }
}

function* getAuthorsCall(action) {
    try {
        const { author } = action.payload
        const resp = yield call(getAuthors, author)
        if(resp.success) {
            yield put({ type: actions.GET_AUTHORS_SUCCESS, payload: resp })
        } else {
            yield put({ type: actions.GET_AUTHORS_FAILURE, payload: resp })
        }
    } catch (error) {
        yield put({ type: actions.GET_AUTHORS_FAILURE, payload: {
            success: false,
            reason: error
        }})
    }
}

function* getBookCall(action) {
    try {

        const { id, code } = action.payload
        const resp = yield call(code ? getBookByCode : getBookByCode, code ?? id)
        if(resp.success) {
            yield put({ type: actions.GET_BOOK_SUCCESS, payload: resp })
        } else {
            yield put({ type: actions.GET_BOOK_FAILURE, payload: resp })
        }
        
    } catch (error) {
        yield put({ type: actions.GET_BOOK_FAILURE, payload: {
            success: false,
            reason: error,
        }})
    }
}

function* getIncomeCall(action) {
    try {
        const resp = yield call(getIncome)
        yield put({ type: resp.success ? actions.GET_INCOME_SUCCESS : actions.GET_INCOME_FAILURE, payload: resp })
    } catch (error) {
        yield put({ type: actions.GET_INCOME_FAILURE, payload: {
            success: false,
            reason: error,
        }})
    }
}

function* addBookCall(action) {
    try {
        const { book, quantity } = action.payload
        const resp = yield call(addBook, book, quantity)
        yield put({ type: resp.success ? actions.ADD_BOOK_SUCCESS : actions.ADD_BOOK_FAILURE, payload: resp })    
    } catch (error) {
        yield put({ type: actions.ADD_BOOK_FAILURE, payload: {
            success: false,
            reason: error,
        }})
    }
}

function* updateBookCall(action) {
    try {
        const { book, quantity } = action.payload
        const resp = yield call(updateBook, book, quantity)
        yield put({ type: resp.success ? actions.UPDATE_BOOK_SUCCESS : actions.UPDATE_BOOK_FAILURE, payload: resp })
    } catch (error) {
        yield put({ type: actions.UPDATE_BOOK_FAILURE, payload: {
            success: false,
            reason: error,
        }})
    }
}

function* sellBookCall(action) {
    try {
        const { code, id, quantity } = action.payload
        const resp = yield call(sellBook, code, id, quantity)
        yield put({ type: resp.success ? actions.SELL_BOOK_SUCCESS : actions.SELL_BOOK_FAILURE, payload: resp })
    } catch (error) {
        yield put({ type: actions.SELL_BOOK_FAILURE, payload: {
            success: false,
            reason: error,
        }})
    }
}

function* watchBookStore() {
    yield takeEvery([
        actions.LIST_BOOKS,
        actions.SEARCH_BOOK,
        actions.GET_BOOK,
        actions.GET_INCOME,
        actions.ADD_BOOK,
        actions.UPDATE_BOOK,
        actions.SELL_BOOK,
        actions.GET_AUTHORS,
    ], function* (action) {
        switch(action.type) {
            case actions.GET_AUTHORS:
                yield getAuthorsCall(action)
                break
            case actions.LIST_BOOKS:
                yield listBooksCall(action)
                break
            case actions.SEARCH_BOOK:
                yield searchBooksCall(action)
                break
            case actions.GET_BOOK:
                yield getBookCall(action)
                break
            case actions.GET_INCOME:
                yield getIncomeCall(action)
                break
            case actions.ADD_BOOK:
                yield addBookCall(action)
                break
            case actions.UPDATE_BOOK:
                yield updateBookCall(action)
                break
            case actions.SELL_BOOK:
                yield sellBookCall(action)
                break
            case actions.GET_BOOKS_BY_AUTHOR:
                yield getBooksByAuthorCall(action)
                break
        }
    })
}

export default function* rootSaga() {
    yield all([watchAuth(), watchBookStore()])
}
