import reducer from '../todos';
import {
    mockTodosStore,
    mockAddTodosResult,
    mockAddTodoPayload,
    mockUpdateTodoResult,
    mockUpdateTodoPayload,
    mockTodoEditingResult,
    mockTodoEditingPayload,
    mockTodoCompletedResult,
    mockTodoCompletedPayload,
} from '../../mockData/mockReducer';
import * as mockActions from '../../mockData/mockActions';
import { deepCopy } from '../../utils/deepCopy';

describe('todos reducer', () => {
    let state;

    beforeEach(() => {
        state = deepCopy(mockTodosStore);
    });

    it('reducer initial state', () => {
        assert.deepEqual(reducer(void 0, {}), state);
    });

    it('reducer not success action type', () => {
        assert.deepEqual(reducer(state, { type: 'wrong_action_type' }), state);
    });

    it('reducer ADD_TODO', () => {
        assert.deepEqual(reducer(state, mockActions.addTodo(mockAddTodoPayload)), mockAddTodosResult);
    });

    it('reducer UPDATE_TODO', () => {
        assert.deepEqual(reducer(state, mockActions.updateTodo(mockUpdateTodoPayload)), mockUpdateTodoResult)
    });

    it('reducer TOGGLE_TODO_EDITING', () => {
       assert.deepEqual(reducer(state, mockActions.toggleTodoEditing(mockTodoEditingPayload)), mockTodoEditingResult)
    });

    it('reducer TOGGLE_TODO_COMPLETED', () => {
        assert.deepEqual(reducer(state, mockActions.toggleTodoCompleted(mockTodoCompletedPayload)), mockTodoCompletedResult)
    });
});
