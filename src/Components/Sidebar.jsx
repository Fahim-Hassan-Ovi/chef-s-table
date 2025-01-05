
export default function Sidebar({recipeQueue}) {
  return (
    <div className="md:w-1/3">
      Want to cook: {recipeQueue.length}
    </div>
  )
}
