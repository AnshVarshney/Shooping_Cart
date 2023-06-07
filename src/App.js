import { useState,useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';


function App() {

  const [product, setProduct] = useState([
    {
      url: "https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70",
      name: 'TRQ White Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999,
      quantity:1
    },
    {
      url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599,
      quantity:1
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
      name: 'AMZ Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 50000,
      quantity:1
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoDzLqrT7GwU3z7Ccp0Cl9rV0ZnU9DcmEg&usqp=CAU',
      name: 'Security Camera',
      category: 'CCTV',
      seller: 'Camron LTD',
      price: 4000,
      quantity:1
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
      name: 'Watch Pink',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 2000,
      quantity:1
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
      name: 'Cup red Color',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 100,
      quantity:0
    },
  ]);
  

  const [cart, setCart] = useState([]);
  
  const addtoCart = (data)=>{
    let flag=false;
    cart.forEach(element=>{
      if(element===data)
      flag=true;
    })
    if(!flag)
    setCart([...cart,data]);
  }

  const [showCart, setShowCart] = useState("false");

  const toggler = (togg)=>{
    setShowCart(togg);
  }

  const incCart = (data)=>{
    cart.forEach(element => {
      if(data===element)
      {
        ++element.quantity;
      }
    });
    console.log(product)
  }
  const decCart = (data)=>{
    cart.forEach(element => {
      if(data===element)
      {
        if(element.quantity==0)
        {
          element.quantity=0;
        }
        else
        {
        --element.quantity;
        }
      }
    });
  }


  // useEffect(() => {

  // }, [setProduct()])
  

  return (
    <div className="main">
      <Header count={cart.length} toggler={toggler}/>
      {
        showCart?
        <ProductList product={product} addtoCart={addtoCart} />:
        <CartList cart={cart} incCart={incCart} decCart={decCart}/>
      }
    </div>
  );
}

export default App;
