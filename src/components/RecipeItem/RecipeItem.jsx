import React from "react";
import styles from "./RecipeItem.module.scss";
import { useSelector } from "react-redux";
import { actions } from "../../store/favorites/favorites.slice";
import { useActions } from "../../hooks/useActions";

function RecipeItem({ recipe }) {

  const favorites = useSelector((state) => state.favorites);

  const isExists = favorites.some((item) => item.id === recipe.id);

  const {toggleFavorites} = useActions()

  console.log(favorites);




  return (
    <div className={styles.item}>
      <h4>{recipe.name}</h4>
      <button onClick={() => toggleFavorites(recipe)}>
        {isExists ? 'Remove from' : 'Add to'} favorites
      </button>
    </div>
  );
}

export default RecipeItem;
