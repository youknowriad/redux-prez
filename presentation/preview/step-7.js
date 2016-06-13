import React from "react"
import { render } from "react-dom"
import { createStore, combineReducers } from "redux"

const initialState = {
  todos: [
    { id: 1, checked: false, text: "Prepare the slides" }
  ],
  filterValue: "ALL"
}

const todos = (state = {}, action) => {
  switch (action.type) {
    case "add-todo":
      return [ ...state, action.payload ]
    case "toggle-todo":
      const todoIndex = state.findIndex(todo => todo.id === action.payload)
      const todo = state[todoIndex]
      return [
        ...state.slice(0, todoIndex),
        { ...todo, checked: !todo.checked },
        ...state.slice(todoIndex + 1)
      ]
    default:
      return state
  }
}

const filterValue = (state = "ALL", action) => {
  if (action.type === "filter") {
    return action.payload
  }

  return state
}

const reducer = combineReducers({ todos, filterValue })

const store = createStore(reducer, initialState)

const TodoList = () => {
  let visibleTodos
  const filterValue = store.getState().filterValue
  if (filterValue !== "ALL") {
    visibleTodos = store.getState().todos
      .filter(todo => todo.checked === !!filterValue)
  } else {
    visibleTodos = store.getState().todos
  }

  const toggleTodo = id => {
    const action = {
      type: "toggle-todo",
      payload: id
    }
    store.dispatch(action)
  }

  return (
    <div>
      {visibleTodos.map(todo =>
          <li key={todo.id}>
            <input type="checkbox" checked={todo.checked} onChange={() => toggleTodo(todo.id)} />
            {todo.text}
          </li>
      )}
    </div>
  )
}

const FilterLinks = () => {
  const filters = [
    { value: "ALL", caption: "All" },
    { value: 1, caption: "Checked" },
    { value: 0, caption: "Unchecked" }
  ]

  const filter = filterValue => {
    const action = {
      type: "filter",
      payload: filterValue
    }
    store.dispatch(action)
  }

  return (
    <div>
      <span>Filter :</span>
      {filters.map(f =>
        <a key={f.value} onClick={() => filter(f.value)}>
          {f.caption}{' '}
        </a>
      )}
    </div>
  )
}

let id = 1

class NewTodoForm extends React.Component {

  addTodo() {
    id++
    const text = this.refs.newTodo.value
    const action = {
      type: "add-todo",
      payload: { id, checked: false, text }
    }
    store.dispatch(action)
  }

  render() {
    return (
      <div>
        Add Todo <input ref="newTodo" type="text" />
        <input type="submit" onClick={() => this.addTodo()} />
      </div>
    )
  }
}

const App = () => (
  <div>
    <TodoList />
    <NewTodoForm />
    <FilterLinks />
  </div>
)

export default element => {
  const refresh = () => {
    render(<App/>, element)
  }

  store.subscribe(() => {
    refresh()
  })

  refresh()
}
