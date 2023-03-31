import React, { useContext, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { CartContextReducer } from '../../../context/CartContextReducer'
import { Button } from '@mui/material'
import styles from './Navbar.module.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavbarLayout = () => {
	const { state, dispatch } = useContext(CartContextReducer)

	useEffect(() => {
		dispatch({ type: 'GET_TOTAL_QUANTITY' })
	}, [state.cart])

	return (<div>
		<div className={styles.header}>
		<div className={styles.navBar}>
			<NavLink
				to="/login"
				className={({ isActive }) => (isActive ? 'activePage' : 'Page')}
			>
				<Button variant='outlined'>
					Ir al login
					</Button>
			</NavLink>
			<NavLink
				to="/shop"
				className={({ isActive }) => (isActive ? 'activePage' : 'Page')}
			>
				<Button variant='outlined'>Tienda</Button>
			</NavLink>
			<NavLink
				to="/cart"
				className={({ isActive }) => (isActive ? 'activePage' : 'Page')}
			>
				<Button variant='outlined'>Ir al carrito</Button>
			</NavLink>
		</div>
			<h3><ShoppingCartIcon/>{state.totalQuantity} </h3>
		</div>
			<Outlet />
	</div>
	)
}

export default NavbarLayout
