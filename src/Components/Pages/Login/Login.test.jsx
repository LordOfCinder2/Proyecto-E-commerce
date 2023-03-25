import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import matchers from '@testing-library/jest-dom/matchers'
import Login from './Login'
expect.extend(matchers)

describe('Login test', () => {
	afterEach(cleanup)
	it('espero render del titulo', () => {
		render(<Login />)
		screen.getByText('Este es el formulario')
	})
	it('espero que el onChange cambie', () => {
		render(<Login />)
		let inputName = screen.getByPlaceholderText('Ingresa tu nombre')
        expect(inputName).toHaveValue('')
        fireEvent.change(inputName, {target: {value: 'Pepe'}})
        expect(inputName).toHaveValue('Juan')
	})
})
