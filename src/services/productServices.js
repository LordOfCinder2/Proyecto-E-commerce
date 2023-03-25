

import { productInstance } from './productInstance'

export const getProducts = () => {
	return productInstance.get()
}
export const getProductById = (id) => {
	return productInstance.get(`${id}`)
}

export const deleteProduct = (id) => {
	return productInstance.delete(`/${id}`)
}

export const updateProduct = (id, data) => {
	return productInstance.patch(`/${id}`, data)
}

export const createProduct = (data) => {
	return productInstance.post('/', data)
}
