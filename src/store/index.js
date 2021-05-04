import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { todo as todoReducer} from './reducers/todo'

const reducers = combineReducers({
  todoReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export { store }
