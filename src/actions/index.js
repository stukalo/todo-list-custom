import * as constants from '../constants';

export const addTodo = payload => ({type: constants.ADD_TODO, payload});
export const updateTodo = payload => ({type: constants.UPDATE_TODO, payload});
export const changeLanguage = payload => ({type: constants.CHANGE_LANGUAGE, payload});
export const toggleTodoEditing = payload => ({type: constants.TOGGLE_TODO_EDITING, payload});
export const toggleTodoCompleted = payload => ({type: constants.TOGGLE_TODO_COMPLETED, payload});
