
const initialState = [
  {
    text: 'Chun Warayut React',
    id: 0,
    show: false
  }
]

export default (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state, {
            id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            text: action.text,
            show: action.show
          }
        ]
      case 'EDIT_TODO':
        return state.map(todo =>
          todo.id === action.id ?
            { ...todo, text: action.text, show: action.show } :
            todo
        )
      case 'DELETE_TODO':
        return state.filter(todo =>
          todo.id !== action.id
        )
      case 'SHOW_EDIT_TODO':
        return state.map(todo =>
          todo.id === action.id ?
            { ...todo, show: action.show } :
            todo
        )
      case 'HIDE_EDIT_TODO':
        return state.map(todo =>
          todo.id === action.id ?
            { ...todo, show: action.show } :
            todo
        )
      default:
        return state
    }
  }