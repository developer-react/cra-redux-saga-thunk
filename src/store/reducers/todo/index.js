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
  }),
  getAll: tasks => ({
    payload: tasks,
    type: 'TODO_GET_ALL'
  })
}

const todo = (state = INITIAL_STATE, action) => {
  const { payload, type } = action
  const { tasksArray } = state

  switch (type) {
    case 'TODO_ADD':
      return { ...state, tasksArray: [...tasksArray, payload] }
      break;
  
    case 'TODO_REMOVE':
      return { ...state, tasksArray: tasksArray.filter(item => item !== payload) }
      break;

      case 'TODO_GET_ALL':
        return { ...state, tasksArray: payload }
        break;
      
    default:
      return state;
  }
}

export { todo, actions }