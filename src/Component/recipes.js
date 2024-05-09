import React ,{useState}from "react";
import "./recipesMoudle.css";
function Recipes({ title, calories, image, ingredients,showIngredients,toggleIngredients   }) {
  
    const [show, setShow] = useState(false);
    const toggleShow = () => {
        setShow(!show);
      };
    return (
    <div className="recipe">
      <h1>{title}</h1>
      <button onClick={toggleIngredients}>
    {showIngredients ? "Hide Ingredients" : "Show Ingredients"}
  </button>
      {showIngredients && (
        <div className="ingredients" style={{ opacity: show ? '0' : '1' }}>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.text}</li>
            ))}
          </ul>
        </div>
      )}
 
      <p><div className="title">Calories:  </div>{calories}</p>
      <img src={image} alt={title} className="image" />
    </div>
  );
}

export default Recipes;
