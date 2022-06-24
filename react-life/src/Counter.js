import React, { Component } from "react";
import Number from './Number';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 15
        }

    }

    componentWillMount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log('render')
        return (
            <div>
                <div>hello world</div>
                <Number count={this.state.number} />
            </div>

        )
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    // 更新数据之前
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return false;
        // false的意思是 如果数据没有更新则下面的函数不会执行 提升性能
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    // render(){}

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    // 组件被销毁时
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
}

export default Counter;