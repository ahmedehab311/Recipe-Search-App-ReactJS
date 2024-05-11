import React, {useEffect , useState}from "react";
import Recipes from "./recipes";
import "./styleT3.css"

function Home() {
  const appId = "a6872952";
  const appKey = "86ba020ca4584f493ef4e9dd5bb49ca8";
// use state 
  const [recipes, setRecipes] = useState([]);
const [search,setSearch] = useState("");
const [query,setQuery]=useState('chicken');
const [showIngredients, setShowIngredients] = useState(false);



// toggle function
const toggleIngredients = () => {
    setShowIngredients(!showIngredients);
  }; 

//use effect and fetch the apikey

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`
    );

    const data = await response.json();
    setRecipes(data.hits);

    console.log(data.hits);
  };


// search functions 

  const updateSearch = e => {
    setSearch(e.target.value);

  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }


  return (
    <div className="apps">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text"  value={search} placeholder="Search for any type of food or juice" onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
        
      </form>

<div className="recipes">

{recipes.map((recipe) => (
    <>
 
        <Recipes
        
        key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
          showIngredients={showIngredients}
          toggleIngredients={toggleIngredients}
        />
        </>
      ))}
</div>
    </div>
  );
}

export default Home;
