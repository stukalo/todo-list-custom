import React from 'react';
import Header from '../Header';
import TextInput from '../../textInput/TextInput';

const stringsMock = {
    todoInputPlaceholder: 'todoInputPlaceholder',
};

describe('Header snapshot', () => {
    it('should render correctly', () => {
        const props = {
            strings: stringsMock,
            addTodo: () => {},
        };

        const wrapper = shallow(
            <Header {...props}/>,
        );

        expect(wrapper).matchSnapshot();
    });
});

describe('Header methods', () => {
    let props;
    let sandbox;
    let component;

    before(() => {
        sandbox = sinon.createSandbox();

        props = {
           strings: stringsMock,
           addTodo: sandbox.stub(),
        };

        component = shallow(<Header {...props}/>);
    });

    afterEach(() => {
        sandbox.resetHistory();
    });

    after(() => {
        sandbox.restore();
    });

    it('should have TextInput with correct placeholder', () => {
        const textInput = component.find(TextInput);
        const expected = props.strings.todoInputPlaceholder;

        const actual = textInput.props().placeholder;

        assert.strictEqual(actual, expected);
    });

    it('should have TextInput with correct onSubmit property', () => {
        const textInput = component.find(TextInput);

        textInput.props().onSubmit();

        sinon.assert.calledOnce(props.addTodo);
    });
});