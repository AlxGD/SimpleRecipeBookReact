import React from 'react';

function RecipeItem({ recipe }) {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h3 className="card-title">{recipe.title}</h3>
                <p className="card-text">{recipe.description}</p>
            </div>
        </div>
    );
}

export default RecipeItem;
