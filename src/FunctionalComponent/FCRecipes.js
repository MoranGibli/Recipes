import React from "react";
import FCRecipe from "./FCRecipe";
export default function FCRecipes(props) {
    const recipes = props.recipes.map((recipe) => {
        return <FCRecipe img={recipe.img} name={recipe.name} 
        text={recipe.text} func={recipe.func} btn={recipe.btn} 
        prepare = {props.prepare} recipe={recipe} />
    })
    return (
        <div className="recipesDiv">
            {recipes}
        </div>
     
    )
}