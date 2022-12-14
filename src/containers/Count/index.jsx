import React from 'react';
import {Button} from 'antd';


import {connect} from 'react-redux'
import {
    inc,
    dec,
    incAsync
} from "../../redux/actions/count";

import './index.css';

class CountUI extends React.Component {
    increment = () => {
        const {value} = this.selectNumber
        this.props.inc(value)
    }

    decrement = () => {
        const {value} = this.selectNumber
        this.props.dec(value)
    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.inc(value)
        }
    }

    incrementAsync = () => {
        const {value} = this.selectNumber
        this.props.incAsync(value, 500)
    }


    render() {
        return (
            <div>
                <h3>countUI当前求和是： {this.props.count}, 人数: {this.props.personsLength}</h3>
                <select ref={c => this.selectNumber = c}>
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


const CountContainer = connect(
    state => ({
        count: state.count,
        personsLength: state.persons.length,
    }),
    {
        inc, //对象 key 和value 重名了，触发简写方式
        dec,
        incAsync,
    }
)(CountUI)


export default CountContainer


/*

一个组件要和redux打交道要经过那几步？
1.定义好UI组件，不暴露
2.引入 connect 生成一个组件容器，并暴露，写法如下
connect（
    state => ( {key: value} ) , // 映射状态
    {key: xxxAction} ,          // 映射操作状态的方法
）（UI组件类名）
3.在 UI 组件 中通过 this.prop.xxx 读取和操作状态。

 */


