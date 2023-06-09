import React from 'react'
import ItemCount from '../../Common/ItemCount/ItemCount'
import EditFormContainer from '../EditForm/EditForm.container'

const ProductDetail = ({
	product,
	updateProductById,
	changeShowFormState,
	showForm,
}) => {
	return (
		<div className="product-detail">
			<h1>Nombre: {product.name}</h1>
			<h2>Precio: ${product.price}</h2>
			<h3>Stock disponible: {product.stock}</h3>
			<p>Descripción: {product.description}</p>
			<p>Categoría: {product.category}</p>
			<img src={product.img} alt="" />

			<button onClick={changeShowFormState}>Editar</button>
			
			{showForm && (
				<EditFormContainer
					product={product}
					updateProductById={updateProductById}
				/>
			)}
			<ItemCount product={product}/>
		</div>
	)
}

export default ProductDetail

// {
// 	"id": 1,
// 	"name": "nike 360",
// 	"price": 20500,
// 	"stock": 9,
// 	"description": "Zapatillas de ultima generacion para el deporte",
// 	"category": "deportivas",
// 	"img": "https://res.cloudinary.com/dnqfh2chg/image/upload/v1669326932/free-metcon-4-zapatillas-de-entrenamiento-TQMCZg_fvia3m.png"
// }
