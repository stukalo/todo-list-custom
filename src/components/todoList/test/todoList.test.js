import React from 'react';
import TodoList from '../TodoList';
import TodoItem from "../../todoItem/TodoItem";

describe('TodoList snapshot', () => {
    it('should render correctly', () => {
        const props = {
            todos: [{
                id: 1,
                text: 'text',
                isEditing: false,
                isCompleted: false,
            }],
            updateTodo: () => {},
            toggleTodoEditing: () => {},
            toggleTodoCompleted: () => {},
        };

        const wrapper = shallow(
            <TodoList {...props}/>,
        );

        expect(wrapper).matchSnapshot();
    });
});

describe('TodoList methods', () => {
    let props;
    let sandbox;
    let component;

    before(() => {
        sandbox = sinon.createSandbox();
        props = {
            todos: [{
                id: 1,
                text: 'text',
                isEditing: false,
                isCompleted: false,
            }],
            updateTodo: sandbox.stub(),
            toggleTodoEditing: sandbox.stub(),
            toggleTodoCompleted: sandbox.stub(),
        };
        component = shallow(<TodoList {...props}/>);
    });

    afterEach(() => {
        sandbox.resetHistory();
    });

    after(() => {
        sandbox.restore();
    });

    it('should pass todo as prop correctly', () => {
        const todoItem = component.find(TodoItem);

        assert.deepEqual(todoItem.props().todo, props.todos[0]);
    });

    it('should pass updateTodo as prop correctly', () => {
       const todoItem = component.find(TodoItem);

       todoItem.props().updateTodo();

       sinon.assert.calledOnce(props.updateTodo);
    });

    it('should pass toggleTodoEditing  as prop correctly', () => {
        const todoItem = component.find(TodoItem);

        todoItem.props().toggleTodoEditing();

        sinon.assert.calledOnce(props.toggleTodoEditing);
    });

    it('should pass toggleTodoCompleted   as prop correctly', () => {
        const todoItem = component.find(TodoItem);

        todoItem.props().toggleTodoCompleted();

        sinon.assert.calledOnce(props.toggleTodoCompleted );
    });
});