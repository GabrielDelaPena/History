import React, { useContext, useEffect, useState } from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { PoductsContext } from '../contexts/ProductsContexts'

const WebShop = () => {
    const { products } = useContext(PoductsContext)
    const [searchTerm, setSearchTerm] = useState('')
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')

    const updateSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    }

    const updateMinPrice = (e) => {
        setMinPrice(e.target.value)
    }

    const updatMaxPrice = (e) => {
        setMaxPrice(e.target.value)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <div className="filters">
                <p className="filter_text">Filters: </p>
                <input className="search_bar" type="text" value={searchTerm} onChange={updateSearchTerm} placeholder="Search..." />
                <input className="search_bar" type="text" value={minPrice} onChange={updateMinPrice} placeholder="Min..." />
                <input className="search_bar" type="text" value={maxPrice} onChange={updatMaxPrice} placeholder="Max..." />
            </div>
            <div className="women_models">
                {products.filter(product => {
                    if (searchTerm === "") {
                        return product
                    } else if (product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return product
                    }
                }
                ).filter(product => {
                    if (minPrice === "") {
                        return product
                    } else if (product.price >= minPrice) {
                        return product
                    }
                }
                ).filter(product => {
                    if (maxPrice === "") {
                        return product
                    } else if (product.price <= maxPrice) {
                        return product
                    }
                }
                ).map(product => (
                    <div key={product.id}>
                        <img src={product.imgSrc} className="model_image" alt="product_image" />
                        <Link to={`/product/${product.name}`} className="product_name"><p>{product.name}</p></Link>
                        <p className="product_price">${product.price}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default WebShop
