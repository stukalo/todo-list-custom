import * as constants from '../constants';
import mockStore from '../mockData/mockStore';

const initialState = mockStore.todos;

const todos = (state = initialState, action) => {
    const {
        type,
        payload,
    } = action;

    switch (type) {
        case constants.ADD_TODO: {
            return [
                {
                    id: state.length,
                    text: payload,
                    isEditing: false,
                    isCompleted: false,
                },
                ...state,
            ];
        }
        case constants.UPDATE_TODO: {
            const {id, value} = payload;

            return state.map(todo => todo.id === id ? {
                ...todo,
                text: value,
                isEditing: false,
            } : todo);
        }
        case constants.TOGGLE_TODO_EDITING: {
            return state.map(todo => todo.id === payload ? {
                ...todo,
                isEditing: !todo.isEditing,
            } : todo);
        }
        case constants.TOGGLE_TODO_COMPLETED: {
            return state.map(todo => todo.id === payload ? {
                ...todo,
                isCompleted: !todo.isCompleted,
            } : todo);
        }
        default:
            return state;
    }
};

export default todos;