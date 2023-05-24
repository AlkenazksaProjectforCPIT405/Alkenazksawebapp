import React from "react";
import AlkenazLogo2 from '../imagess/Akenaz_logo2.png';
import '../componets/Hero.css';

function Hero(){
return(
    <header class="hero-section">
    <div class="content">
        <img src={AlkenazLogo2} class="logo" alt=""/>
        <p class="sub-heading">best ABAYA is HERE</p>
    </div>
</header>
);
}

export default Hero;