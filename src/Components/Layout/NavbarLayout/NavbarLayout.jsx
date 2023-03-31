import React, { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'

const NavbarLayout = () => {
	const { cart } = useContext(CartContext)
	return (
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
			<h3>Carrito: {cart.length}</h3>
			<Outlet />
		</div>
	)
}

export default NavbarLayout
