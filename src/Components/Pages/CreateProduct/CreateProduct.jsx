import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createProduct } from '../../../services/productServices'
import CreateProductContainer from './CreateProduct.container'

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
		<CreateProductContainer handleSubmit={handleSubmit} handleChange={handleChange}/>
	)
}

export default CreateProduct
