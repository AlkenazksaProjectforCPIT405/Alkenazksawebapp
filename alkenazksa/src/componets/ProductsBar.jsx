import { useEffect, useState } from "react";
import Product from './Prouduct';

import arrow from '../imagess/arrow.png'
const apiUrl = 'http://localhost:9000/server/api';



export default function ProductsBar() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchAllproducts();
    }, []);
    const fetchAllproducts = async () => {
        const response = await fetch(apiUrl + "/products.php");
        const result = await response.json();
        console.log('hello');
        console.log(result);
        if (result && result.length > 0) {
            setProducts(result);
        }
    }
    return (
        <section class="product">
            <button class="pre-btn"><img src={arrow} alt="" /></button>
            <button class="nxt-btn"><img src={arrow} alt="" /></button>
            <div class="product-container">
            {products.map((element) => {
                console.log(element);
                return <Product key={element.id} props={element} />;

            })}</div>
        </section>);
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