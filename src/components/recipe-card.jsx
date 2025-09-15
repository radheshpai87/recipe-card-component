import React from "react";
import './recipe-card.css'

export default function recipeCard({
    name, 
    cookingTime, 
    difficulty, 
    description,
    image,
    ingredients = 'No ingredients specified',
    dietaryTags = []}){

    return(
        <div className="recipe-card">
            <div className="recipe-cover">
                {image ? <img src={image} alt={name} /> : <div className="image">Recipe Image</div>}
            </div>
            <div className="recipe-info">
                <h3 className="recipe-title">{name}</h3>
                <p className="cookingTime">{cookingTime}</p>
                <div className={difficulty}>{difficulty}</div>
                <p className="description">{description}</p>
                <hr />
                {dietaryTags.map((tag, i) => {
                    <div key={i} className={tag}>{tag}</div>
                })}
                <h4>Ingridents</h4>
                <p className="ingredients">{ingredients}</p>
            </div>
        </div>
    );
}