import React, { useState } from 'react';
import RecipeItem from './Components/RecipeItem';
import AdicionarReceita from './Components/AdicionarReceita';
import './App.css';

function App() {
    const [recipes, setRecipes] = useState([
        { id: 1, title: 'Macarrão Carbonara', description: 'Delicioso prato de macarrão com bacon e ovos' },
        { id: 2, title: 'Parmeggiana de Frango', description: 'Frango empanado com molho, queijo e arroz' },
        { id: 3, title: 'Brownie Americano', description: 'Sobremesa de chocolate com manteiga' },
    ]);

    const addRecipe = (recipe) => {
        const newRecipe = { ...recipe, id: recipes.length + 1 };
        setRecipes([...recipes, newRecipe]);
    };

    return (
        <div className="container">
            <h1>Livro de Receitas</h1>
            <div className="recipe-list">
                {recipes.map((recipe) => (
                    <RecipeItem key={recipe.id} recipe={recipe} />
                ))}
                <AdicionarReceita addRecipe={addRecipe} />
            </div>
        </div>
    );
}

export default App;
