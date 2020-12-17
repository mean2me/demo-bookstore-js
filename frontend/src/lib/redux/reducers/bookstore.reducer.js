import actionKeys from '../actions/keys'

const keys = actionKeys()

const initialState = {
    books: [],
    filter: '',
    income: 0,
    error: null,
    message: null
}

export default (state = initialState, action) => {

    switch(action.type) {
        case keys.GET_INCOME_SUCCESS:
            state.income = action.payload?.data ?? 0
            break
        case keys.LIST_BOOKS_SUCCESS:
            state.books = action.payload?.data
            break
        case keys.SEARCH_BOOK:
            state.filter = action.payload?.filter
            break
        case keys.SEARCH_BOOK_SUCCESS:
            state.books = action.payload?.data
            break
        case keys.UPDATE_BOOK_SUCCESS:
        case keys.ADD_BOOK_SUCCESS:
            state.message = actions.payload?.message ?? 'Libro salvato con successo'
            break;
        case keys.SELL_BOOK_SUCCESS:
            state.message = actions.payload?.message ?? 'Libro venduto!'
            break
        case keys.GET_INCOME_FAILURE:
        case keys.LIST_BOOKS_FAILURE:
        case keys.SEARCH_BOOK_FAILURE:
        case keys.SELL_BOOK_FAILURE:
        case keys.ADD_BOOK_FAILURE:
        case keys.UPDATE_BOOK_FAILURE:
            state.error = action.payload?.reason
            break
    }

    return { ...state }
}