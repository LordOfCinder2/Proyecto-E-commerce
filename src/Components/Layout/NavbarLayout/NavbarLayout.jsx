import React, { useContext, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { CartContextReducer } from '../../../context/CartContextReducer'

const NavbarLayout = () => {
	const { state, dispatch } = useContext(CartContextReducer)

	useEffect(() => {
		dispatch({ type: 'GET_TOTAL_QUANTITY' })
	}, [state.cart])

	return (<div>
		
		<div className="nav-bar">
			<NavLink
				to="/login"
				className={({ isActive }) => (isActive ? 'activeNavbar' : 'navbar')}
			>
				<button>Ir al login</button>
			</NavLink>
			<NavLink
				to="/shop"
				className={({ isActive }) => (isActive ? 'activeNavbar' : 'navbar')}
			>
				<button>Tienda</button>
			</NavLink>
			<NavLink
				to="/cart"
				className={({ isActive }) => (isActive ? 'activeNavbar' : 'navbar')}
			>
				<button>Ir al carrito</button>
			</NavLink>
			<h3>Carrito: {state.totalQuantity}</h3>
		</div>
			<Outlet />
	</div>
	)
}

export default NavbarLayout
