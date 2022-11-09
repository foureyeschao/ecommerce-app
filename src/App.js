import { useState, useEffect } from 'react'
import Data from "./mockdata/products.json"
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import { nanoid } from "nanoid";

function App() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const productsFromServer = await fetchProducts()
            setProducts(productsFromServer)
        }
        getProducts()
    }, [])
    const fetchProducts = async () => {
        const res = await fetch('http://localhost:5000/products')
        const data = await res.json()
        return data
    }

    const addProduct = async (product) => {
        
        const id = nanoid();
        const newProduct = { id, ...product }
        setProducts([...products, newProduct])
    }
    const editProduct = (id, data) => {
        let newData = { id, ...data }
        let newProducts = products.filter((p) => p.id !== id)
        setProducts([...newProducts, newData])
    }

    const deleteProduct = (id) => {
        setProducts(products.filter((p) => p.id !== id))
    }

    return (
        <BrowserRouter>
            <div className="container">
                <Header title={'good morning'} />
                <Routes>
                    <Route path='/' element={<Products products={products} />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/product' element={<AddProduct products={products} onAdd={addProduct} onDelete={deleteProduct} />} />
                    <Route path='/product/edit/:idProduct' element={<EditProduct products={products} onEdit={editProduct} />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <Footer />
            </div>

        </BrowserRouter>

    );
}

export default App;
