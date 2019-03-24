import React from 'react';
import Header from '../header/Header';
import PropTypes from 'prop-types';
import './style.less';
import TodoList from "../todoList/TodoList";

const Container = props => {
    const {
        todos,
        strings,
        addTodo,
        updateTodo,
        toggleTodoEditing,
        toggleTodoCompleted,
    } = props;

    return (
        <div className={'main-container'}>
            <div className={'main-container_header'}>
                <Header
                    strings = {strings}
                    addTodo = {addTodo}
                />
            </div>
            <div className={'main-container_todo-list'}>
                <TodoList
                    todos = {todos}
                    updateTodo = {updateTodo}
                    toggleTodoEditing = {toggleTodoEditing}
                    toggleTodoCompleted = {toggleTodoCompleted}
                />
            </div>
        </div>
    );
};

Container.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        isEditing: PropTypes.bool.isRequired,
        isCompleted: PropTypes.bool.isRequired,
    })),
    strings: PropTypes.object.isRequired,
    addTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    toggleTodoEditing: PropTypes.func.isRequired,
    toggleTodoCompleted: PropTypes.func.isRequired,
};

export default Container;