import { useState } from 'react'
import Products from "./Products";

const AddProduct = ({onAdd,products,onEdit,onDelete}) =>{
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image,setImage] = useState('https://picsum.photos/400/250')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!name){
            alert('Please add product')
            return
        }

        onAdd({ name, description, price, image,category})
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
                        placeholder="Add product name"
                        value ={name}
                        onChange={(e) =>setName(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label>Product Price:</label>
                    <input
                        type="text"
                        placeholder="Add product price"
                        value ={price}
                        onChange={(e) =>setPrice(parseInt(e.target.value))}
                    />
                </div>
                <div className="form-control">
                    <label>Product Category:</label>
                    <input
                        type="text"
                        placeholder="Add product category"
                        value ={category}
                        onChange={(e) =>setCategory(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label>Product Description:</label>
                    <input
                        type="text"
                        placeholder="Add product description"
                        value ={description}
                        onChange={(e) =>setDescription(e.target.value)}
                    />
                </div>

                <input type="submit" className="btn btn-block" value="Save product"/>
            </form>
            <Products products={products} onEdit={onEdit} onDelete={onDelete}/>

        </section>

    )
}

export default AddProduct