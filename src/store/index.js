import { combineReducers, createStore } from 'redux'

const INITIAL_STATE = {
  task: '',
  tasksArray: []
}

const actions = {
  add: task => ({
    payload: task,
    type: 'TODO_ADD'
  }),
  remove: task => ({
    payload: task,
    type: 'TODO_REMOVE'
  })
}

const todoReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action
  const { tasksArray } = state

  switch (type) {
    case 'TODO_ADD':
        return { ...state, tasksArray: [...tasksArray, payload] }
      break;
  
    case 'TODO_REMOVE':
        return { ...state, tasksArray: tasksArray.filter(item => item !== payload) }
        break;
    default:
      return state;
  }
}

const reducers = combineReducers({
  todoReducer
})

const store = createStore(reducers)

export { store, actions }