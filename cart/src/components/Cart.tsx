import { useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';
import '../styles/Cart.scss'; 


export const Cart = () => {
    const { cartData, removeFromCart, clearCart, addToCart } = useContext(CartContext);

    return (
        <div>
            <h2>Cart</h2>
            <div>
                {cartData.length === 0 ? (
                    <p>The cart is empty.</p>
                ) : (
                    <ul>
                        {cartData.map((product) => (
                            <li key={product.id}>
                                <h5>{product.title}</h5>
                                <p>Price: {product.price.toFixed(2)} Dkk</p>
                                <p>Total: {product.price * product.quantity} Dkk</p>
                                <p>Quantity: {product.quantity}</p>
                                <button onClick={() => addToCart(product)}>Increase</button> {/* Increase quantity */}
                                <button onClick={() => removeFromCart(product.id)}>Decrease</button> {/* Decrease quantity */}
                            </li>
                        ))}
                    </ul>
                )}
                <button onClick={clearCart}>Clear Cart</button>
            </div>
        </div>
    );
};