import { useState } from "react";

import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import CartContextProvider from "./store/shopping-cart-context.jsx";
import Test from "./components/Test/Test.jsx";

function App() {
	return (
		<CartContextProvider >
			<Test/>
			<Header/>
			<Shop/>
		</CartContextProvider>
	);
}

export default App;
