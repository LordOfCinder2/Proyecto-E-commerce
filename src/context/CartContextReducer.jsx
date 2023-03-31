import React, { createContext, useReducer } from 'react'

export const CartContextReducer = createContext()

const initialState = {
	cart: [],
	totalPrice: 0,
	totalQuantity: 0,
}

function reducer(state, action) {
	switch (action.type) {
		case 'ADD_TO_CART':
			let exist = state.cart.some((item) => item.id === action.payload.id)
			if (exist) {
				let newArr = state.cart.map((element) => {
					if (element.id === action.payload.id) {
						return {
							...element,
							quantity: element.quantity + action.payload.quantity,
						}
					}
				})
				return { ...state, cart: newArr }
			} else {
				return { ...state, cart: [...state.cart, action.payload] }
			}
		case 'CLEAR_CART':
			return { ...state, cart: [] }
		case 'GET_TOTAL_PRICE':
			return { ...state, totalPrice: 0 }
		case 'GET_TOTAL_QUANTITY':
			let total = state.cart.reduce((acc, item) => {
				return acc + item.quantity
			}, 0)
			return { ...state, totalQuantity: total }
		default:
			return state
	}
}

const CartContextReducerProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<CartContextReducer.Provider value={{ state, dispatch }}>
			{children}
		</CartContextReducer.Provider>
	)
}

export default CartContextReducerProvider
