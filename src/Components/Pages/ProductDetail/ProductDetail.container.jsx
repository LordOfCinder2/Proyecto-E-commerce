import React, { useEffect, useState } from 'react'
import ProductDetail from './ProductDetail'
import { useParams } from 'react-router-dom'
import { updateProduct } from '../../../services/productServices'
import { productInstance } from '../../../services/productInstance'
import EditFormContainer from '../EditForm/EditForm.container'

const ProductDetailContainer = () => {
	const [product, setProduct] = useState({})
	const [showForm, setShowForm] = useState(false)
	const [hasChanged, setHasChanged] = useState(false)

	const { id } = useParams()

	useEffect(() => {
		setHasChanged(false)
		productInstance(id).then((res) => {
			setProduct(res.data)
		})
	}, [hasChanged])

	const updateProductById = (id, data) => {
		updateProduct(id, data)
		setHasChanged(true)
	}

	const changeShowFormState = () => {
		setShowForm(!showForm)
	}

	return (
		<div>
			<ProductDetail
				product={product}
				updateProductById={updateProductById}
				changeShowFormState={changeShowFormState}
				showForm={showForm}
			/>
		</div>
	)
}

export default ProductDetailContainer
