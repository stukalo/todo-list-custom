import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../todoItem/TodoItem';
import Scrollbar from 'react-scrollbars-custom';
import './style.less';

const TodoList = props => {
    const {
        todos,
        updateTodo,
        toggleTodoEditing,
        toggleTodoCompleted,
    } = props;

    return (
        <div className={'todo-list'}>
            <Scrollbar style = {{ width: '100%', height: '100%' }}>
                {todos.map(todo => (
                    <div key={todo.id}
                        className={'todo-list_item'}
                    >
                        <TodoItem
                            todo = {todo}
                            updateTodo = {updateTodo}
                            toggleTodoEditing = {toggleTodoEditing}
                            toggleTodoCompleted = {toggleTodoCompleted}
                        />
                    </div>

                ))}
            </Scrollbar>
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            isEditing: PropTypes.bool.isRequired,
            isCompleted: PropTypes.bool.isRequired,
        })
    ).isRequired,
    updateTodo: PropTypes.func.isRequired,
    toggleTodoEditing: PropTypes.func.isRequired,
    toggleTodoCompleted: PropTypes.func.isRequired,
};

export default TodoList;