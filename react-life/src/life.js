import React, { Component } from "react";
import axios from 'axios';

class Life extends Component {

    handleClick() {
        console.log('window click');
    }

    componentWillMount() {
        window.addEventListener('click', this.handleClick)
    }

    render() {
        return (
            <div>hello world</div>
        )
    }

    // ajax数据最好放在componentDidMount里
    componentDidMount() {
        // promise存储的是ajax的过程
        const promise = axios.get('http://www.dell-lee.com/react/api/demo.json')
        promise.then((res) => {
            console.log('你好');
            console.log(res.data);
        })
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.handleClick)
    }

}

export default Life;