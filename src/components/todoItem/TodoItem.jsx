import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.less';
import Checkbox from "../checkbox/Checkbox";

export default class TodoItem extends Component {
    static propTypes = {
        todo: PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            isEditing: PropTypes.bool.isRequired,
            isCompleted: PropTypes.bool.isRequired,
        }),
        updateTodo: PropTypes.func.isRequired,
        toggleTodoEditing: PropTypes.func.isRequired,
        toggleTodoCompleted: PropTypes.func.isRequired,
    };

    textAreaRef = React.createRef();

    componentDidMount () {
        const { resizeTextArea } = this;
        resizeTextArea();
    }

    componentDidUpdate (prevProps) {
        const { isEditing } = this.props.todo;

        if(isEditing !== prevProps.todo.isEditing){
            const { resizeTextArea } = this;
            resizeTextArea();
        }
    }

    resizeTextArea = () => {
        const {
            textAreaRef,
        } = this;

        if(textAreaRef && textAreaRef.current) {
            const { current } = textAreaRef;
            current.style.height = 0;
            current.style.height = `${current.scrollHeight}px`;
        }
    };

    handleTextAreaBlur = () => {
        const { id } = this.props.todo;
        const { updateTodo } = this.props;
        const { textAreaRef } = this;

        if(textAreaRef && textAreaRef.current) {
            const { value } = textAreaRef.current;
            updateTodo({
                id,
                value
            });
        }
    };


    render() {
        const {
            todo,
            toggleTodoEditing,
            toggleTodoCompleted,
        } = this.props;
        const {
            id,
            text,
            isEditing,
            isCompleted,
        } = todo;
        const {
            resizeTextArea,
            handleTextAreaBlur,
        } = this;

        return (
            <div className={'todo-item'}>
                <div className={'todo-item_text'}>
                    {isEditing ?
                        <textarea
                            ref={this.textAreaRef}
                            onBlur={handleTextAreaBlur}
                            onChange={resizeTextArea}
                            className={'todo-item_text-area'}
                            defaultValue={text}
                        /> :
                        <span children={text}
                              className={'todo-item_text-span'}
                              onDoubleClick={() => toggleTodoEditing(id)}
                        />
                    }
                </div>
                <div className={'todo-item_checkbox'}>
                    <Checkbox
                        id={id}
                        onChange={() => toggleTodoCompleted(id)}
                        isChecked={isCompleted}
                    />
                </div>
            </div>
        );
    }
};