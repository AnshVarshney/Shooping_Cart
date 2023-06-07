import React from 'react'

export default function CartList({cart,incCart,decCart}) {
    console.log("A");
  return (
    <div>
        {
            cart.map((value,index)=>{
                return (
                    <div>
                        <img src={value.url} alt="img" width={40}/>
                        <span>{value.name}</span>
                        <button onClick={()=>decCart(value)}>-</button>
                        <span>{value.quantity}</span>
                        <button onClick={()=>incCart(value)}>+</button>
                        <span>Rs. {value.price * value.quantity}</span>
                    </div>
                )
            })
        }

        <p> {`Total Price : Rs. `}  
            {
                cart.map(item=>item.price * item.quantity).reduce((total,value)=>total+value,0)
            }
        </p>

    </div>
  )
}
