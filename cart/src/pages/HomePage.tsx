import { useContext } from "react";
import { useGetProducts } from "../hooks/useGetProducts";
import { CartContext } from "../context/CartContextProvider";
import '../styles/HomePage.scss';

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
        <section className="Products">
            <h1>Vores produkter</h1>
            <div className="productsContainer">
                {data?.products.map((product) => {
                    return (
                        <div key={product.id} className="productCard">
                            <img id="productImage" src={product.thumbnail} alt={product.title} />
                            <div id="productInfo1">
                                <h5 id="productTitle">{product.title}</h5>
                                {/* <p>{product.description}</p> */}
                                <p id="productPrice">{product.price} Dkk</p>
                                <button id="addToCart1" onClick={() => addToCart(product)}>Add to Cart</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};