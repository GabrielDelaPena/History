import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PoductsContext } from '../contexts/ProductsContexts'

const Product = () => {
    const { products } = useContext(PoductsContext)
    // const [product, setProduct] = useState([])
    const { name } = useParams()
    const { onAdd } = useContext(PoductsContext)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const scrollTop = () => {
        window.scrollTo(0, 0)
    }

    // useEffect(() => {
    //     fetchData()
    //     window.scrollTo(0, 0)
    // }, [])

    // const fetchData = async () => {
    //     const response = await fetch(`http://localhost:8000/products/${id}`)
    //     const data = await response.json()
    //     setProduct(data)
    // }

    return (
        <>
            {products.filter(product => product.name === name).map(product => (
                <div className="prod_info" key={product.id}>
                    <div>
                        <img src={product.imgSrc} className="single_product_img"/>
                    </div>
                    <div className="prod_desc">
                        <h3>{product.name}</h3>
                        <p className="prod_text">{product.prod_desc}</p>
                        <p className="prod_text">${product.price}</p>
                        <p>Available Sizes:</p>
                        <span className="prod_sizes">
                            <p className="prod_size">XS</p>
                            <p className="prod_size">S</p>
                            <p className="prod_size">M</p>
                            <p className="prod_size" >L</p>
                        </span>
                        <a className="button" onClick={() => onAdd(product)}>Add To Cart</a>
                    </div>
                </div>
            ))}
            <div>
                <h2>You may also like...</h2>
                <div className="also_like_images">
                    {products.filter(product => product.id === 1 || product.id === 3 || product.id === 5 || product.id === 7).map(product => (
                        <div key={product.id}>
                            <img src={product.imgSrc} className="model_image" />
                            <Link to={`/History/product/${product.name}`} className="product_name"><p onClick={scrollTop}>{product.name}</p></Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Product
