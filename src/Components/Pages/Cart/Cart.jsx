import React from 'react'

const Cart = ({ cart }) => {
	console.log(cart)
	return (
		<div>
			{cart.map((item) => (
				<div key={item.id}>
					<h3>{item.name}</h3>
				</div>
			))}
		</div>
	)
}

export default Cart
