import React, { useState } from "react";
import "./recipesMoudle.css";
function Recipes({
  title,
  calories,
  image,
  ingredients,
  showIngredients,
  toggleIngredients,
}) {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <div className="recipe">
      <h1>{title}</h1>

      <button onClick={toggleShow}>
        {show ? "Hide Ingredients" : "Show Ingredients"}
      </button>

      {show && (
        <div className="ingredients">
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.text}</li>
            ))}
          </ul>
        </div>
      )}

    <p>
        <div className="title">Calories: </div>
        {parseFloat(calories).toFixed(0)}
      </p>
      <img src={image} alt={title} className="image" />
    </div>
  );
}

export default Recipes;
