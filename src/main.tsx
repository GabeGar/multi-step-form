import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import MediaQueryContextProvider from './context/MediaQueryContext';
import MultiStepContextProvider from './context/MultiStepContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
    <React.StrictMode>
        <MediaQueryContextProvider>
            <MultiStepContextProvider>
                <App />
            </MultiStepContextProvider>
        </MediaQueryContextProvider>
    </React.StrictMode>,
);
