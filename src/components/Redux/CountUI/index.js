import React from 'react';
import {Button} from 'antd';

import './index.css';


export default class CountUI extends React.Component {



    increment = () => {
        const {value} = this.selectNumber
        this.props.jia(value)
    }

    decrement = () => {
        const {value} = this.selectNumber
        this.props.jian(value)

    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        if(this.props.count %2 !==0){
            this.props.jia(value)
        }
    }

    incrementAsync = () => {
        const {value} = this.selectNumber
        this.props.asyncjia(value, 500)
    }


    render() {
        return (
<div>
    <h3>countUI当前求和是：  {this.props.count}</h3>
    <select   ref={ c => this.selectNumber=c }>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>&nbsp;
    <Button onClick={this.increment} type="primary">+ Button</Button>&nbsp;
    <Button onClick={this.decrement} type="primary">- Button</Button>&nbsp;
    <Button onClick={this.incrementIfOdd} type="primary">奇数再加</Button>&nbsp;
    <Button onClick={this.incrementAsync} type="primary">异步加</Button>&nbsp;

</div>
        )
    }


}



