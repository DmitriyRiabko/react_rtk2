import { useState } from "react";
import RecipeItem from "./components/RecipeItem/RecipeItem";

function App() {
  return (
    <>
      <div>React+ReduxToolkit_step2</div>
      <br />
      <RecipeItem recipe={{ id: 1, name: "Lasagna" }} />
      <RecipeItem recipe={{ id: 2, name: "Poridge" }} />   
      <RecipeItem recipe={{ id: 3, name: "Pasta" }} />
    </>
  );
}

export default App;
