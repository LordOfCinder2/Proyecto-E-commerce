import React, { useState, useEffect } from 'react'
import Products from './Products'
import { deleteProduct, getProducts } from '../../../services/productServices'

const ProductsContainer = () => {
	const [items, setItems] = useState([])

	const [hasChanged, setHasChanged] = useState(false)

	useEffect(() => {
		setHasChanged(false)
		const productos = getProducts()
		productos.then((res) => setItems(res.data)).catch((err) => console.log(err))
	}, [hasChanged])

	const deleteProductById = (id) => {
		deleteProduct(id)
		setHasChanged(true)
	}

	return <Products deleteProductById={deleteProductById} items={items} />
}

export default ProductsContainer
