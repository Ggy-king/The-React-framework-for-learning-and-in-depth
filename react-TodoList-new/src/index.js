import React from 'react';
import ReactDOM from 'react-dom/client';
// 新版特性
import TodoList from './TodoList';
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <TodoList />
    </React.StrictMode>
);