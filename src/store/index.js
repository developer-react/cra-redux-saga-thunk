import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import { todo as todoReducer} from './reducers/todo'
import { sagas } from './sagas'

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  todoReducer
})

const store = createStore(reducers, applyMiddleware(thunk, sagaMiddleware))

sagaMiddleware.run(sagas)

export { store }
