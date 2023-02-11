import React from "react";
import FCRecipes from "./FCRecipes";
export default function FCRecipe(props) {
  
    return (
       
        <div className="card " >
            <img className="card-img-top" src={props.img}></img>
            <h3>{props.name}</h3>
            <p>{props.text}</p>
            <div className="btnCenter">
            <button type="button" onClick = {() => props.prepare(props.recipe)} className="btn">{props.btn}</button>
            </div>
        </div>
    
    )
}