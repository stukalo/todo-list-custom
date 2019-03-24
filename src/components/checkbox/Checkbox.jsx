import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

const Checkbox = props => {
    const {
        id,
        onChange,
        isChecked,
    } = props;

    return (
        <div className={'checkbox'}>
            <input id={id}
                   type={'checkbox'}
                   checked={isChecked}
                   onChange = {onChange}
                   className={'checkbox_input'}
            />
            <label
                htmlFor={id}
                className={'checkbox_label'}/>
        </div>
    );
};

Checkbox.propTypes = {
    id: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired,
};

export default Checkbox;