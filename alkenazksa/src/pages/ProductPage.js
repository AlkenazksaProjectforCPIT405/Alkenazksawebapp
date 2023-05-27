import Navbar from "./Navbar";
import React from "react";
import './pages_css/home.css';
import './pages_css/product.css';
import AlkenazLogo from '../imagess/Alkenaz_logo2.webp';
import userLogo from '../imagess/user_logo1.png'
import cartLogo from '../imagess/cart_logo.png'
import Footer from "../componets/Footer";
import item1 from '../imagess/item1.jpg'


function ProductPage(){
    const productImages = document.querySelectorAll(".product-images img"); 
    const productImageSlide = document.querySelector(".image-slider"); 
    
    let activeImageSlide = 0; 
    
    productImages.forEach((item, i) => { 
        item.addEventListener('click', () => { 
            productImages[activeImageSlide].classList.remove('active'); 
            item.classList.add('active'); 
            productImageSlide.style.backgroundImage = `url('${item.src}')`; 
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
        })
    })
    return(
        <>
 <nav class="navbar" >
<div class="nav">
    <img src={AlkenazLogo} class="brand-logo" alt="alkenaz"/>
 
    <div class="nav-items">
   
        <div class="search">
           
            <input type="text" class="search-box" placeholder="search brand, product"/>
            <button class="search-btn">search</button>
        </div>
        <a href='userpage'> <img src={userLogo} alt="user"/></a>
        <a href="#"><img src={cartLogo} alt="cart"/></a>

    </div>
    
</div>
<div>
    <Navbar/>
</div>




</nav>
<section class="product-details">
    <div class="image-slider">
        <div class="product-images">
            <img src={item1} class="active" alt=""/>
            <img src={item1} alt=""/>
            <img src={item1} alt=""/>
            <img src={item1} alt=""/>
        </div>
    </div>
</section>
<section>
  
   <div class="details">
        <h2 class="product-brand">Alkenaz Abaya</h2>
        <p class="product-short-des">Black Abaya with yellow liens</p>
        <span class="product-price">150 SR</span>
        <span class="product-actual-price">300 SR</span>
        <span class="product-discount">( 50% off )</span>

        <p class="product-sub-heading">select size</p>

        <input type="radio" name="size" value="s" checked hidden id="s-size"/>
        <label for="s-size" class="size-radio-btn check">s</label>
        <input type="radio" name="size" value="m" hidden id="m-size"/>
        <label for="m-size" class="size-radio-btn">m</label>
        <input type="radio" name="size" value="l" hidden id="l-size"/>
        <label for="l-size" class="size-radio-btn">l</label>
        <input type="radio" name="size" value="xl" hidden id="xl-size"/>
        <label for="xl-size" class="size-radio-btn">xl</label>
        <input type="radio" name="size" value="xxl" hidden id="xxl-size"/>
        <label for="xxl-size" class="size-radio-btn">xxl</label>

        <button class="btn cart-btn">add to cart</button>
        <button class="btn">add to wishlist</button>
    </div>
</section>
<section class="detail-des">
    <h2 class="heading">description</h2>
    <p class="des"></p>
</section>
<Footer/>
</>

    )


}
export default ProductPage;