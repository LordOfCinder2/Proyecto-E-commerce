import React, { useState } from 'react'
import EditForm from './EditForm'

const EditFormContainer = ({ product, updateProductById }) => {
	const [data, setData] = useState({
		name: product.name,
		price: product.price,
		stock: product.stock,
		description: product.description,
		category: product.category,
		img: product.img,
	})

	const handleChange = (e, prop) => {
		setData({ ...data, [prop]: e.target.value })
	}

	const handleSubmit = (e, id, data) => {
		e.preventDefault()
		updateProductById(id, data)
	}

	return (
		<div>
			<EditForm
				data={data}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				product={product}
			/>
		</div>
	)
}

export default EditFormContainer
