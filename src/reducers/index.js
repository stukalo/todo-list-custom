import langReducer from './lang';
import todosReducer from './todos';

const rootReducer = (state, action) => {
    const {
        lang,
        todos,
    } = state;

    return {
        lang: langReducer(lang, action),
        todos: todosReducer(todos, action),
    }
};

export default rootReducer;