import { useState } from "react";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurRecipe from "./Components/OurRecipe";
import Recipes from "./Components/Recipes";
import Sidebar from "./Components/Sidebar";

export default function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);

  const addRecipeToQueue = recipe => {

    const isExist = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id)
    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe]);
    }
    else {
      alert('Recipe is already in the queue');
    }

  }
  console.log(recipeQueue);
  return (
    <div className="container mx-auto px-4">
      {/* header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* Our Recipe Section */}
      <OurRecipe></OurRecipe>
      {/* recipe cards section */}
      <section className="flex flex-col md:flex-row gap-6 ">
        {/* cards section */}
        <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
        {/* side bar */}
        <Sidebar recipeQueue={recipeQueue}></Sidebar>
      </section>
    </div>
  )
}
