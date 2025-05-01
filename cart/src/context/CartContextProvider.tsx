import { createContext, ReactNode, useState } from 'react';
import { ProductElement } from '../types/Product.types';

// Create the CartContext with default values
export const CartContext = createContext({
    cartData: [] as Array<ProductElement>,
    setCartData: (cartData: Array<ProductElement>) => {},
    addToCart: (product: ProductElement) => {},
    removeFromCart: (productID: number) => {},
    clearCart: () => {},
});

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const [cartData, setCartData] = useState<Array<ProductElement>>([]);

    // Add a product to the cart
    const addToCart = (product: ProductElement) => {
        console.log('Attempting to add product:', product);
        const existingProduct = cartData.find((item) => item.id === product.id);

        if (existingProduct) {
            console.log('Product already exists in cart. Incrementing quantity...');
            const updatedCart = cartData.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartData(updatedCart);
            console.log('Updated cart after incrementing quantity:', updatedCart);
        } else {
            console.log('Product does not exist in cart. Adding new product...');
            // Add a new product to the cart with quantity 1
            const productWithQuantity = { ...product, quantity: 1 };
            setCartData((prevCartData) => {
                const newCart = [...prevCartData, productWithQuantity];
                console.log('Updated cart after adding new product:', newCart);
                return newCart;
            });
        }
    };

    // Remove a product from the cart
    const removeFromCart = (productID: number) => {
        console.log('Attempting to remove product with ID:', productID);
        const updatedCart = cartData.map((item) => {
            if (item.id === productID) {
                if (item.quantity > 1) {
                    console.log(`Decreasing quantity for product ID: ${productID}`);
                    return { ...item, quantity: item.quantity - 1 };
                } else {
                    console.log(`Removing product ID: ${productID} from cart`);
                    return null; 
                }
            }
            return item;
        }).filter((item) => item !== null); 
        setCartData(updatedCart as Array<ProductElement>);
        console.log('Updated cart after removing product:', updatedCart);
    };

    // Clear the entire cart
    const clearCart = () => {
        console.log('Clearing the cart...');
        setCartData([]);
        console.log('Cart has been cleared. Current cart:', []);
    };

    return (
        <CartContext.Provider value={{ cartData, setCartData, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;