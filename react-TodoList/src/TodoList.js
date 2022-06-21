import React, { Component, Fragment } from "react";

class TodoList extends Component {

    constructor(props) {
        // 接收props参数
        super(props);
        // 传递给它的基类构造函数

        this.handleInputChance = this.handleInputChance.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        // 只执行一遍 不造成浪费

        this.state = {
            // 定义数据只能传给state里
            inputValue: '',
            list: []
        }
    }

    handleInputChance(e) {
        // console.log(e.target);
        this.setState({
            inputValue: e.target.value
        })

    }
    handleKeyUp(e) {
        if (e.keyCode === 13 && e.target.value !== '') {
            // 判断是否为回车
            const list = [...this.state.list, this.state.inputValue];
            // 展开合并list数据
            this.setState({
                // 传入
                list: list,
                // 一样可以简写一个就行
                inputValue: ''
            })
        }
    }

    handleItemClick(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({ list })
    }

    getListItem() {
        return this.state.list.map((value, index) => {
            // map是循环的意思
            return <li
                key={index}
                onClick={this.handleItemClick.bind(this, index)}
                dangerouslySetInnerHTML={{ __html: value }}
                // 可以不转义 危险的处理html标签
            >
                {/* {value} */}
            </li>
            // 要有key值 使性能更高
            // 结果需要return出来
        })

    }
    render() {
        return (
            <Fragment>
                <label htmlFor="myinput">请输入内容: </label>
                <input
                    id="myinput"
                    className="input"
                    value={this.state.inputValue}
                    onChange={this.handleInputChance}
                    // 绑定组件this
                    onKeyUp={this.handleKeyUp}
                />
                <ul>
                    {/* 循环等语句需要使用花括号包裹  */}
                    {this.getListItem()}

                </ul>


            </Fragment>
        );
    }
}

export default TodoList;