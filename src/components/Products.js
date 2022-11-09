import Product from "./Product"

const Products = ({ products,onEdit,onDelete }) => {
    return(
       <div className='grid grid--3'>
            {products.map((product)=>(
                <Product key={product.id} idProduct={product.id} product={product} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </div>
    )
}

export default Products