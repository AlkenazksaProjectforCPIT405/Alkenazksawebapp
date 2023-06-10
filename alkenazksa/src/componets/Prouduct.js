import React from "react";
const imgPath = "imagess/"

function Product({props}) {
    return (

                <div className="product-card">
                    <a href='proudectpage' className="edit_href">
                        <div className="product-image">
                            <img src={imgPath+props.img}  className="product-thumb" alt="" />
                            <button className="card-btn">add to whislist</button>
                        </div>
                        <div className="product-info">
                            <h2 className="product-brand">{props.type}</h2>
                            <p className="product-short-des">{props.name}</p>
                            <span className="price">{props.price}</span>
                        </div>
                    </a>
                </div>
           

    );
}

export default Product;

