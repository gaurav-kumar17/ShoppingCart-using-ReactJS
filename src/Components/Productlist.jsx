import "../App.css";
import React from "react";
const Productlist = ({ product,addToCart }) => {
 
  return (
    <div className="flex">
      {
        product.map((productItems, productIndex) => {

        return (
            <div style={{width:'50%', border:"1px solid red"}}>
                <div className="product-item">
                    <img src={productItems.url} width="50%" />
                    <p>{productItems.name} | {productItems.category}</p>
                    <p>{productItems.seller}</p>
                    <p>Rs. {productItems.price} /-</p>
                    <button onClick={()=> addToCart(productItems)}>Add to Cart</button>
                </div>
            </div>
            )

      })
      }
    </div>
  );
};
export default Productlist;
