import React, { useContext, useEffect, useState } from 'react'
import { PoductsContext } from '../contexts/ProductsContexts'

const ShoppingCart = () => {
    const { cartProducts, onAdd, onRemove, removeCartItems, onPurchased, productSize } = useContext(PoductsContext)
    const totalPrice = cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
    const totalPriceRounded = Math.round(totalPrice * 100) / 100;
    const [s, setS] = useState('S')
    const [xs, setxs] = useState('XS')
    const [m, setM] = useState('M')
    const [l, setL] = useState('L')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            {cartProducts.length !== 0 ? (
                <div>
                    {cartProducts.map(product => (
                        <div className="shopping_cart" key={product.id}>
                            <img src={product.imgSrc} className="cart_image" />
                            <div className="cart_desc">
                                <p className="cart_prod_desc">${product.price}</p>
                                <p className="cart_prod_desc">{product.name}</p>
                                <span className="prod_sizes">
                                    <p className="size">size: {product.size}</p>
                                    <p className="prod_size_cart" onClick={() => productSize(product, xs)}>XS</p>
                                    <p className="prod_size_cart" onClick={() => productSize(product, s)}>S</p>
                                    <p className="prod_size_cart" onClick={() => productSize(product, m)}>M</p>
                                    <p className="prod_size_cart" onClick={() => productSize(product, l)}>L</p>
                                </span>
                                <p className="cart_prod_desc">Quantity: {product.quantity}
                                    <span className className="button_quantity_container">
                                        <a className="button_quantity" onClick={() => onAdd(product)}>+</a>
                                        <a className="button_quantity" onClick={() => onRemove(product)}>-</a>
                                    </span>
                                </p>
                                <a className="button" onClick={() => removeCartItems(product)}>Remove</a>
                            </div>
                        </div>
                    ))}
                    <div className="cart_total">
                        <p className="total_price">Total : $ {totalPriceRounded}</p>
                        <a href="#" className="button" onClick={() => onPurchased()}>Purchased</a>
                    </div>
                </div>
            ) : (
                <p className="cart_empty">Cart is test Empty test</p>
            )}

        </>
    )
}

export default ShoppingCart
