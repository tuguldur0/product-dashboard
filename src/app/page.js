"use client";
import React, { useState } from "react";
import { Product } from "./_features/product";
import { Cart } from "./_features/cart";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setimageUrl] = useState("")
  const [stock, setStock] = useState("")

  const Add = () => {
    if(name == ""){
      return;
    } else if(price == "" || price <= 0){
      return;
    } else if(category == ""){
      return;
    } else if(imageUrl == ""){
      return;
    } else if(stock == "" || stock <= 0){
      return
    }
    const newProducts = [...products, {id: products.length + 1, name: name, price: Number(price), category: category, imageUrl: imageUrl, stock: Number(stock)}];
    setProducts(newProducts);
    setName("");
    setPrice("");
    setCategory("");
    setimageUrl("");
    setStock("")
  }
  //    const handleAddToCart = (productId) => {
  //     cart.map(test => {if (test.id == productId) {
  //       setDoneBefore(true);
  //     }})
  //     setProducts(currentProducts => 
  //     currentProducts.map(product => {
  //       if (product.id == productId && product.stock > 0 && doneBefore == false) {
  //         const newCart = [...cart, {id: product.id, name: product.name, price: product.price, category: product.category, imageUrl: product.imageUrl, quantity: 1}]
  //         setCart(newCart);
  //         return {...product, stock: product.stock - 1};
  //       } else {
  //         cart.map(cartItem => {
  //           if (cartItem.id == productId){
              
  //           }
  //         })
  //       }
  //       // return product;
  //     })
  //   );
  // };

  const handleAddToCart = (productId) => {
    const item = products.find((p) => p.id == productId);
    if(item.stock > 0){
      const tempCart = [...products];
      const letsCheckIfItExistsInOurCart = tempCart.find((item1) => item1.id == productId);
      const tempProducts = tempCart.map((product) => product.id == productId ? {...product, stock: product.stock - 1} : "")
      setProducts(tempProducts)
      if(letsCheckIfItExistsInOurCart){
        return tempCart.map(item2 => item2.id == productId ? {...item, quantity: quantity + 1 } : "")
      } else {
        return {...tempCart, id: item.id, name: item.name, price: item.price, category: item.category, imageUrl: item.imageUrl, quantity: 1};
      }
  };
}






  

  return (
    <div id="outterdiv">
      <div id="content">
        <h1 id="title">Product Dashboard</h1>
        <div id="addproduct">
          <div id="inputs">
            <input onChange={(event) => { setName(event.target.value) }} type="text" className="input"  value={name} placeholder="Name"></input>
            <input onChange={(event) => { setPrice(event.target.value) }} type="number" className="input" value={price} placeholder="Price"></input>
            <label htmlFor="options"></label>
            <select id="options"  className="input" value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="" disabled>Category</option>
              <option value="Laptop">Laptop</option>
              <option value="Phone">Phone</option>
              <option value="Console">Console</option>
            </select>
            <input onChange={(event) => { setimageUrl(event.target.value) }} type="text" className="input" value={imageUrl} placeholder="imageUrl"></input>
            <input onChange={(event) => { setStock(event.target.value) }} type="number" className="input" value={stock} placeholder="Stock"></input>
          </div>
          <button onClick={Add} id="button">Add</button>
        </div>
        <h1 id="products-title">Products</h1>
        <div id="products">
          {products.map((product) => {
            return <Product key = {product.id} name = {product.name} price = {product.price} category = {product.category} imageUrl = {product.imageUrl} stock = {product.stock} addToCart={() => handleAddToCart(product.id)}/>
          })}
        </div>
        <h1 id="products-title">Cart</h1>
        <div id="cart">
          {cart.map((cartItem) => {
            return <Cart key = {cartItem.id} name = {cartItem.name} price = {cartItem.price} category = {cartItem.category} imageUrl = {cartItem.imageUrl} quantity = {cartItem.quantity}/>
          })}
        </div>
      </div>
    </div>
  );
}
