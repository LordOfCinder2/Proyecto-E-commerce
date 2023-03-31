import React, { createContext, useReducer } from 'react'

export const CartContextReducer = createContext()

const initialState = {
	cart: [],
}

function reducer(state, action) {
	switch (action.type) {
		case 'ADD_TO_CART':
			return { ...state, cart: 'se agrego' }

		default:
			throw new Error()
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
