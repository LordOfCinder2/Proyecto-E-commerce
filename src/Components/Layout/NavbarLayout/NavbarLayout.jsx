import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NavbarLayout = () => {
	return (
		<div>
			<NavLink
				to="/login"
				className={({ isActive }) => (isActive ? 'activeNavbar' : 'navbar')}
			>
				Ir al login
			</NavLink>
			<NavLink
				to="/shop"
				className={({ isActive }) => (isActive ? 'activeNavbar' : 'navbar')}
			>
				Tienda
			</NavLink>
			<NavLink
				to="/cart"
				className={({ isActive }) => (isActive ? 'activeNavbar' : 'navbar')}
			>
				Ir al carrito
			</NavLink>
			<Outlet />
		</div>
	)
}

export default NavbarLayout
