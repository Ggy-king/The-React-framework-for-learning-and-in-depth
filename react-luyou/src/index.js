import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

import 'antd/dist/antd.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import NewButton from './newButton';
import NewList from './newList';
import Home from './home';


class Entry extends Component {
    render() {
        return (
            // 引入路由标签 限一个标签
            <BrowserRouter>
                <Routes>
                    {/* 路由 */}
                    {/* /list/123 则id = 123 */}
                    <Route path='/' element={<Home />} />
                    <Route path='/list' element={<NewList />} />
                    <Route path='/button' element={<NewButton />} />
                </Routes>
            </BrowserRouter>
        )
    }
}


// ReactDOM.render(<Entry />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Entry />
    </React.StrictMode>
);