import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({ item, deleteProductById}) => {
	return (
		<div key={item.id} className='product-card'>
			<h2>{item.name}</h2>
			<h3>${item.price}</h3>
			<div>
			<img src={item.img} alt=""/>
			</div>
			
			<button
				onClick={() => {
					deleteProductById(item.id)
				}}
			>
				Eliminar
			</button>
			<Link to={`/product-detail/${item.id}`}>
				<button>Ver detalles</button>
			</Link>
		</div>
	)
}

export default ProductCard
