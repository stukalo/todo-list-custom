import React from 'react';
import Checkbox from '../Checkbox';

describe('Checkbox snapshot', () => {
    it('should render correctly', () => {
        const props = {
            id: 1,
            onChange: () => {},
            isChecked: true,
        };

        const wrapper = shallow(
            <Checkbox {...props}/>,
        );

        expect(wrapper).matchSnapshot();
    });
});

describe('Checkbox methods', () => {
    let props;
    let sandbox;
    let component;

    before(() => {
        sandbox = sinon.createSandbox();
        props = {
            id: 1,
            onChange: sandbox.stub(),
            isChecked: false,
        };
        component = shallow(<Checkbox {...props}/>)
    });

    afterEach(() => {
        sandbox.resetHistory();
    });

    after(() => {
        sandbox.restore();
    });

    it('should call onChange when input changed', () => {
        component.find('.checkbox_input').simulate('change');
        sinon.assert.calledOnce(props.onChange);
    });

    it('should have not checked input', () => {
       assert.isFalse(component.find('.checkbox_input').props().checked);
    });

    it('should have checked input', () => {
        const localProps = {
            ...props,
            isChecked: true,
        };
        const localComponent = shallow(<Checkbox {...localProps}/>);

        assert.isTrue(localComponent.find('.checkbox_input').props().checked)
    });

    it('should have correct input id', () => {
       const actual = component.find('.checkbox_input').props().id;

       assert.strictEqual(actual, props.id);
    });
});