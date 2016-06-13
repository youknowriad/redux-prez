import { createStore } from "redux"

const initialState = [
  { id: 1, checked: false, text: "Prepare the slides" }
]

const reducer = (state, action) => {
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

// The render function
const render = state => {
  const todosHtml = state.map(todo => `
      <li>
        <input type="checkbox" ${todo.checked ? "checked" : ""} onChange="toggleTodo(${todo.id})" />
        ${todo.text}
      </li>
  `).join("")

  const todoInput = `
    Add Todo <input id="newTodo" type="text" />
    <input type="submit" onClick="addTodo()" />
  `

  return `<ul>${todosHtml}</ul> ${todoInput}`
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

window.addTodo = addTodo
window.toggleTodo = toggleTodo

export default element => {
  // Bootstrap
  store.subscribe(() => {
    element.innerHTML = render(store.getState())
  })

  element.innerHTML = render(store.getState())
}
