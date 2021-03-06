
const initialState = [
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

const createStore = (reducer, initialState) => {
  let state = initialState
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

  const getState = () => state

  return { subscribe, dispatch, getState }
}

const store = createStore(reducer, initialState)

setTimeout(() => {
  const action = {
    type: "add-todo",
    payload: { checked: false, text: "Repeat the prez" }
  }
  store.dispatch(action)
}, 1000)


export default element => {
  // Bootstrap
  store.subscribe(() => {
    element.innerHTML = render(store.getState())
  })

  element.innerHTML = render(store.getState())
}
