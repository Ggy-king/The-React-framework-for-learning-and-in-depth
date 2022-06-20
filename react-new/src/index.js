import React from 'react';
import ReactDOM from 'react-dom/client';
// 两个关键
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// 将引入的APP挂载到页面上