import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

const TextInput = props => {
    const {
        onSubmit,
        placeholder,
    } = props;

    const handleKeyDown = (event) => {
        if (event.which === 13) {
            const { value } = event.target;
            onSubmit(value);
            event.target.value = '';
        }
    };

    return (
        <div className={'text-input'}>
            <input type={'text'}
                   className={'text-input_input'}
                   onKeyDown={handleKeyDown}
                   placeholder={placeholder}
            />
        </div>
    );
};

TextInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
};

export default TextInput;