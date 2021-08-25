import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PoductsContext } from '../contexts/ProductsContexts'

const Nav = () => {
    const { cartProducts } = useContext(PoductsContext)

    return (
        <nav> 
            <h1>History</h1>
            <ul>
                <li><Link to="/History/" className="nav_links">Home</Link></li>
                <li><Link to="/webshop" className="nav_links">Web-Shop</Link></li>
                <li><Link to="/contacts" className="nav_links">Contact Us</Link></li>
                <span className="cart_length">
                    <li><Link to="/shoppingcart" className="nav_links">Cart</Link></li>
                    {cartProducts.length ? (<p className="cart_quantity">{cartProducts.length}</p>) : ('')}
                </span>
            </ul>
        </nav>
    )
}

export default Nav
