import React from "react";
import item1 from '../imagess/item1.jpg'
import item2 from '../imagess/item2.jpg'
import item3 from '../imagess/item3.jpg'
import item4 from '../imagess/item4.jpg'
import item5 from '../imagess/item5.jpg'
import item6 from '../imagess/item6.jpg'
import item7 from '../imagess/item7.jpg'
function Product(){
    return(
        <section class="product">
        <h2 class="product-category">best selling</h2>
        <div class="product-container">
    <div class="product-card">
        <div class="product-image">
            <span class="discount-tag">50% off</span>
            <img src={item1} class="product-thumb" alt=""/>
            <button class="card-btn">add to whislist</button>
        </div>
        <div class="product-info">
            <h2 class="product-brand">Abaya</h2>
            <p class="product-short-des">Black Abaya</p>
            <span class="price">300 SR</span><span class="actual-price">150 SR</span>
        </div>
    </div>
    <div class="product-card">
        <div class="product-image">
            
            <img src={item2} class="product-thumb" alt=""/>
            <button class="card-btn">add to whislist</button>
        </div>
        <div class="product-info">
            <h2 class="product-brand">Abaya</h2>
            <p class="product-short-des">Black Abaya</p>
            <span class="price">330 SR</span>
        </div>
    </div>
    <div class="product-card">
        <div class="product-image">
            
            <img src={item3} class="product-thumb" alt=""/>
            <button class="card-btn">add to whislist</button>
        </div>
        <div class="product-info">
            <h2 class="product-brand">Abaya</h2>
            <p class="product-short-des">Gray Abaya</p>
            <span class="price">290 SR</span>
        </div>
    </div>
   
    <div class="product-card">
        <div class="product-image">
           
            <img src={item4} class="product-thumb" alt=""/>
            <button class="card-btn">add to whislist</button>
        </div>
        <div class="product-info">
            <h2 class="product-brand">Abaya</h2>
            <p class="product-short-des">DarkBlue Abaya</p>
            <span class="price">300SR</span>
        </div>
    </div>
    <div class="product-card">
        <div class="product-image">
            
            <img src={item5} class="product-thumb" alt=""/>
            <button class="card-btn">add to whislist</button>
        </div>
        <div class="product-info">
            <h2 class="product-brand">Abaya</h2>
            <p class="product-short-des">Black Abaya</p>
            <span class="price">330 SR</span>
        </div>
    </div>
    <div class="product-card">
        <div class="product-image">
           
            <img src={item7} class="product-thumb" alt=""/>
            <button class="card-btn">add to whislist</button>
        </div>
        <div class="product-info">
            <h2 class="product-brand">Abaya</h2>
            <p class="product-short-des">Green Abaya</p>
            <span class="price">270 SR</span>
        </div>
    </div>
</div>
    </section>
    );
    }
    
    export default Product;