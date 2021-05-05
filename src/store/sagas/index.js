import { all } from 'redux-saga/effects'
import { todoSagas } from './todo'

function* sagas() {
  yield all([
    todoSagas()
  ])
}

export { sagas }
