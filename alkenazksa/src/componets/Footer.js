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
</footer>

    )
}

export default Footer