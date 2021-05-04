const todo = {
  getAll: () => fetch('http://localhost:8091/todos').then(resp => resp.json())
}

export { todo };
