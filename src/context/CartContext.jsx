import { createContext, useState } from 'react'

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([])

	const isInCart = (id) => {
		return cart.some((item) => item.id === id)
	}
	const clearCart = () => {
		console.log('Se limpio el carrito')
	}
	const addToCart = (item) => {
		if (isInCart(item.id)) {
			let newArr = cart.map((element) => {
				if (element.id === item.id) {
					return {
						...element,
						quantity: element.quantity + item.quantity,
					}
				}
			})
            setCart(newArr)
		} else {
			setCart([...cart, item])
		}
	}
	const deleteProduct = () => {
		console.log('se elimino producto')
	}
	return (
		<CartContext.Provider value={{ cart, clearCart, addToCart, deleteProduct }}>
			{children}
		</CartContext.Provider>
	)
}

export default CartContextProvider
