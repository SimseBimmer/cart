import { useContext } from "react";
import { useGetProducts } from "../hooks/useGetProducts"; 
import { CartContext } from "../context/CartContextProvider"; // Correct import for CartContextProvider

export const HomePage = () => { 
    const { data, loading, error } = useGetProducts();
    const { addToCart } = useContext(CartContext); 

    console.log('Data', data);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <h1>Error: {error.message}</h1>;
    }

    return (
        <section>
            <h1>Vores produkter</h1>
            <div>
                {data?.products.map((product) => {
                    return (
                        <div key={product.id}>
                            <img src={product.thumbnail} alt={product.title} /> 
                            <h5>{product.title}</h5>
                            <p>{product.description}</p>
                            <p>{product.price} Dkk</p>
                            <button onClick={() => addToCart(product)}>Add to Cart</button> {/* Call addToCart */}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};