import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { CartContextReducer } from '../../../context/CartContextReducer'
import Cart from './Cart'

const CartContainer = () => {
	const { state,dispatch} = useContext(CartContextReducer)
console.log(state.cart);
	return (  
		<div>
			<Cart state={state}/>
		</div>
	)
}

export default CartContainer
