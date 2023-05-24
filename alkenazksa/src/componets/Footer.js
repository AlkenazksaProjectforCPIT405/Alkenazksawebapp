import React from "react";
import kenaz from '../imagess/Akenaz_logo2.png';
import '../componets/footer.css';

function Footer(){
    return(
        <footer>
    <div class="footer-content">
        <img src={kenaz} class="logo" alt=""/>
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Alkenaz</li>
                <li><a href="#" class="footer-link">Abaya</a></li>
                <li><a href="#" class="footer-link">Tarha</a></li>
                <li><a href="#" class="footer-link">Support</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">Accent your outfit with a uniquely designed Kenaz made from high quality materials. Every design we offer tells a story you are a part of</p>
    <p class="info">support emails - Alkenaz@care.com Alkenazksa@gmail.com</p>
  
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="https://www.instagram.com/alkenazksa/" class="social-link">instagram</a>
            <a href="https://www.snapchat.com/add/https://www.snapchat.com/add/alkenazksa" class="social-link">Snap chat</a>
            <a href="https://twitter.com/alkenazksa" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Alkenaz ABAYA, the BEST</p>
</footer>

    )
}

export default Footer