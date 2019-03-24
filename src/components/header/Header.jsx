import React from 'react';
import TextInput from '../textInput/TextInput';
import PropTypes from 'prop-types';
import './style.less';

const Header = props => {
    const {
        strings,
        addTodo,
    } = props;

    return (
        <div className={'header'}>
            <div className={'header_title title'}>
                <span className={'title_text'}>Todo</span>
            </div>
            <div className={'header_input'}>
                <TextInput
                    onSubmit = {addTodo}
                    placeholder={strings.todoInputPlaceholder}
                />
            </div>
        </div>
    );
};

Header.propTypes = {
    strings: PropTypes.object.isRequired,
    addTodo: PropTypes.func.isRequired,
};

export default Header;