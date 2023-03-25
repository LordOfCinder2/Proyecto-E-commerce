import {
	Box,
	Button,
	FormControl,
	Grid,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Stack,
	TextField,
} from '@mui/material'
import Swal from 'sweetalert2'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


const Login = () => {
	const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

	const handleClickShowPassword = () => setShowPassword(!showPassword)

	const dispararAlerta = () => {
		Swal.fire({
			position: 'top-end',
			icon: 'success',
			title: 'Your work has been saved',
			showConfirmButton: false,
			timer: 1500,
		})
        navigate('/shop')
	}
	return (
		<Box
			sx={{
				width: '100%',
				minHeight: '100vh',
				padding: '10px 30px',
			}}
		>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<TextField label="Ingresa tu nombre" variant="outlined" fullWidth />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField label="Ingresa tu email" variant="outlined" fullWidth />
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl variant="outlined" fullWidth>
						<InputLabel htmlFor="outlined-adornment-password">
							Password
						</InputLabel>
						<OutlinedInput
							id="outlined-adornment-password"
							type={showPassword ? 'text' : 'password'}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										edge="end"
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
							label="Password"
						/>
					</FormControl>
				</Grid>
			</Grid>
			<Stack spacing={2} direction="row" sx={{ padding: '30px' }}>
				<Button variant="contained" onClick={dispararAlerta}>
					Ingresar
				</Button>
				<Button variant="outlined">Cancelar</Button>
			</Stack>
		</Box>
	)
}

export default Login
