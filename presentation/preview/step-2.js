// A variable holding the state
let state = [
  { checked: false, text: "Prepare the slides" }
]

const reducer = (state, action) => {
  if (action.type === "add-todo") {
    return [
      ...state,
      action.payload
    ]
  }
}

// The render function
const render = state => {
  const todosHtml = state.map(todo =>
    `<li><input type="checkbox" ${todo.checked ? "checked" : ""} />${todo.text}</li>`
  ).join("")

  const todoInput = `
    Add Todo <input id="newTodo" type="text" />
    <input type="submit" />
  `

  return `<ul>${todosHtml}</ul> ${todoInput}`
}

export default element => {
  // Dispatch a new action
  const dispatch = action => {
    state = reducer(state, action)
    refresh()
  }

  // Bootstrap
  const refresh = () =>
    element.innerHTML = render(state)

  setTimeout(() => {
    dispatch({ type: "add-todo", payload: {
      checked: false, text: "Repeat the prez"
    } })
  }, 3000)

  refresh()
}
