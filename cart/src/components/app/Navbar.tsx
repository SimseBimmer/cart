import { NavLink } from "react-router-dom";
import "../../styles/Nav.scss";

export const Navbar = () => {
    return (
        <nav className="globalNav">
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className={({ isActive }) => (isActive ? "active-link" : "")}>
                        Cart
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/checkout" className={({ isActive }) => (isActive ? "active-link" : "")}>
                        Checkout
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};