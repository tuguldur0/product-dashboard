"use client";
import React, { useState } from "react";
import { Product } from "./_features/product";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setimageUrl] = useState("")

  const Add = () => {
    if(name == ""){
      return;
    } else if(price == ""){
      return;
    } else if(category == ""){
      return;
    } else if(imageUrl == ""){
      return;
    }
    const newProducts = [...products, {id: products.length + 1, name: name, price: price, category: category, imageUrl: imageUrl}];
    setProducts(newProducts);
    setName("");
    setPrice("");
    setCategory("");
    setimageUrl("");
  }
  return (
    <div id="outterdiv">
      <div id="content">
        <h1 id="title">Product Dashboard</h1>
        <div id="addproduct">
          <div id="inputs">
            <input onChange={(event) => { setName(event.target.value) }} type="text" className="input"  value={name} placeholder="Name"></input>
            <input onChange={(event) => { setPrice(event.target.value) }} type="number" className="input" value={price} placeholder="Price"></input>
            <label htmlFor="options">Category:</label>
            <select id="options" value={category} onChange={(event) => setCategory(event.target.value)}>
            <label value="" disabled>--Select--</label>
              <option value="laptop">Laptop</option>
              <option value="phone">Phone</option>
              <option value="console">Console</option>
            </select>
            <input onChange={(event) => { setimageUrl(event.target.value) }} type="text" className="input" value={imageUrl} placeholder="imageUrl"></input>
          </div>
          <button onClick={Add} id="button">Add</button>
        </div>
        <h1 id="products-title">Products</h1>
        <div id="products">
          {products.map((product, index) => {
            return <Product key = {index} name = {product.name} price = {product.price} category = {product.category} imageUrl = {product.imageUrl}/>
          })}
        </div>
      </div>
    </div>
  );
}
