import config from '../config';
import strings from '../lang';
import {
    CHANGE_LANGUAGE
} from '../constants';

const initialState = strings[config.lang];

const language = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return strings[action.payload];
        default:
            return state;
    }
};

export default language;