import React from 'react'

const CreateProductContainer = ({handleChange, handleSubmit}) => {
	return (
		<div className='create-product'>
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

export default CreateProductContainer
