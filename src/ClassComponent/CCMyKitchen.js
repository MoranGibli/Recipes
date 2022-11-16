import FCRecipes from "../FunctionalComponent/FCRecipes";
import React, { Component } from "react";
class MyKitchen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes: [{ img: "https://www.burger-il.com/wp-content/uploads/2019/06/biet-haburger-981.jpg", name: "Hamburger", text: "A hamburger (or burger for short) is a food, typically considered a sandwich, consisting of one or more cooked patties—usually ground meat, typically beef—placed inside a sliced bread roll or bun. ", func: "btnClick", btn: 'Prepare Dish' },
      { img: "https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/2019/08/13182108/%D7%A1%D7%99%D7%99%D7%9E%D7%9F-185.jpg", name: "Pizza", text: "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients", func: "btnClick", btn: "Prepare Dish" }
        , { img: "https://img.mako.co.il/2020/05/18/HALUMI_IMG_6007_c.jpg", name: "Salad", text: "Salad is a dish consisting of mixed pieces of food, typically with at least one raw ingredient. They are often dressed, and typically served at room temperature or chilled, though some can be served warm.", func: "btnClick", btn: "Prepare Dish" }]
    }
  }

  prepareDish = (recipe) => {
    let newRecipes = [...this.state.recipes];
    let newRecipe = { ...recipe };
    newRecipe.btn = newRecipe.btn === 'eat!' ? 'Prepare Dish' : 'eat!';
    newRecipes = newRecipes.map(rec => rec === recipe ? newRecipe : rec);


    this.setState({
      recipes: newRecipes
    })
  }

  render() {
    let madeRecipes = this.state.recipes.filter(recipe => recipe.btn === "Prepare Dish");
    let rteRecipes = this.state.recipes.filter(recipe => recipe.btn === "eat!");
    return (
      <div >

        {madeRecipes.length > 0 ?
          
            <div >
              <h1 className="header">Recipes</h1>
              <h3 className="header">Recipes made</h3>
              <FCRecipes recipes={madeRecipes} prepare={this.prepareDish}></FCRecipes>
            </div>
            : null
           
        }
            {rteRecipes.length > 0 ?
              <div >
                <h1 className="header">Ready to EAT!</h1>
                <h3 className="header">Recipes made:{rteRecipes.length}</h3>
                <FCRecipes recipes={rteRecipes} prepare={this.prepareDish}></FCRecipes>
              </div> : null

            }

          </div>
  
    )

  }

}

export default MyKitchen;