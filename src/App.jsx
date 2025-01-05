import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurRecipe from "./Components/OurRecipe";
import Recipes from "./Components/Recipes";
import Sidebar from "./Components/Sidebar";

export default function App() {
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
        <Recipes></Recipes>
        {/* side bar */}
        <Sidebar></Sidebar>
      </section>
    </div>
  )
}
