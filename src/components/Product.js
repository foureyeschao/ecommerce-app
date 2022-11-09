import { useLocation,useNavigate } from "react-router-dom"
import Button from './Button'
import { FaTimes } from 'react-icons/fa'

const Product = ({ product,onDelete,idProduct }) => {
    const location = useLocation()
    const navigate = useNavigate()

    return (

        <article className="tile" id={idProduct}>
            <div className="tile__link">
                <div className="tile__img-wrapper">
                    <img  src={product.image} alt="product_image" className="tile__img" />
                </div>
                <div className="tile__text-wrapper">
                    <h3 className="">{product.name}</h3>
                    <p>{product.description}</p>
                    <p>{product.category}</p>
                    <p className="tile__text">{product.price}$</p>
                    {location.pathname === '/product' && (
                        <Button text='Edit' color= 'green'  onClick = {() => navigate(`/product/edit/${idProduct}`)} />
                    )}
                    {location.pathname === '/product' && (
                        <Button text='Delete' color= 'red'  onClick = {() => onDelete(idProduct)} />
                    )}
                </div>
            </div>

        </article>
    )
}

export default Product