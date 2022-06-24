import React, { Component } from "react";

class Number extends Component {

    // 组件中props数据改变时 在子组件渲染之间执行
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
    }

    componentWillMount() {
        console.log('componentWillUnmount');
    }

    render() {
        return <div>{this.props.count}</div>
    }

}

export default Number;