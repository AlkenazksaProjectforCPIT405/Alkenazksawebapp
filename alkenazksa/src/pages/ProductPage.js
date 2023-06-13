import Navbar from "./Navbar";
import React from "react";
import './pages_css/home.css';
import './pages_css/product.css';
import AlkenazLogo from '../imagess/Alkenaz_logo2.webp';
import userLogo from '../imagess/user_logo1.png'
import cartLogo from '../imagess/cart_logo.png'
import Footer from "../componets/Footer";
import { useLocation } from "react-router-dom";

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

function ProductPage() {
    const location = useLocation();
    const product = location.state? location.state : {};
   
    const [selectedSize, setSelectedSize] = React.useState('s');
    const [selectedQuantity, setSelectedQuantity] = React.useState(1);

    function handleSizeChange(e) {
        setSelectedSize(e.target.value);
    }

    function handleQuantityChange(e) {
        setSelectedQuantity(parseInt(e.target.value));
    }

    function handleAddToCart() {
        addToCart(product, selectedQuantity, selectedSize);
    }

    const productImages = document.querySelectorAll(".product-images img");
    const productImageSlide = document.querySelector(".image-slider");

    let activeImageSlide = 0;

    productImages.forEach((item, i) => {
        item.addEventListener('click', () => {
            productImages[activeImageSlide].classList.remove('active');
            item.classList.add('active');
            productImageSlide.style.backgroundImage = `url('${product.img}')`;
            activeImageSlide = i;
        })
    })

    const sizeBtns = document.querySelectorAll('.size-radio-btn');
    let checkedBtn = 0;

    sizeBtns.forEach((item, i) => {
        item.addEventListener('click', () => {
            sizeBtns[checkedBtn].classList.remove('check');
            item.classList.add('check');
            checkedBtn = i;
            setSelectedSize(item.value);
        })
    })
    console.log(product.name);
    return (
       
        <>
            <nav className="navbar">
                <div className="nav">
                    <img src={AlkenazLogo} className="brand-logo" alt="alkenaz" />
                    <div className="nav-items">
                        <div className="search">
                            <input type="text" className="search-box" placeholder="search brand, product" />
                            <button className="search-btn">search</button>
                        </div>
                        <a href='userpage'> <img src={userLogo} alt="user" /></a>
                        <a href="/cartpage"><img src={cartLogo} alt="cart" /></a>
                    </div>
                </div>
                <div>
                    <Navbar />
                </div>
            </nav>
            <section className="product-details">
                <img className="image-slider" src={product.img} alt="" />


            </section>
            <section>
                <div className="details">
                    <h2 className="product-brand">{product.type}</h2>
                    <p className="product-short-des">{product.name}</p>
                    <span className="product-price">{product.price}</span>
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
            </section>
            <Footer />
        </>
    )
}

export default ProductPage;