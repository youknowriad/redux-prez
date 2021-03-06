// A variable holding the state
let state = [
  { checked: false, text: "Prepare the slides" }
]

const reducer = (state, action) => {
  if (action.type === "add-todo") {
    return [ ...state, action.payload ]
  }
  return state
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

const listeners = []
const subscribe = listener => {
  listeners.push(listener)
  return () => {
    const index = listeners.indexOf(listener)
    listeners.splice(index, 1)
  }
}

// Dispatch a new action
const dispatch = action => {
  state = reducer(state, action)
  listeners.forEach(listener => listener())
}

setTimeout(() => {
  const action = {
    type: "add-todo",
    payload: { checked: false, text: "Repeat the prez" }
  }
  dispatch(action)
}, 3000)

export default element => {
  // Bootstrap
  subscribe(() => {
    element.innerHTML = render(state)
  })

  element.innerHTML = render(state)
}
