import React from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'

import './index.css'

export default class Header extends React.Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }


    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text"
                       placeholder="please input and type enter"/>
            </div>
        )
    }


    handleKeyUp = (e) => {
        const {keyCode, target} = e
        if (keyCode !== 13) {
            return;
        }
        const todo = {
            id: nanoid(),
            name: target.value,
            done: false
        }
        this.props.addTodo(todo)

    }
}




