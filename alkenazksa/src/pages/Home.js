import './pages_css/home.css';


export default function Home(){
    return(

<nav class="navbar">
<div class="nav">
    <img src="/imagess/Akenaz_logo.png" class="brand-logo" alt="alkenaz"/>
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search brand, product"/>
            <button class="search-btn">search</button>
        </div>
        <a href="/#"><img src="./imagess/user_logo1.png" alt="user"/></a>
        <a href="/#"><img src="./imagess/cart_logo.png" alt="cart"/></a>
    </div>
</div>
</nav>
 )
}