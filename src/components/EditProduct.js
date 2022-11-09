import { useState } from 'react'
import { useParams } from "react-router-dom"

const EditProduct = ({products,onEdit}) =>{
    const { idProduct } = useParams();
    const product = products.find((product)=> product.id === idProduct)
    const [name, setName] = useState(product.name)
    const [description, setDescription] = useState(product.description)
    const [image,setImage] = useState(product.image)
    const [price, setPrice] = useState(product.price)
    const [category, setCategory] = useState(product.category)


    const onSubmit = (e) => {
        e.preventDefault()
        if(!name){
            alert('Please add product')
            return
        }
        onEdit(idProduct,{ name, description,image, price, category})
        setName('')
        setDescription('')
        setPrice('')
        setCategory('')
    }

    return(
        <section className=''>

            <form className="add-form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label>Product Name:</label>
                    <input
                        type="text"
                        placeholder= { product.name }
                        value ={name}
                        onChange={(e) =>setName(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label>Product Price:</label>
                    <input
                        type="text"
                        placeholder= { product.price }
                        value ={price}
                        onChange={(e) =>setPrice(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label>Product Category:</label>
                    <input
                        type="text"
                        placeholder= { product.category}
                        value ={category}
                        onChange={(e) =>setCategory(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label>Product Description:</label>
                    <input
                        type="text"
                        placeholder= { product.description}
                        value ={description}
                        onChange={(e) =>setDescription(e.target.value)}
                    />
                </div>

                <input type="submit" className="btn btn-block" value="update product"/>
            </form>

        </section>

    )
}

export default EditProduct