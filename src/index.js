import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoviesProvider } from './pages/Search/MoviesContext/MoviesContext';

ReactDOM.render(
    <MoviesProvider>
        <App />
    </MoviesProvider>,
    document.getElementById('root')
);

reportWebVitals();
