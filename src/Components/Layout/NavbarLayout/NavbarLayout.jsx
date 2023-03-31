import React, { useContext, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { CartContextReducer } from '../../../context/CartContextReducer'
import { Button, ButtonGroup } from '@mui/material'
import './NavbarLayout.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const NavbarLayout = () => {
	const { state, dispatch } = useContext(CartContextReducer)

	useEffect(() => {
		dispatch({ type: 'GET_TOTAL_QUANTITY' })
	}, [state.cart])

	return (
		<div>
			<div className="header">
				<div className="nav-bar">
					<ButtonGroup variant='text' aria-label='text button group'>
					<NavLink
						to="/login"
						className={({ isActive }) => (isActive ? 'active-page' : 'page')}
					>
						<Button className='botones'>Ir al login</Button>
					</NavLink>
					<NavLink
						to="/shop"
						className={({ isActive }) => (isActive ? 'active-page' : 'page')}
					>
						<Button className='botones'>Tienda</Button>
					</NavLink>
					<NavLink
						to="/cart"
						className={({ isActive }) => (isActive ? 'active-page' : 'page')}
					>
						<Button className='botones'>Ir al carrito</Button>
					</NavLink>
					</ButtonGroup>
				</div>
				<h3>
					<span>{state.totalQuantity}</span>
					<ShoppingCartIcon fontSize='small'/>
				</h3>
			</div>
			<Outlet />
		</div>
	)
}

export default NavbarLayout
