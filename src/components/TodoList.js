import React, { Component } from 'react'
import { actions, store } from  '../store'

import './TodoList.css'

class TodoList extends Component {

  state = {
    task: '',
    tasksArray: []
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        tasksArray: store.getState().todoReducer.tasksArray
      })
    })
  }

  render() {
    const { task, tasksArray } = this.state

    return (
      <div className="todo">
        <form className="todo-form" onSubmit={this.handleSubmit}>
          <input className="todo-field" onChange={this.handleChange} type="text" value={task} />
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
                    <button className="todo-table-btn" onClick={ () => this.handleRemove(item) } type="button">Done</button>
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

  handleRemove = (task) => { store.dispatch(actions.remove(task))}

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.task === '') {
      return
    }
    let id =  '_' + Math.random().toString(36).substr(2, 9);
    store.dispatch(actions.add({ id: id, task:  this.state.task }))
    this.setState({ task: '' })
  }
}

export default TodoList
