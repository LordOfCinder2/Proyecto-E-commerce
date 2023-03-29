import React from 'react'
import { Outlet } from 'react-router-dom'

const FooterLayout = () => {
	return (
		<div className='footer'>
			<Outlet />
			<h2>Footer</h2>
		</div>
	)
}

export default FooterLayout
