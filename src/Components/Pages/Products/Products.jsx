import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../../Common/ProductCard/ProductCard'

const Products = ({deleteProductById, items}) => {
	return (
		<div className='products'>
			<Link to='/create-product'>
				<button>Agregar nuevo producto</button>
			</Link>
			{items.map((item) => (
				<ProductCard key={item.id} item={item} deleteProductById={deleteProductById} />
			))}

			
		</div>
	)
}

export default Products
