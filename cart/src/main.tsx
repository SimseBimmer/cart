import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CartContextProvider from './context/CartContextProvider'; // Correct import for CartContextProvider

ReactDOM.createRoot(document.getElementById('app')!).render(
    <React.StrictMode>
        <CartContextProvider>
            <App />
        </CartContextProvider>
    </React.StrictMode>
);