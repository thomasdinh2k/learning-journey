import { createContext, useReducer, useState } from "react"

import { DUMMY_PRODUCTS } from "../dummy-products"

export const CartContext = createContext({
	items: [], // Shopping Cart Items
	addItemToCart: () => {},
	updateItemQuantity: () => {},
})

function shoppingCartReducer(state, action) {
	switch (action.type) {
		case "ADD_ITEM": {
			const updatedItems = [...state.items]

			const existingCartItemIndex = updatedItems.findIndex(
				cartItem => cartItem.id === action.payload
			)
			const existingCartItem =
				updatedItems[existingCartItemIndex]

			if (existingCartItem) {
				const updatedItem = {
					...existingCartItem,
					quantity: existingCartItem.quantity + 1,
				}
				updatedItems[existingCartItemIndex] = updatedItem
			} else {
				const product = DUMMY_PRODUCTS.find(
					product => product.id === action.payload
				)
				updatedItems.push({
					id: action.payload,
					name: product.title,
					price: product.price,
					quantity: 1,
				})
			}

			return {
				...state,
				items: updatedItems,
			}
		}

		case "UPDATE_QTY": {
			let updatedItems = [...state.items]
			const updatedItemIndex = updatedItems.findIndex(
				item => item.id === action.payload.productId
			)

			const updatedItem = {
				...updatedItems[updatedItemIndex],
			}

			updatedItem.quantity += action.payload.amount

			if (updatedItem.quantity <= 0) {
				updatedItems.splice(updatedItemIndex, 1)
			} else {
				updatedItems[updatedItemIndex] = updatedItem
			}

			return {
				...state,
				items: updatedItems,
			}
		}

		default:
			return state
	}
}

export default function CartContextProvider({ children }) {
	const [shoppingCartState, shoppingCartDispatch] =
		useReducer(shoppingCartReducer, { items: [] })

	function handleAddItemToCart(id) {
		shoppingCartDispatch({ type: "ADD_ITEM", payload: id })
	}

	function handleUpdateCartItemQuantity(productId, amount) {
		shoppingCartDispatch({
			type: "UPDATE_QTY",
			payload: {
				productId,
				amount,
			},
		})
	}

	const shoppingCartCtxValue = {
		items: shoppingCartState.items,
		handleAddItemToCart,
		handleUpdateCartItemQuantity,
	}

	return (
		<CartContext.Provider value={shoppingCartCtxValue}>
			{children}
		</CartContext.Provider>
	)
}
