import React, { Component, Fragment } from "react";
import { Divider, List, Typography } from 'antd';


class NewList extends Component {

    render() {

        // 获取其他页面传过来的值 只是网址上的
        // console.log(this.props.match.params.id);

        const data = [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
        ];

        return (
            <Fragment>
                <Divider orientation="left">Default Size</Divider>
                <List
                    style={{
                        marginLeft: 20,
                        marginTop: 20,
                        marginRight: 20,
                    }}
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                            <Typography.Text mark>[ITEM]</Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </Fragment>

        )
    }
}
export default NewList;