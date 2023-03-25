import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NavbarLayout = () => {
	return (
		<div>
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
			<Outlet />
		</div>
	)
}

export default NavbarLayout
