import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage'; // Correct import for CartPage
import { CheckoutPage } from './pages/CheckoutPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="cart" element={<CartPage />} /> {/* Correct route for CartPage */}
                    <Route path="checkout" element={<CheckoutPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;