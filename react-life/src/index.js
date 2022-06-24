import React from 'react';
import ReactDOM from 'react-dom/client';

import Counter from './Counter';
import Life from './life'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Counter />
        <Life />
    </React.StrictMode>
);