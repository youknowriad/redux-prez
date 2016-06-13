import { createStore } from "redux"

const initialState = {
  todos: [
    { id: 1, checked: false, text: "Prepare the slides" }
  ],
  filterValue: "ALL"
}

const todos = (state, action) => {
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

let reducer = (state = {}, action) => {
  return {
    todos: todos(state.todos, action),
    filterValue: filterValue(state.filterValue, action)
  }
}

const combineReducers = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((previous, current) => {
      previous[current] = reducers[current](state[current], action)
      return previous
    }, {})
  }
}

reducer = combineReducers({ todos: todos, filterValue: filterValue })
reducer = combineReducers({ todos, filterValue })

const render = state => {
  let visibleTodos
  const filterValue = state.filterValue
  if (filterValue !== "ALL") {
    visibleTodos = state.todos.filter(todo => todo.checked === !!filterValue)
  } else {
    visibleTodos = store.getState().todos
  }

  const todosHtml = visibleTodos.map(todo => `
      <li>
        <input type="checkbox" ${todo.checked ? "checked" : ""} onChange="toggleTodo(${todo.id})" />
        ${todo.text}
      </li>
  `).join("")

  const todoInput = `
    Add Todo <input id="newTodo" type="text" />
    <input type="submit" onClick="addTodo()" />
  `

  const filters = [
    { value: "ALL", caption: "All" },
    { value: 1, caption: "Checked" },
    { value: 0, caption: "Unchecked" }
  ]
  const filterHtml = `
    <div>
      Filter :
      ${filters.map((filter, i) =>
        `<a onClick="filter(${i})">${filter.caption}</a>`
      ).join()}
    </div>
  `

  return `<ul>${todosHtml}</ul> ${todoInput} ${filterHtml}`
}

const store = createStore(reducer, initialState)

let id = 1
const addTodo = () => {
  const text = document.getElementById("newTodo").value
  id++
  const action = {
    type: "add-todo",
    payload: { id, checked: false, text }
  }
  store.dispatch(action)
}

const toggleTodo = id => {
  const action = {
    type: "toggle-todo",
    payload: id
  }
  store.dispatch(action)
}

const filter = i => {
  const filters = [
    { value: "ALL", caption: "All" },
    { value: 1, caption: "Checked" },
    { value: 0, caption: "Unchecked" }
  ]
  const action = {
    type: "filter",
    payload: filters[i].value
  }
  store.dispatch(action)
}

// Temporary
window.addTodo = addTodo
window.toggleTodo = toggleTodo
window.filter = filter

export default element => {
  // Bootstrap
  store.subscribe(() => {
    element.innerHTML = render(store.getState())
  })

  element.innerHTML = render(store.getState())
}
