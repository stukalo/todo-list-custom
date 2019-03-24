import React from 'react';
import TodoItem from '../TodoItem';
import Checkbox from "../../checkbox/Checkbox";

describe('TodoItem snapshot', () => {
    it('should render correctly', () => {
        const props = {
            todo: {
                id: 1,
                text: 'text',
                isEditing: false,
                isCompleted: false,
            },
            updateTodo: () => {},
            toggleTodoEditing: () => {},
            toggleTodoCompleted: () => {},
        };

        const wrapper = shallow(
            <TodoItem {...props}/>,
        );

        expect(wrapper).matchSnapshot();
    });
});

describe('TodoItem methods', () => {
    let props;
    let sandbox;
    let component;
    let mockTextAreaRef;

    before(() => {
       sandbox = sinon.createSandbox();
       props = {
           todo: {
               id: 1,
               text: 'text',
               isEditing: true,
               isCompleted: true,
           },
           updateTodo: sandbox.stub(),
           toggleTodoEditing: sandbox.stub(),
           toggleTodoCompleted: sandbox.stub(),
       };
       mockTextAreaRef = {
           current: {
               style: {
                   height: 10,
               },
               value: 'mockTextAreaValue',
               scrollHeight: 20,
           }
       };
       component = shallow(<TodoItem {...props}/>);
        sandbox.stub(component.instance(), 'textAreaRef').get(() => mockTextAreaRef);
        sandbox.stub(component.instance(), 'resizeTextArea');
    });

    afterEach(() => {
        sandbox.resetHistory();
    });

    after(() => {
       sandbox.restore();
    });

    it('should toggleTodoCompleted when Checkbox changed', () => {
        const checkbox = component.find(Checkbox);

        checkbox.props().onChange();

        sinon.assert.calledOnce(props.toggleTodoCompleted);
        sinon.assert.calledWith(props.toggleTodoCompleted, props.todo.id);
    });

    it('should resize text-area on componentDidMount', () => {
        component.instance().componentDidMount();

        sinon.assert.calledOnce(component.instance().resizeTextArea);
    });

    it('should resize text-area on componentDidUpdate', () => {
        const prevProps = {
            todo: {
                isEditing: false,
            },
        };

        component.instance().componentDidUpdate(prevProps);

        sinon.assert.calledOnce(component.instance().resizeTextArea);
    });

    it('should not resize text-area on componentDidUpdate', () => {
        component.instance().componentDidUpdate(props);

        assert.strictEqual(component.instance().resizeTextArea.callCount, 0);
    });

    it('should update todo on text-area blur', () => {
        const textArea = component.find('.todo-item_text-area');

        textArea.props().onBlur();

        sinon.assert.calledOnce(props.updateTodo);
        sinon.assert.calledWith(props.updateTodo, {
            id: props.todo.id,
            value: mockTextAreaRef.current.value
        });
    });

    it('should not update todo on text-area blur', () => {
        const textArea = component.find('.todo-item_text-area');
        const localSandbox = sinon.createSandbox();
        localSandbox.stub(mockTextAreaRef, 'current').get(() => null);

        textArea.props().onBlur();
        localSandbox.restore();

        assert.strictEqual(props.updateTodo.callCount, 0);
    });

    it('should resize text-area', () => {
        const localProps = {
            ...props,
        };

        const localComponent = shallow(<TodoItem {...localProps}/>);
        sandbox.stub(localComponent.instance(), 'textAreaRef').get(() => mockTextAreaRef);

        localComponent.instance().resizeTextArea();

        assert.strictEqual(mockTextAreaRef.current.style.height, '20px');
    });

    it('should toggleTodoEditing when text is doubleClicked', () => {
        const localProps = {
            ...props,
            todo: {
                ...props.todo,
                isEditing: false,
            },
        };
        const localComponent = shallow(<TodoItem {...localProps}/>);
        const text = localComponent.find('.todo-item_text-span');

        text.props().onDoubleClick();

        sinon.assert.calledOnce(localProps.toggleTodoEditing);
        sinon.assert.calledWith(localProps.toggleTodoEditing, localProps.todo.id);
    });
});