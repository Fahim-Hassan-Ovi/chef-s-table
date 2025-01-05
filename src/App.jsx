import { useState } from "react";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurRecipe from "./Components/OurRecipe";
import Recipes from "./Components/Recipes";
import Sidebar from "./Components/Sidebar";
import { use } from "react";

export default function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime]= useState(0);
  const [totalCalories, setTotalCalories]= useState(0);

  const addRecipeToQueue = recipe => {

    const isExist = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id)
    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe]);
    }
    else {
      alert('Recipe is already in the queue');
    }

  }

const handleRemove= (id)=>{
  // find which recipe to remove
  const deletedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id);

  // remove from want to cook table
  const updatedQueue = recipeQueue.filter(recipe=> recipe.recipe_id !== id)
  setRecipeQueue(updatedQueue);
  setPreparedRecipe([...preparedRecipe, deletedRecipe])
}

const calculateTimeAndCalories = (time, calorie)=>{
setTotalTime(totalTime + time);
setTotalCalories(totalCalories + calorie);
}
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
        <Sidebar 
        preparedRecipe={preparedRecipe} 
        handleRemove={handleRemove} 
        recipeQueue={recipeQueue}
        calculateTimeAndCalories={calculateTimeAndCalories}
        totalTime={totalTime}
        totalCalories={totalCalories}
        >
        </Sidebar>
      </section>
    </div>
  )
}
