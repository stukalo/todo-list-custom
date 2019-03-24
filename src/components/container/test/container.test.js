import React from 'react';
import Container from '../Container';
import Header from '../../header/Header';
import TodoList from '../../todoList/TodoList';

describe('Container snapshot', () => {
    it('should render correctly', () => {
        const props = {
            todos: [],
            strings: {},
            addTodo: () => {},
            updateTodo: () => {},
            toggleTodoEditing:  () => {},
            toggleTodoCompleted: () => {},
        };

        const wrapper = shallow(
            <Container {...props}/>,
        );

        expect(wrapper).matchSnapshot();
    });
});

describe('Container methods', () => {
    let props;
    let component;

    before(() => {
        props = {
            todos: [],
            strings: {},
            addTodo: () => {},
            updateTodo: () => {},
            toggleTodoEditing:  () => {},
            toggleTodoCompleted: () => {},
        };

        component = shallow(<Container {...props}/>)
    });

    it('should have one Header', () => {
        const actual = component.find(Header).length;
        assert.strictEqual(actual, 1);
    });

    it('should have one TodoList', () => {
       const actual = component.find(TodoList).length;
       assert.strictEqual(actual, 1);
    });
});