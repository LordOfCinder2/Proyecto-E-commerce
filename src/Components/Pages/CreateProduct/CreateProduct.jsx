import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { createProduct } from '../../../services/productServices'

const CreateProduct = () => {
	const [newProduct, setNewProduct] = useState({
		name: '',
		price: '',
		img: '',
	})

    const navigate = useNavigate()

	const handleChange = (e) => {
		setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		let data = {
			name: newProduct.name,
			price: Number(newProduct.price),
			img: newProduct.img,
		}
		createProduct(data)
        navigate('/shop')
	}

	return (
		<div>
			<form action="" onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="nombre del producto"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="price"
					placeholder="precio del producto"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="img"
					placeholder="img del producto"
					onChange={handleChange}
				/>
				<button type="submit">Crear</button>
			</form>
		</div>
	)
}

export default CreateProduct
