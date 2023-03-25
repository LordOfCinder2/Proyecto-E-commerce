import './App.css'

import ProductsContainer from './Components/Pages/Products/Products.container'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home/Home'
import CreateProduct from './Components/Pages/CreateProduct/CreateProduct'
import Login from './Components/Pages/Login/Login'
import NavbarLayout from './Components/Layout/NavbarLayout/NavbarLayout'
import FooterLayout from './Components/Layout/FooterLayout/FooterLayout'
import ProductDetailContainer from './Components/Pages/ProductDetail/ProductDetail.container'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route element={<NavbarLayout />}>
						<Route path="/" element={<Home />} />
						<Route element={<FooterLayout />}>
							<Route path="/cart" element={<h2>Carrito</h2>} />
							<Route path="/shop" element={<ProductsContainer />} />
							<Route path="/create-product" element={<CreateProduct />} />
							<Route path='/product-detail/:id' element={<ProductDetailContainer/>}/>
						</Route>
					</Route>
					<Route path="*" element={<h1>Not Found</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
