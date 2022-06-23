import React, { Component, Fragment } from "react";
import Child from "./child";

class Counter extends Component {

    constructor(props) {
        super(props);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.state = {
            counter: 1
        }
    }
    handleBtnClick() {
        const newCounter = this.state.counter + 1;
        this.setState(() => {
            return {
                counter: newCounter
            }
        }, () => {
            console.log(this.divElem.innerHTML);
        })
        // 上面这种写法可以保证下面拿到的数据是改变之后的
    }

    render() {
        // 当组件被创建时会执行一次
        // 当state或props数据变化时执行一次 这点可以优化
        return (
            <Fragment>
                <button
                    onClick={this.handleBtnClick}
                    ref={(button) => { this.buttonElem = button }}
                // 操作dom
                >
                    增加
                </button>
                <Child number={this.state.counter} />
                <div ref={(div) => { this.divElem = div }}>{this.state.counter}</div>
            </Fragment>
        )
    }
}

export default Counter;