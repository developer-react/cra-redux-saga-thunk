// import {  takeLatest } from 'redux-saga/effects'
import { call, put, all } from 'redux-saga/effects'
import { actions as todoActions } from '../reducers/todo/index'
import { todo as todoApi } from '../../services/api/todo'

function* getListRequested() {
  const tasks = yield call(todoApi.getAll)
  yield put(todoActions.getAll(tasks))
}

// function* watchRequestGetList() {
//   yield takeLatest(todoActions.requestGetAll, getListRequested)
// }

function* todoSagas() {
  yield all([
    //watchRequestGetList()
    getListRequested()
  ])
}

export { todoSagas }
