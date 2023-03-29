import React from 'react'

const EditForm = ({ handleSubmit, handleChange, data, product }) => {
	return (
		<div className='edit-form'>
			<form
				action=""
				onSubmit={(e) => {
					handleSubmit(e, product.id, data)
				}}
			>
				<input
					type="text"
					placeholder="Actualizar nombre"
					onChange={(e) => {
						handleChange(e, 'name')
					}}
				/>
				<input
					type="text"
					placeholder="Actualizar precio"
					onChange={(e) => {
						handleChange(e, 'price')
					}}
				/>
				<input
					type="text"
					placeholder="Actualizar stock"
					onChange={(e) => {
						handleChange(e, 'stock')
					}}
				/>
				<input
					type="text"
					placeholder="Actualizar descripción"
					onChange={(e) => {
						handleChange(e, 'description')
					}}
				/>
				<input
					type="text"
					placeholder="Actualizar categoría"
					onChange={(e) => {
						handleChange(e, 'category')
					}}
				/>
				<input
					type="text"
					placeholder="Actualizar imagen"
					name="price"
					onChange={(e) => {
						handleChange(e, 'img')
					}}
				/>
				<button type="submit">Actualizar datos</button>
			</form>
		</div>
	)
}

export default EditForm
