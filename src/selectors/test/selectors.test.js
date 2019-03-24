import * as selectors from '../index';
import mockStore from '../../mockData/mockStore';
import * as mockSelectors from '../../mockData/mockSelectors';

describe('selectors', () => {
    it('getTodos', () => {
        assert.deepEqual(selectors.getTodos(mockStore), mockSelectors.getTodos(mockStore));
    });

    it('getStrings', () => {
        assert.deepEqual(selectors.getStrings(mockStore), mockSelectors.getStrings(mockStore));
    });
});
