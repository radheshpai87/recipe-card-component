import React from 'react'
import RecipeCard from './components/recipe-card';
import './App.css'

function App() {
  const recipes = [
  {
    title: "Spaghetti Carbonara",
    time: "20 mins",
    image: "/spaghetti-carbonara.jpg", // replace with actual image path or URL
    difficulty: "Easy",
    description: "Perfect creamy pasta dish with eggs and bacon",
    tags: ["Vegetarian"],
    ingredients: "Pasta, Eggs, Bacon, Cheese"
  },
  {
    title: "Quinoa Salad",
    time: "15 mins",
    image: "/QuinoaSalad.jpg", // replace with actual image or placeholder
    difficulty: "Medium",
    description: "Healthy and filling salad bowl",
    tags: ["Vegan", "Gluten-Free"],
  },
  {
    title: "Chocolate Cake",
    time: "60 mins",
    image: "", // replace with actual image path or URL
    difficulty: "Hard",
    description: "Rich and decadent dessert",
    tags: ["Vegetarian"],
    ingredients: "Flour, Cocoa, Sugar"
  }
];

return (
  <div className='cards-container'>
    <h1>Recipe Card Demo</h1>
    {recipes.map((recipe, idx) => (
      <RecipeCard
        key={idx} 
        name={recipe.title}
        cookingTime={recipe.time}
        difficulty={recipe.difficulty}
        description={recipe.description}
        image={recipe.image}
        ingredients={recipe.ingredients}
        dietaryTags={recipe.tags}
      />
    ))}
  </div>
)

}

export default App
