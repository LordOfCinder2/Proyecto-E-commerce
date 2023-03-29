import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ item, deleteProductById, updateProductById }) => {
	return (
		<div key={item.id} style={{ border: '2px solid white' }} className='product-card'>
			<h2>{item.name}</h2>
			<h3>{item.price}</h3>
			<img src={item.img} alt="" style={{ width: '200px', height: '200px' }} />
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
