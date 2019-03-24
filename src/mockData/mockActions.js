export const addTodo = payload => ({type: 'ADD_TODO', payload});
export const updateTodo = payload => ({type: 'UPDATE_TODO', payload});
export const changeLanguage = payload => ({type: 'CHANGE_LANGUAGE', payload});
export const toggleTodoEditing = payload => ({type: 'TOGGLE_TODO_EDITING', payload});
export const toggleTodoCompleted = payload => ({type: 'TOGGLE_TODO_COMPLETED', payload});
