"use client"

import { useEffect, useState } from "react"

export default function Home() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
    fetch("https://dummyjson.com/products/?limit=0")
    .then((response) => response.json())
    .then((data) => setProducts(data.products))
    }, [])
    const [copyoproducts, setCopyoproducts] = useState(products);
    const [searchTerm, setSearchTerm] = useState("");
    const [first, setFirst] = useState(0);
    const [last, setLast] = useState(28);
    const [count, setCount] = useState(1);
    const [maxCount, setMaxCount] = useState(7)
    
    const search = (term) => {
        setCopyoproducts(products.filter((product) => product.title.toLowerCase().includes(term)))
        setFirst(0);
        setLast(28);
        setMaxCount(Math.floor(products.filter((product) => product.title.toLowerCase().includes(term)).length)/28)
    }
    const forward = () => {
        if(count < maxCount){
        setFirst(first+28);
        setLast(last+28);
        setCount(count+1);
        }
    }
    const backward = () => {
        if(first != 0 && last != 28){    
        setFirst(first-28);
        setLast(last-28);
        setCount(count-1)
    }
    }
    const filter = (term) => {
        if(term == "all"){
            setCopyoproducts(products)
            setFirst(0);
            setLast(28); 
            setCount(1)
            setMaxCount(Math.ceil(products.length/28))
        } else if(term == "50"){
            setCopyoproducts(products.filter((product) => product.price<50))
            setFirst(0);
            setLast(28); 
            setCount(1)
            setMaxCount(Math.floor(products.filter((product) => product.price<50).length/28))
        } else if(term == "50-200"){
            setCopyoproducts(products.filter((product) => product.price>50 && product.price < 200))
            setFirst(0);
            setLast(28);
            setCount(1) 
        } else if(term == "200"){
            setCopyoproducts(products.filter((product) => product.price>200))
            setFirst(0);
            setLast(28);
            setCount(1) 
        }
    }

    useEffect(() => {
        filter("all")
    }, [products])
    
    return (
        <div id="content3">
            <div id="inputs">
                <div>
                    <button onClick={() => filter("all")} id="button3">All</button>
                    <button onClick={() => filter("50")} id="button3">Under 50$</button>
                    <button onClick={() => filter("50-200")} id="button3">50-200$</button>
                    <button onClick={() => filter("200")} id="button3">Over 200$</button>
                </div>
                <div id="search3">
                    <input onChange={(event) => {setSearchTerm(event.target.value)}} value={searchTerm} placeholder="Search" id="input3"></input>
                    <button onClick={() => search(searchTerm.toLowerCase())}id="searchbutton3">🔍</button>
                </div>
            </div>
            <div id="grid3">
            {copyoproducts.slice(first, last).map((product) => {
                return <div id="productcard3" key={product.id}>
                    <p>{product.title}</p>
                    <p>Price: {product.price}$</p>
                    <p>Brand: {product.brand}</p>
                    <p>Category: {product.category}</p>
                    <p>Stock: {product.stock}</p>
                    <img src={product.thumbnail}></img>
                </div>
            })}
            </div>
            <div id="changePage">
                <button onClick={backward}>{'<'}</button>
                <p>{count}/{maxCount}</p>
                <button onClick={forward}>{'>'}</button>
            </div>
        </div>
    )
}

