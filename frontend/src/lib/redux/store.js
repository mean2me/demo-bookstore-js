import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { throttle } from 'lodash'

import authReducer from './reducers/auth.reducer'
import bookStoreReducer from './reducers/bookstore.reducer'
import rootSaga from './sagas'
import { loadState, saveState } from '../utils/local-storage-helper'
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    combineReducers({
        auth: authReducer,
        bookstore: bookStoreReducer,
    }),
    loadState(),
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)

// save full app's store to localStorage to keep state after reloading
store.subscribe(
    throttle(() => {
        const state = store.getState()
        saveState(state)
    }, 1000)
)

sagaMiddleware.run(rootSaga)

export default store
