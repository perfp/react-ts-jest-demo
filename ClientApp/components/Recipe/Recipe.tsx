import * as React from 'react';


export class Recipe extends React.Component<RecipeProp, {}> {

    render(){
        const recipe = this.props.recipe;

        return (
            <div className="row">
                <span className="col-sm-1">Name</span>
                <span className="col-sm-3">{recipe.name}</span>
            </div>
        )
    }
}

export interface RecipeProp {
    recipe: RecipeState
}

export interface RecipeState {
    name: string
}

