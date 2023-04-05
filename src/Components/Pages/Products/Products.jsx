import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../../Common/ProductCard/ProductCard'
import './Products.css'
import { Button } from '@mui/material'

const Products = ({deleteProductById, items}) => {
	return (
		<div className='products'>
			<div className='product-card-container'>
			{items.map((item) => (
				<ProductCard key={item.id} item={item} deleteProductById={deleteProductById} />
			))}
			</div>
			
			<Link to='/create-product' className='boton-agregar'>
				<Button variant='contained' className='boton-add'>Agregar nuevo producto</Button>
			</Link>
		</div>
	)
}

export default Products
