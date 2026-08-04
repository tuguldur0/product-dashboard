"use client"
import React, { useState } from "react";

export default function Home() {
    const tops = {
    sunny: ["👕 T-Shirt", "👚 Crop Top", "👕 Polo"],
    cloudy: ["🧥 Jacket", "👕 Hoodie", "👕 Long Sleeve"],
    rainy: ["🧥 Raincoat", "☂️ Hoodie", "🧥 Windbreaker"],
    };
 
    const bottoms = {
    sunny: ["🩳 Shorts", "👖 Jeans", "👖 Skirt"],
    cloudy: ["👖 Jeans", "👖 Cargo", "👖 Joggers"],
    rainy: ["👖 Waterproof Pants", "👖 Jeans", "👖 Black Pants"],
    };
    
    const shoes = {
    sunny: ["👟 Sneakers", "🩴 Sandals", "👟 Converse"],
    cloudy: ["👟 Running Shoes", "🥾 Boots", "👟 Sneakers"],
    rainy: ["🥾 Rain Boots", "👟 Waterproof Shoes", "🥾 Boots"],
    };

    const [topsValue, setTops] = useState("");
    const [bottomsValue, setBottoms] = useState("");
    const [shoesValue, setShoes] = useState("");
    const [title, setTitle] = useState("");

    const randomize = (value) => {
        if(value == "sunny"){
            setTitle("Sunny")
            setTops(tops.sunny[Math.floor(Math.random()*3)])
            setBottoms(bottoms.sunny[Math.floor(Math.random()*3)])
            setShoes(shoes.sunny[Math.floor(Math.random()*3)])
        } else if(value == "cloudy"){
            setTitle("Cloudy")
            setTops(tops.cloudy[Math.floor(Math.random()*3)])
            setBottoms(bottoms.cloudy[Math.floor(Math.random()*3)])
            setShoes(shoes.cloudy[Math.floor(Math.random()*3)])
        } else {
            setTitle("Rainy")
            setTops(tops.rainy[Math.floor(Math.random()*3)])
            setBottoms(bottoms.rainy[Math.floor(Math.random()*3)])
            setShoes(shoes.rainy[Math.floor(Math.random()*3)])
        }
    }
    return (
        <div id="main1">
            <h1>Outfit generator</h1>
            <div id="buttons1">
                <button onClick={() => randomize("sunny")} className="button1">Sunny</button>
                <button onClick={() => randomize("cloudy")} className="button1">Cloudy</button>
                <button onClick={() => randomize("rainy")} className="button1">Rainy</button>
            </div>
            <div id="result1">
                <h1>{title}</h1>
                <div id="outcome1">
                    <p>{topsValue}</p>
                    <p>{bottomsValue}</p>
                    <p>{shoesValue}</p>
                </div>
            </div>
        </div>
    )
}