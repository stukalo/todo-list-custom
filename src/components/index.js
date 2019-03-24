import React, { Component } from 'react';
import config from '../config';
import strings from '../lang';
import Container from "./container/Container";
import rootReducer from '../reducers';
import * as actions from '../actions';
import * as selectors from '../selectors';

export default class StateContainer extends Component {
    state = {
        lang: strings[config.lang],
        todos: [],
    };

    dispatch = action => {
        this.setState((prevState, props) => rootReducer(prevState, action));
    };

    render() {
        const {
            state,
            dispatch,
        } = this;

        return (
            <Container
                todos = {selectors.getTodos(state)}
                strings = {selectors.getStrings(state)}
                addTodo = {payload => dispatch(actions.addTodo(payload))}
                updateTodo = {payload => dispatch(actions.updateTodo(payload))}
                toggleTodoEditing = {payload => dispatch(actions.toggleTodoEditing(payload))}
                toggleTodoCompleted = {payload => dispatch(actions.toggleTodoCompleted(payload))}
            />
        );
    }
}