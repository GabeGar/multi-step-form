import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import MultiStepContextProvider from './context/MultiStepContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
    <React.StrictMode>
        <MultiStepContextProvider>
            <App />
        </MultiStepContextProvider>
    </React.StrictMode>
);
