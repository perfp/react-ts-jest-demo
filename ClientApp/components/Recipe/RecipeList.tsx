import *  as React from 'react';
import {Recipe, RecipeState} from './Recipe'

export class RecipeList extends React.Component<RecipeListState, RecipeListState>{
    
    render(){
        
        let recipes : RecipeState[] = this.props.recipes;

        return (
            <div>
                {
                    recipes.map((recipe : RecipeState, index: number) => (
                        <Recipe recipe={recipe} key={index}/>
                    ))
                }
            </div>
        )
    }
}

export interface RecipeListState {
    recipes : RecipeState[]
}