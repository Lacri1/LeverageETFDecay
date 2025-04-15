// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import QqqTqqqComparison from './qqq-tqqq-comparison.tsx';

const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <QqqTqqqComparison />
    </React.StrictMode>
);
