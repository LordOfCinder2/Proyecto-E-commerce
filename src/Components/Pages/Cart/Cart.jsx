import React from 'react'

const Cart = ({ state }) => {
	return (
		<div>
			{state.cart.map((item) => (
				<div key={item.id}>
					<h3>{item.name}</h3>
				</div>
			))}
		</div>
	)
}

export default Cart
