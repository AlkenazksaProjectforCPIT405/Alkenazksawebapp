import './pages_css/home.css';
import AlkenazLogo from '../imagess/Alkenaz_logo2.webp';
import userLogo from '../imagess/user_logo1.png'
import cartLogo from '../imagess/cart_logo.png'
import Hero from '../componets/Hero';
import Navbar from './Navbar';
import Product from './Prouduct';





export default function Home(){
    return(
        <body>

<nav class="navbar" >
<div class="nav">
    <img src={AlkenazLogo} class="brand-logo" alt="alkenaz"/>
 
    <div class="nav-items">
   
        <div class="search">
           
            <input type="text" class="search-box" placeholder="search brand, product"/>
            <button class="search-btn">search</button>
        </div>
        <a href="#"><img src={userLogo} alt="user"/></a>
        <a href="#"><img src={cartLogo} alt="cart"/></a>

    </div>
    
</div>
<div>
    <Navbar/>
</div>




</nav>

<Hero/>

<Product/>

</body>
 )
}

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})