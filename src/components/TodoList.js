import React, { Component } from 'react'
import { todoThunks } from '../store/thunks/todo'
import { connect } from 'react-redux'
import { actions as todoActions } from '../store/reducers/todo'

import './TodoList.css'

class TodoList extends Component {

  state = {
    task: '',
    tasksArray: []
  }

  componentDidMount() {
    // const { getAll } = this.props
    const { requestGetAll } = this.props
    // getAll()
    requestGetAll()
  }

  render() {
    const { tasksArray } = this.props
    const { task } = this.state

    return (
      <div className="todo">
        <form className="todo-form" onSubmit={this.handleSubmit}>
          <input 
            className="todo-field" 
            onChange={this.handleChange} 
            type="text" 
            value={task} 
          />
          <button className="todo-btn" type="submit">Add</button>
        </form>
        <table className="todo-table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { 
              tasksArray.map(item => (
                <tr key={ item.id }>
                  <td>{ item.task }</td>
                  <td>
                    <button 
                      className="todo-table-btn" 
                      onClick={ () => this.handleRemove(item) } 
                      type="button">Done
                    </button>
                  </td>
                </tr>
              )) 
            }
          </tbody>
        </table>
      </div>
    )
  }

  handleChange = event => this.setState({ task: event.target.value })

  handleRemove = (task) => this.props.remove(task)

  handleSubmit = event => {
    const { add } = this.props
    const { task } = this.state

    event.preventDefault()
    if (task === '') {
      return
    }
    let id =  '_' + Math.random().toString(36).substr(2, 9);
    add({ id: id, task:  task })
    this.setState({ task: '' })
  }
}

const mapStateToProps = (state) => ({ tasksArray: state.todoReducer.tasksArray})

const mapDispatchToProps = (dispatch) => ({
  add: taks => dispatch(todoActions.add(taks)),
  remove: taks => dispatch(todoActions.remove(taks)),
  getAll: () => dispatch(todoThunks.getAll()),
  requestGetAll: () => dispatch(todoActions.requestGetAll())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
