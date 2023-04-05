import React from 'react'
import { Outlet } from 'react-router-dom'
import './FooterLayout.css'

const FooterLayout = () => {
	return (
		<div >
			<Outlet />
			<h2 className='footer'>Footer</h2>
		</div>
	)
}

export default FooterLayout
