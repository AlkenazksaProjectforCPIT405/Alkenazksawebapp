import './pages_css/home.css';
import AlkenazLogo from '../imagess/Alkenaz_logo2.webp';
import userLogo from '../imagess/user_logo1.png'
import cartLogo from '../imagess/cart_logo.png'


export default function Home(){
    return(

<nav class="navbar">
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

<ul class="links-container">
    <li class="link-item"><a href="#" class="link">home</a></li>
    <li class="link-item"><a href="#" class="link">accessories</a></li>
</ul>
</nav>
 )
}