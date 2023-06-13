import React from "react";

function Product({props}) {

    function addToCart(product, quantity, size) {
        const cart = JSON.parse(localStorage.getItem('cart')) || {};
        const id = product.id;
        if (id in cart) {
            cart[id].quantity += quantity;
            cart[id].size = size;
        } else {
            cart[id] = { product, quantity, size };
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    const [selectedSize, setSelectedSize] = React.useState('s');
    const [selectedQuantity, setSelectedQuantity] = React.useState(1);

    function handleSizeChange(e) {
        setSelectedSize(e.target.value);
    }

    function handleQuantityChange(e) {
        setSelectedQuantity(parseInt(e.target.value));
    }

    function handleAddToCart() {
        addToCart(props, selectedQuantity, selectedSize);
    }
    return (

                <div className="product-card">
                   
                        <div className="product-image">
                            <img src={props.img}  className="product-thumb" alt="" />
                           
                        </div>
                        <div className="product-info">
                            <h2 className="product-brand">{props.type}</h2>
                            <p className="product-short-des">{props.name}</p>
                            <span className="price">{props.price}</span>

                            <p className="product-sub-heading">select size</p>
                    <input type="radio" name="size" value="s" checked={selectedSize === 's'} onChange={handleSizeChange} hidden id="s-size" />
                    <label htmlFor="s-size" className={`size-radio-btn ${selectedSize === 's' ? 'check' : ''}`}>s</label>
                    <input type="radio" name="size" value="m" checked={selectedSize === 'm'} onChange={handleSizeChange} hidden id="m-size" />
                    <label htmlFor="m-size" className={`size-radio-btn ${selectedSize === 'm' ? 'check' : ''}`}>m</label>
                    <input type="radio" name="size" value="l" checked={selectedSize === 'l'} onChange={handleSizeChange} hidden id="l-size" />
                    <label htmlFor="l-size" className={`size-radio-btn ${selectedSize === 'l' ? 'check' : ''}`}>l</label>
                    <input type="radio" name="size" value="xl" checked={selectedSize === 'xl'} onChange={handleSizeChange} hidden id="xl-size" />
                    <label htmlFor="xl-size" className={`size-radio-btn ${selectedSize === 'xl' ? 'check' : ''}`}>xl</label>
                    <div className="quantity">
                        <p className="product-sub-heading">select quantity</p>
                        <select id="quantity-select" onChange={handleQuantityChange}>
                            {[...Array(10)].map((_, i) => (
                                <option value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                    </div>
                    <button className="add-to-cart-btn" onClick={handleAddToCart}>add to cart</button>
                        </div>
                    
                </div>
           

    );
}

export default Product;

