"use client"
import React, { useState} from "react";
export function User(props) {
const {name, phone, dob, favLang} = props;
const [isTheDetailThingyOpen, setIsTheDetailThingyOpen] = useState(false);

const soLikeWePressTheDetailsButtonRight = () => {
    setIsTheDetailThingyOpen(!isTheDetailThingyOpen);
}
return (
    <div id="product">
        <div id="text2">
            <h1>Name: {name}</h1>
            <button onClick={soLikeWePressTheDetailsButtonRight}>{isTheDetailThingyOpen ? "Hide Details" : "Show Details"}</button>
        </div>
        {isTheDetailThingyOpen ? <p id="text2">date of birth: {dob}</p> : <p></p>}
        {isTheDetailThingyOpen ? <p id="text2">phone number: {phone}</p> : <p></p>}
        {isTheDetailThingyOpen ? <p id="text2">favorite coding language: {favLang}</p> : <p></p>}
    </div>
  );
}
