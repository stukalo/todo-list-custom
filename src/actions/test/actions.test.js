import * as mockActions from '../../mockData/mockActions';
import * as actions from '../index';

describe('actions', () => {
    const paylad = {};

    it('addTodo', () => {
        assert.deepEqual(actions.addTodo(paylad), mockActions.addTodo(paylad));
    });

    it('updateTodo', () => {
        assert.deepEqual(actions.updateTodo(paylad), mockActions.updateTodo(paylad));
    });

    it('changeLanguage', () => {
        assert.deepEqual(actions.changeLanguage(paylad), mockActions.changeLanguage(paylad));
    });

    it('toggleTodoEditing', () => {
        assert.deepEqual(actions.toggleTodoEditing(paylad), mockActions.toggleTodoEditing(paylad));
    });

    it('toggleTodoCompleted', () => {
        assert.deepEqual(actions.toggleTodoCompleted(paylad), mockActions.toggleTodoCompleted(paylad));
    });
});