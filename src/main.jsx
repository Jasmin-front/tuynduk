import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import App from './App.jsx';
import store from './redux/store/store.js';
import i18n from './i18n';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <I18nextProvider i18n={i18n}>
                    <App />
                </I18nextProvider>
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
);
