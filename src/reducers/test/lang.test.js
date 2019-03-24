import reducer from '../lang';
import config from '../../config';
import strings from '../../lang';
import * as mockActions from '../../mockData/mockActions';

describe('lang reducer', () => {
    it('reducer initial state', () => {
        assert.deepEqual(reducer(void 0, {}), strings[config.lang]);
    });

    it('reducer not success action type', () => {
        assert.deepEqual(reducer(strings[config.lang], { type: 'wrong_action_type' }), strings[config.lang]);
    });

    it('reducer CHANGE_LANGUAGE', () => {
        assert.deepEqual(reducer(strings[config.lang], mockActions.changeLanguage('en')), strings['en']);
    });
});