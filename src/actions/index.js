export const increment = (score = 1) => ({
    type: 'INCREMENT',
    score
  })
  
  export const decrement = (score = -1) => ({
    type: 'DECREMENT',
    score
  })
export const addToDo = (text) => ({
    type: 'ADD_TODO',
    text,
    show: false
  })
  
  export const editToDo = (id, text) => ({
    type: 'EDIT_TODO',
    id,
    text,
    show: false
  })
  
  export const deleteToDo = (id) => ({
    type: 'DELETE_TODO',
    id
  })
  
  export const showBtnEditToDo = (id) => ({
    type: 'SHOW_EDIT_TODO',
    id,
    show: true
  })
  
  export const hideBtnEditToDo = (id) => ({
    type: 'HIDE_EDIT_TODO',
    id,
    show: false
  })