import React, { useState, createContext, useEffect } from 'react'

export const PoductsContext = createContext()

export const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState(
        [
            {
                name: "Tuxedo Pant in Gray",
                id: 1,
                price: 9.99,
                imgSrc: "/History/images/model_1.jpg",
                prod_desc: "The Drop Crotch Pant have a relaxed, low-slung fit and are cut from stretch cotton that will last through plenty of washes and wears. They're complete with a drawstring waist and slightly taper though the leg. Style them with our knit singlet in black and slides."
            },
            {
                name: "Palazzo Pant in Black",
                id: 2,
                price: 19.99,
                imgSrc: "/History/images/model_2.jpg",
                prod_desc: "Cut in a fluid wide-leg shape with a thick elasticated waist, our Palazzo Pants are a relaxed yet sophisticated choice for the suitcase or the office. They're cut from crepe which falls like a dream. Wear them with a classic blazer on days filled with formal meetings and appointments or team with a cropped tee at the weekend."
            },
            {
                name: "Classic Shirt in Black",
                id: 3,
                price: 29.99,
                imgSrc: "/History/images/model_3.jpg",
                prod_desc: "Every stylish woman has a black cotton shirt (or several) in her wardrobe, but you'll definitely want to add this version to your collection too – the boxy fit and folded short sleeves set it apart from more traditional styles while the petite colour and subtle pleating to yoke make it a dream to wear for any occasion. Wear this piece with everything from midi skirts to high-rise denim."
            },
            {
                name: "Boyfriend Swing Dress In Black Stripe",
                id: 4,
                price: 15.99,
                imgSrc: "/History/images/model_4.jpg",
                prod_desc: "Meet the New Bohemian Traders Farrah Denim Short in Vintage Blue. This beauty features a sky high rise fit and a raw cut hemline, five pockets, zip button fastening, contrast ochre stitching and splits on the sides. These are sure to be your favourite summer staple worn with slides or sneakers for easy everyday wear."
            },
            {
                name: "Gathered Blouse with Angled Yoke",
                id: 5,
                price: 25.99,
                imgSrc: "/History/images/model_5.jpg",
                prod_desc: "We've taken the best-selling Genoa Dress and made it even better! With a double collar and double buttons to the front, there's something so elegant and effortless about this mini shirt dress. Cut for a super loose fit, it's made from a linen-rayon blend and has beautiful cascading ruffles along the cuffs and hem. We love the way it looks against distressed denim or bare legs"
            },
            {
                name: "Jersey Swing Tee in Mustard",
                id: 6,
                price: 12.99,
                imgSrc: "/History/images/model_6.jpg",
                prod_desc: "The Bohemian Traders Boyfriend Swing Tee is minimally detailed with tab and buttons to the sleeve. Cut from stripe cotton-jersey, it has dropped shoulders and side slits that accentuate the boxy shape. Wear yours with denim shorts this summer."
            },
            {
                name: "LONG LINE DISTRESSED DENIM SHORTS",
                id: 7,
                price: 28.99,
                imgSrc: "/History/images/model_7.jpg",
                prod_desc: "A casual denim short that’s not shy on style, featuring a longline silhouette that’s both flattering and trendsetting. The denim is distressed and frayed for a ‘lived-in’ look, wear yours with a blazer and platform sandals.     "
            },
            {
                name: "DELFINA DRESS IN BLACK LINEN",
                id: 8,
                price: 35.99,
                imgSrc: "/History/images/model_8.jpg",
                prod_desc: "Relaxed and breezy, with a hint of Bohemia. The Billow Sleeve Dress now comes in this seasons essential colourway, black. It features a billow sleeve which nips in at the cuff. The dipped waistline can be cinched by drawstring ties, for those who prefer a more fitted silhouette.     "
            }
        ]
    )
    const [cartProducts, setCartProducts] = useState([])

    // useEffect(() => {
    //     fetchData()
    // }, [])

    // const fetchData = async () => {
    //     const response = await fetch('http://localhost:8000/products')
    //     const data = await response.json()
    //     setProducts(data)
    // }

    const onAdd = (product) => {
        const exist = cartProducts.find(x => x.id === product.id)
        if (exist) {
            setCartProducts(cartProducts.map(x => x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x))
        } else {
            setCartProducts([...cartProducts, { ...product, quantity: 1 }])
        }
    }

    const onRemove = (product) => {
        if (product.quantity === 1) {
            setCartProducts(cartProducts.filter(x => x.id !== product.id))
        } else {
            setCartProducts(cartProducts.map(x => x.id === product.id ? { ...product, quantity: product.quantity - 1 } : x))
        }
    }

    const removeCartItems = (product) => {
        setCartProducts(cartProducts.filter(x => x.id !== product.id))
    }

    const onPurchased = () => {
        if (cartProducts === 0) {
            alert('Please add a product')
        } else {
            alert('Thank you for your purchased')
            setCartProducts([])
        }
    }

    const productSize = (product, size) => {
        setCartProducts(cartProducts.map(x => x.id === product.id ? { ...product, size: size } : x))
    }

    const value = {
        products,
        cartProducts,
        onAdd,
        onRemove,
        removeCartItems,
        onPurchased,
        productSize
    }

    return (
        <PoductsContext.Provider value={value}>
            {children}
        </PoductsContext.Provider>
    )
}
