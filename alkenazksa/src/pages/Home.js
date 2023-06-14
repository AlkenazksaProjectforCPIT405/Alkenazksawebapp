import './pages_css/home.css';
import AlkenazLogo from '../imagess/Alkenaz_logo2.webp';
import userLogo from '../imagess/user_logo1.png'
import cartLogo from '../imagess/cart_logo.png'
import Hero from '../componets/Hero';
import Navbar from './Navbar';

import Collection from './Collection';
import Footer from '../componets/Footer';
import ProductsBar from '../componets/ProductsBar';




export default function Home() {




    return (
        <body>

            <nav class="navbar" >
                <div class="nav">
                    <img src={AlkenazLogo} class="brand-logo" alt="alkenaz" />

                    <div class="nav-items">

                        <div class="search">

                            <input type="text" class="search-box" placeholder="search brand, product" />
                            <button class="search-btn">search</button>
                        </div>
                        <a href='userpage'> <img src={userLogo} alt="user" /></a>
                        <a href="/cartpage"><img src={cartLogo} alt="cart" /></a>

                    </div>

                </div>
                <div>
                    <Navbar />
                </div>




            </nav>

            <Hero />

            <ProductsBar />

            <Collection />

            <Footer />

        </body>
    )
}

