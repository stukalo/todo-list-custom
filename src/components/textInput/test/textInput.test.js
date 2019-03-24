import React from 'react';
import TextInput from '../TextInput';

describe('TextInput snapshot', () => {
    it('should render correctly', () => {
        const props = {
            onSubmit: () => {},
            placeholder: 'placeholder',
        };

        const wrapper = shallow(
            <TextInput {...props}/>,
        );

        expect(wrapper).matchSnapshot();
    });
});

describe('TextInput methods', () => {
    let props;
    let sandbox;
    let component;

   before(() => {
       sandbox = sinon.createSandbox();
       props = {
           onSubmit: sandbox.stub(),
           placeholder: 'placeholder',
       };
       component = shallow(<TextInput {...props}/>);
   });

   afterEach(() => {
       sandbox.resetHistory();
   });

   after(() => {
       sandbox.restore();
   });

   it('should call onSubmit when Enter keyDown', () => {
       const testValue = 'testValue';
       const mockEvent = {
           target: {
               value: testValue,
           },
           which: 13,
       };
       const input = component.find('.text-input_input');

       input.props().onKeyDown(mockEvent);

       sinon.assert.calledOnce(props.onSubmit);
       sinon.assert.calledWith(props.onSubmit, testValue);
       assert.strictEqual(mockEvent.target.value, '');
   });

    it('should not call onSubmit when not Enter keyDown', () => {
        const testValue = 'testValue';
        const mockEvent = {
            target: {
                value: testValue,
            },
            which: 0,
        };
        const input = component.find('.text-input_input');

        input.props().onKeyDown(mockEvent);

        assert.strictEqual(props.onSubmit.callCount, 0);
    });
});