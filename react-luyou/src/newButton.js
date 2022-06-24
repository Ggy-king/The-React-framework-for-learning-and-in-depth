import React, { Component, Fragment } from "react";
import { Button } from 'antd';
import { Link } from 'react-router-dom';

class NewButton extends Component {

    render() {
        return (
            <Fragment>
                {/* Link跳转可以带参数 */}
                {/* <Link to='/list?a=123'> */}
                <Link to='/list'>
                    <Button type="primary">按钮</Button>
                </Link>
            </Fragment>

        )
    }
}
export default NewButton;


