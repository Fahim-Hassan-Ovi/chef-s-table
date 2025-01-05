import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurRecipe from "./Components/OurRecipe";

export default function App() {
  return (
    <div className="container mx-auto px-4">
      {/* header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* Our Recipe Section */}
      <OurRecipe></OurRecipe>
    </div>
  )
}
