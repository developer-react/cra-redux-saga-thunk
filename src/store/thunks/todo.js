import { todo } from '../../services/api/todo/index'
import {  actions as todoActions } from '../reducers/todo'

const todoThunks = {
  getAll: () => dispatch => {
    todo.getAll().then(tasks => dispatch(todoActions.getAll(tasks)))
  }
}

export { todoThunks }
