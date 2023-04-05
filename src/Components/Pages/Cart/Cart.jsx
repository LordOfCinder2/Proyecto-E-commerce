import { Button } from '@mui/material'
import React from 'react'

const Cart = ({ state , clearCart}) => {
	return (
		<div>
			{state.cart.map((item) => (
				<div key={item.id}>
					<h3>{item.name}</h3>
					<h2>${item.price}</h2>
				</div>
			))}
			<div className='totalPrice'>${state.totalPrice}</div>
			<Button onClick={clearCart}>Vaciar Carrito</Button>
		</div>
	)
}

export default Cart
