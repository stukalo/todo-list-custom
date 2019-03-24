import strings from "../lang";
import config from "../config";
import { mockTodosStore } from './mockReducer';

const mockStore = {
    lang: {...strings[config.lang]},
    todos: [...mockTodosStore],
};

export default mockStore;