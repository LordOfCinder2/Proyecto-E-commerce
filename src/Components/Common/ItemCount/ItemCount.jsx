import React, { useContext, useState } from 'react'
import { CartContextReducer } from '../../../context/CartContextReducer'

const ItemCount = ({ product }) => {
	const [counter, setCounter] = useState(1)
	const { dispatch } = useContext(CartContextReducer)
	const onAdd = () => {
		let obj = { ...product, quantity: counter }
		// addToCart(obj)
		dispatch({ type: 'ADD_TO_CART', payload: obj })
	}
	return (
		<div>
			<button onClick={() => setCounter(counter + 1)}>+</button>
			<h3>{counter}</h3>
			<button onClick={() => setCounter(counter - 1)}>-</button>
			<button onClick={onAdd}>Agregar al carrito</button>
		</div>
	)
}

export default ItemCount
