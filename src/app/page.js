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
  const [isAllSelected, setIsAllSelected] = useState(true);
  const [isLaptopSelected, setIsLaptopSelected] = useState(false);
  const [isPhoneSelected, setIsPhoneSelected] = useState(false);
  const [isConsoleSelected, setIsConsoleSelected] = useState(false);
  const [total, setTotal] = useState(0)

  const heylookimselectingall = () => {
    setIsAllSelected(true)
    setIsLaptopSelected(false)
    setIsPhoneSelected(false)
    setIsConsoleSelected(false)
  }
  const heylookimselectinglaptop = () => {
    setIsLaptopSelected(true)
    setIsAllSelected(false)
    setIsPhoneSelected(false)
    setIsConsoleSelected(false)
  }
  const heylookimselectingphone = () => {
    setIsPhoneSelected(true)
    setIsAllSelected(false)
    setIsLaptopSelected(false)
    setIsConsoleSelected(false)
  }
  const heylookimselectingconsole = () => {
    setIsConsoleSelected(true)
    setIsAllSelected(false)
    setIsLaptopSelected(false)
    setIsPhoneSelected(false)
  }

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
const handleAddToCart = (productId) => {
    const product = products.find((p) => p.id === productId);
    setTotal(total + product.price)
    if (product.stock > 0){
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id == productId ? { ...p, stock: p.stock - 1 } : p
      )
    );
    setCart((prevCart) => {
      const existingCartItem = prevCart.find((item) => item.id === productId);
      if (existingCartItem) {
        return prevCart.map((item) =>
          item.id == productId ? { ...item, stock: item.stock + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, stock: 1 }];
      }
    });
    }
  };

  return (
    <div id="outterdiv">
      <div id="content">
        <div>
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
          <div id="sort">
            <p id="text">Sort by category:</p>
            <button id="button0" onClick={heylookimselectingall}>All</button>
            <button id="button0" onClick={heylookimselectinglaptop}>Laptop</button>
            <button id="button0" onClick={heylookimselectingphone}>Phone</button>
            <button id="button0" onClick={heylookimselectingconsole}>Console</button>
          </div>
        </div>
        <h1 id="products-title">Products</h1>
        <div id="products">
          {isAllSelected ? products.map((product) => {
            return <Product key = {product.id} name = {product.name} price = {product.price} category = {product.category} imageUrl = {product.imageUrl} stock = {product.stock} addToCart={() => handleAddToCart(product.id)}/>
          }) : isLaptopSelected ? products.map((product) => {
            if(product.category == "Laptop"){
              return <Product key = {product.id} name = {product.name} price = {product.price} category = {product.category} imageUrl = {product.imageUrl} stock = {product.stock} addToCart={() => handleAddToCart(product.id)}/>
            }
          }): isPhoneSelected ? products.map((product) => {
            if(product.category == "Phone"){
              return <Product key = {product.id} name = {product.name} price = {product.price} category = {product.category} imageUrl = {product.imageUrl} stock = {product.stock} addToCart={() => handleAddToCart(product.id)}/>
            }
          }): isConsoleSelected ? products.map((product) => {
            if(product.category == "Console"){
              return <Product key = {product.id} name = {product.name} price = {product.price} category = {product.category} imageUrl = {product.imageUrl} stock = {product.stock} addToCart={() => handleAddToCart(product.id)}/>
            }
          }): <p></p>} 
        </div>
        </div>
        <div>
        <h1 id="title">Cart</h1>
        <div id="cart">
          {cart.map((cartItem) => {
            return <Cart key = {cartItem.id} name = {cartItem.name} price = {cartItem.price} category = {cartItem.category} imageUrl = {cartItem.imageUrl} stock = {cartItem.stock}/>
          })}
        </div>

        </div>
        <p id="title">Total Price: {total}$</p>

      </div>
      
    </div>
  );
}
