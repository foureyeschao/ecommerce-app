import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Logo from '../assets/images/furniture-logo.svg'

const Header = ({title}) => {
    return(
        <header className='header text-center'>
            <a href="" className='' ><img src={Logo} alt=""/></a>
            <ul className="nav justify-content-center">
                <li className="nav-item">

                    <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/product'>Product</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Contact</a>
                </li>
            </ul>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Default"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header