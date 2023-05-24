import React from "react";
import './pages_css/collection.css';
import Abaya from '../imagess/Abaya0.jpg';
import Tarha from '../imagess/Tarha2.jpg';
function Collection(){
    return(
        <section class="collection-container">
    <a href="#" class="collection">
        <img src={Abaya} alt=""/>
        <p class="collection-title">Abaya  <br/> apparels</p>
    </a>
    <a href="#" class="collection">
        <img src={Tarha} alt=""/>
        <p class="collection-title">Tarha <br/> apparels</p>
    </a>
   
</section>
    )
}
export default Collection;