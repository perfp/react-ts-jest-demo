import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { RecipeList, RecipeListState } from './RecipeList';
import { RecipeState } from './Recipe';
import './styles.css';

type RecipeAppState = RecipeListState & RecipeEditState & RouteComponentProps<{}>;

export default class Home extends React.Component<RecipeAppState, RecipeEditState> {

    constructor(props : any){
        super(props as any);
        this.state = {
            recipes: [
                {"name": "Lasagnesamosa"},
                {"name": "Ice Cube Pie"}
            ],
            editingRecipe: null,
            currentRecipe: -1,
            isEditingRecipe: false
        }

        this.addRecipe = this.addRecipe.bind(this);
        this.onChange = this.onChange.bind(this)
        this.saveRecipe = this.saveRecipe.bind(this);
    }

    addRecipe(){
            
            var newrecipe = {name: ''};

            this.setState({
                editingRecipe: newrecipe,
                isEditingRecipe: true
            });

    }

    onChange(event : any){
        var target = event.target as HTMLInputElement;
        if (target){
            const value  = target.value;
            const name = target.name;
            var previousRecipe = this.state.editingRecipe;

            var recipe = {
                ...previousRecipe,
                [name]: value
            } as RecipeState;
            
            this.setState( { editingRecipe: recipe } );
        }
    }

    saveRecipe(event : any){
        event.preventDefault();
        const recipes = this.state.recipes.slice().concat(this.state.editingRecipe!);
        this.setState({isEditingRecipe: false, editingRecipe: null, recipes: recipes});
    }

    public render() {
        

        return (
            <div>
                <h1>Recipes</h1>
                <div className="container">
                    <div className="row">     
                        <div className="col-lg-6">                   
                            <input type="text" className="input-lg" />
                            <button type="submit" className="input-lg">Search </button>
                        </div>
                    </div>
                    <div className="row">
                        <h2>Top 10 recipes</h2>
                        <RecipeList recipes={this.state.recipes}  />
                    </div>
                    <div className="row add-recipe">
                    {!this.state.isEditingRecipe ? (
                        
                            <button className="input-lg add" onClick={this.addRecipe}>Add recipe</button>
                        
                    ) : (
                        <div>
                            <h2> Add recipe </h2>
                            <div className="col-lg-6">
                                <form onSubmit={this.saveRecipe}>
                                    
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>    
                                            <input type="text" name="name" ref="recipename" className="input-lg form-control" onChange={this.onChange} />
                                    </div>
                                    <button type="submit" className="input-lg">Save</button>

                                </form>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        );
    }


}

interface RecipeEditState extends RecipeListState {
    isEditingRecipe : boolean,
    currentRecipe: number,
    editingRecipe : RecipeState | null

}
