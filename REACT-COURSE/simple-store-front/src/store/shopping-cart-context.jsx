import { createContext } from "react";

const CartContext = createContext({
    items: [] // Shopping Cart Items
});

export default CartContext