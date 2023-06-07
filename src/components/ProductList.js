import React from 'react'
import '../App.css';

export default function ProductList({ product,addtoCart }) {


    // let flag=[0,0,0,0,0,0];

    // const dis = (index)=>{

    // }
    console.log(product)
    return (
        <div className="flex">
            {
                product.map((value, index) => {
                    return (
                        <div style={{width: '50%'}}>
                            <div className="product-item">
                                <img src={value.url} alt="img" width='100%' />
                                <p>{value.name} | {value.category}</p>
                                <p>{value.seller}</p>
                                <p>Rs. {value.price} /-</p>
                                <button onClick={()=>addtoCart(value)}>Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
