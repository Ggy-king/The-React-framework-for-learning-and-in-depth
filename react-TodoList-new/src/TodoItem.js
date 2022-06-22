import React, { Component } from "react";

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this)
        
    }
    handleItemClick() {
        // 改变父组件中list的值 接收父方法
        this.props.deleteFunction(this.props.index)
    }
    
    render() {
        const { content } = this.props;
        return <li onClick={this.handleItemClick}>{content}</li>
    }
}

export default TodoItem;