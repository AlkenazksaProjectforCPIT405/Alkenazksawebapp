import './pages_css/notfound.css';
import Home from '../pages/Home.js';
import p404p from '../imagess/404.png';
import Header from "../componets/Header"
export default function NotFound(){
    return(
        <div class="aa">
        <img src={p404p} class="four-0-four-image" alt=""/>
        <p class="four-0-four-msg">look like you are lost. Head to beack to our <a href='/'>Alkenaz</a></p>
        </div>
    )
}