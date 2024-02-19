import {RecipeTextarea, RecipePreparationWrapper} from "./RecipePreparationBlock.styled";

const RecipePreparation = () => {
    return (
        <RecipePreparationWrapper>
            <h2>Recipe preparation</h2>
            <label text="recipe preparation">
                <RecipeTextarea placeholder="Enter the recipe"></RecipeTextarea>
            </label>
        </RecipePreparationWrapper>
    )
}

export default RecipePreparation;