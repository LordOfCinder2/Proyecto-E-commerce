import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import Cart from './Cart'

const CartContainer = () => {
	const { cart, clearCart } = useContext(CartContext)
console.log(cart);
	return (  
		<div>
			<Cart cart={cart}/>
		</div>
	)
}

export default CartContainer
