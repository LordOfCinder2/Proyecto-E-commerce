import { useContext, useEffect } from 'react'
import { CartContextReducer } from '../../../context/CartContextReducer'
import Cart from './Cart'

const CartContainer = () => {
	const { state, dispatch } = useContext(CartContextReducer)
	console.log(state.cart)

	const clearCart = () => {
		dispatch({ type: 'CLEAR_CART' })
	}
	useEffect(() => {
		dispatch({ type: 'GET_TOTAL_PRICE' })
	}, [state.cart])
	return (
		<div>
			<Cart state={state} clearCart={clearCart} />
		</div>
	)
}

export default CartContainer
